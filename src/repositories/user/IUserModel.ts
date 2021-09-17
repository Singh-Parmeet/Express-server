import * as mongoose from 'mongoose';
// import * as bcrypt from 'bcrypt';
 import { Hash } from 'crypto';
import IVersionableDocument from '../versionable/IVersionableDocument';

export default interface IUserModel extends IVersionableDocument {
    id: string;
    name: string;
    email: string;
    role: string;
    password: Hash;
}