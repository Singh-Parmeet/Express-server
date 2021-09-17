import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository
<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(userModel);
    }

    public findOne(query): mongoose.Query<IUserModel, IUserModel> {
        return super.findOne(query).lean();
    }

    public find(query, projection?: any, options?: any): mongoose.Query<IUserModel[], IUserModel> {
       return super.find(query, projection, options);
    }

    public count(): mongoose.Query<number, IUserModel> {
        return super.count();
    }

    public async create(data: any): Promise<IUserModel> {
        return await super.create(data);
    }

    public async updated(data: any): Promise<IUserModel> {
        return await super.update(data);
    }

    public async delete(data: any): Promise<IUserModel> {
        return await super.softDelete(data);
    }
}