import * as mongoose from 'mongoose';

export default class VersionableRepository
 <D extends mongoose.Document, M extends mongoose.Model<D>> {

    public static generationObjectId() {
        return String(new mongoose.Types.ObjectId());
    }

    private model;
    constructor(model) {
        this.model = model;
    }

    protected async findOne(query: any): Promise<D> {
        const finalQuery = { deletedAt: undefined, ...query};
        return await this.model.findOne(finalQuery).lean();
    }

    protected async find(query: any = {}, projection: any = {}, options: any = {}): Promise<D[]> {
        const finalQuery = { deletedAt: undefined, ...query};
       return await this.model.find(query, projection, options);
    }

    public async count(): Promise<number> {
        const finalQuery = { deletedAt: undefined};
        return this.model.count(finalQuery);
    }

    public async create(options: any): Promise<D> {
        const id = VersionableRepository.generationObjectId();
        const model = new this.model({
            _id: id,
            originalId: id,
            ...options,
        });
        return await model.save();

    }

    protected async softDelete( data: any) {
        return await this.model.updateOne({ originalId: data.originalId, deletedAt: undefined }, {deletedAt: Date.now()});
    }

    public async update(data: any): Promise<D> {

        const prev = await this.findOne({originalId: data.originalId, deletedAt: undefined});
        if (prev) {
            await this.softDelete(data.originalId);
        } else {
            return undefined;
        }
        const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
        newData._id = VersionableRepository.generationObjectId();
        delete newData.deletedAt;

        const model = new this.model(newData);
        return model.save();
    }
}