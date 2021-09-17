import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';
import VersionableRepository from '../versionable/VersionableRepository';

export default class UserRepository extends VersionableRepository
<IUserModel, mongoose.Model<IUserModel>> {

    constructor() {
        super(userModel);
    }

    public async findOne(query): Promise<IUserModel> {
        return await super.findOne(query);
    }

    public async find(query, projection?: any, options?: any): Promise<IUserModel[]> {
       return await super.find(query, projection, options);
    }

    public async count(): Promise<number> {
        return await super.count();
    }

    public async create(data: any): Promise<IUserModel> {
        return await super.create(data);
    }

    public async updated(data: any): Promise<IUserModel> {
        return await super.update(data);
    }

<<<<<<< HEAD
    public async delete(data: any): Promise<IUserModel> {
        return await super.softDelete(data);
=======
    public delete(data: any): mongoose.Query<object, IUserModel> {
        return super.softDelete(data.originalId);
>>>>>>> 3ace3a7147704ae4b1a715efc39ea8886592e340
    }
}