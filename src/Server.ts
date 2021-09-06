import * as express from 'express';
import * as bodyparser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs/routes';


// Exporting the Server
export default class Server {
    app: express.Express;

    constructor(private config) {
        this.app = express();
    }

        // Setup the Routes

     setupRoutes() {
         this.app.get('/health-check', (req, res) => {
            res.send('I am OK');
        });

         this.app.post('/data', (req, res, next) => {
             console.log('post request', req.body);
             res.send('I am Ok');
            });
         this.app.use(notFoundRoute);
         this.app.use(errorHandler);

    }

     initBodyParser() {
         this.app.use(bodyparser.urlencoded({extended: false}));
         this.app.use(bodyparser.json());
        }
     // Setup the bootstrap

     bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

     run() {
        const { port, env } = this.config;
        this.app.listen(port, () => {
            console.log(`App started successfully on ${port} in ${env} environment`);


        });
        return this;
    }


}