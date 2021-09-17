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

    protected findOne(query: any): mongoose.Query<D, D> {
        const finalQuery = { deletedAt: undefined, ...query};
        return this.model.findOne(finalQuery).lean();
    }

    protected find(query: any = {}, projection: any = {}, options: any = {}): mongoose.Query<D[], D> {
        const finalQuery = { deletedAt: undefined, ...query};
       return this.model.find(finalQuery, projection, options);
    }

    public count(): mongoose.Query<number, D> {
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

    protected softDelete( id: any) {
        return this.model.updateOne({ originalId: id, deletedAt: undefined }, {deletedAt: Date.now()});
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