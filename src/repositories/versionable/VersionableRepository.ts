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
        const { search = '', limit, skip } = query;
        const finalQuery: any = { deletedAt: undefined,
            $or: [
                {name : {$regex : search, $options: 'i' } },
                {email : {$regex : search, $options: 'i' } },
            ],
        };
       return await this.model.find(finalQuery, projection, { sort : { name: '-1', email: '-1'}, skip, limit});
    }

    public async count(): Promise<number> {
        const finalQuery: any = { deletedAt: undefined};
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
        return await this.model.updateOne({ originalId: data, deletedAt: undefined }, {deletedAt: Date.now()});
    }

    public async update(data: any): Promise<D> {

        const prev = await this.findOne({originalId: data.originalId});
        if (prev) {
            await this.softDelete(data.originalId);
        } else {
            return undefined;
        }
        const newData = Object.assign(JSON.parse(JSON.stringify(prev)), data);
        newData._id = VersionableRepository.generationObjectId();

        const model = new this.model(newData);
        return model.save();
    }
    // Feature Feedback
    public async review(data: any): Promise<D> {
        const{originalId, feedback} = data;
        return this.model.updateOne({originalId, deleteAt: undefined}, {feedback}).lean();
    }



}
