import * as mongoose from 'mongoose';

export default interface IVersionableDocument extends mongoose.Document {
    createdAt: string;
    deletedAt: string;
    originalId: string;
}