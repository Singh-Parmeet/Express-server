import * as mongoose from 'mongoose';
// import { Hash } from 'crypto';
import VersionableSchema from '../versionable/VersionableSchema';

class UserSchema extends VersionableSchema {
    constructor(collections: any) {
      const baseSchema = {
        _id: String,
        name: String,
        email: String,
        role: String,
        password: String,
    };
    super(baseSchema, collections);
  }
}
export default UserSchema;