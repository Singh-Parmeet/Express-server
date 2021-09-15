import * as mongoose from 'mongoose';

export default interface IVersionableDocument extends mongoose.Document {
    createAt: string;
    deletedAt: string;
    originalId: string;
}