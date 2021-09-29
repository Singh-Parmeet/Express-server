import { config } from 'dotenv';
import IConfig from './IConfig';
import { version } from '../../package.json';
config();
// // tslint:disable-next-line: no-var-requires
// const version = require('../../package.json').version;
export const SWAGGER_URL = '/api-docs';

export const ABOUT = {
    description: 'Swagger',
    title: 'JavaScript Project'
};

const configuration: IConfig = Object.freeze({

    env: process.env.NODE_ENV,
    port: process.env.PORT,
    secret: process.env.TOKEN_SECRET,
    mongoURL: process.env.MONGO_URL,
    password: process.env.PASSWORD,
    swaggerDefinition: {
        openapi : '3.0.0',
        servers: [{url: 'http://localhost:9000/api/'}],
        info: {
            ...ABOUT,
            version,
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        }
    },
    security: [{
        bearerAuth: []
    }],
    swaggerUrl : SWAGGER_URL,

});

export default configuration;

