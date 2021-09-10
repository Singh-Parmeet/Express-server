import * as express from 'express';
import * as bodyparser from 'body-parser';
import { errorHandler, notFoundRoute } from './libs/routes';
import routes from './router';
import Database from './libs/Database';

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
        this.app.use('/api', routes);
        this.app.use(notFoundRoute);
        this.app.use(errorHandler);

    }
    initBodyParser() {
        this.app.use(bodyparser.urlencoded({ extended: false }));
        this.app.use(bodyparser.json());
    }
    // Setup the bootstrap

    bootstrap() {
        this.initBodyParser();
        this.setupRoutes();
        return this;
    }

    public async run() {
        const { port, env , mongoURL } = this.config;
        try {
            await Database.open(mongoURL);
            this.app.listen(port, () => {
                console.log(`App started successfully on ${port} in ${env} environment`);
            });
        } catch (error) {
            console.log('inside try', error);
        }
        return this;
    }
}