import * as mongoose from 'mongoose';
import { userModel } from './UserModel';
import IUserModel from './IUserModel';

export default class UserRepository {
    public static generationObjectId() {
        return String(new mongoose.Types.ObjectId());
    }
    public findOne(query): mongoose.Query<IUserModel, IUserModel> {
        return userModel.findOne(query).lean();
    }
    public find(query, projection?: any, options?: any): mongoose.Query<IUserModel[], IUserModel> {
       return userModel.find(query, projection, options);
    }
    public count(): mongoose.Query<number, IUserModel> {
        return userModel.count();
    }
    public create(data: any): Promise<IUserModel> {
        console.log('UserRepository:: added', data);
        const id = UserRepository.generationObjectId();
        const model = new userModel({
            _id: id,
            ...data,
        });
        return model.save();
    }
    public update(data: any): mongoose.UpdateQuery<IUserModel> {
        console.log('UserRepository:: update', data);
        return userModel.updateOne(data);
    }
    public delete(data: any): mongoose.Query<object, IUserModel> {
        console.log('UserRepository:: Delete', data);
        return userModel.deleteOne(data);
    }
}