import { Router } from 'express';
import swaggerJSDoc = require('swagger-jsdoc');
import * as swaggerUi from 'swagger-ui-express';

export interface ISwaggerDefinition {
    swaggerDefinition: {
        basePath: string;
        info: {
            description: string;
            title: string;
            version: string;
        },
    };
}

export default class Swagger {
    public getRouter({swaggerDefinition}: ISwaggerDefinition) {
        const router = Router();
        router.route('/')
        .get((req, res, ) => {
            // options for swagger docs
            const options = {
                // path to the api docs
                apis: [`dist/**/*.js`],
                // import swagger definition
                swaggerDefinition,
            };

                // initialize swagger jsdocs
            const swaggerSpec = swaggerJSDoc(options);
            res.send(swaggerSpec);
        });
        return router;
    }
    public getUI(swaggerUrl: string ) {
        const options = {
            swaggerUrl : `${swaggerUrl}.json`,
        };
        return {
            serve: swaggerUi.serve,
            setup: swaggerUi.setup(undefined, options),
        };
    }

}