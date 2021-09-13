import * as mongoose from 'mongoose';

export default class Database {
    public static open(mongoURL) {
        return new Promise(( resolve, reject) => {
            mongoose.connect(mongoURL, (error) => {
                if (error) {
                    console.log(' Cannot connect mongodb server');
                    return reject(error);
                }
                console.log('Mongodb server is connected successfully');
                return resolve('Successfully Connected');
             });
        });
    }
    public static close(mongoURL) {
        mongoose.disconnect();
    }
}