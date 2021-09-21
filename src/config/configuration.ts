import { config } from 'dotenv';
import IConfig from './IConfig';
config();

const configuration: IConfig = Object.freeze({

    env: process.env.NODE_ENV,
    port: process.env.PORT,
    secret: process.env.TOKEN_SECRET,
    mongoURL: process.env.MONGO_URL,
    password: process.env.PASSWORD,

});

export default configuration;

