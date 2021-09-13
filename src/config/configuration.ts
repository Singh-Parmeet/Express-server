import { config } from 'dotenv';
import IConfig from './IConfig';
config();

const configuration: IConfig = Object.freeze({

    env: process.env.NODE_ENV,
    port: process.env.PORT,
    secret: process.env.TOKEN_SECRET,
});

export default configuration;

