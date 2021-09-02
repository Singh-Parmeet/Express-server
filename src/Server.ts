import * as express from 'express';

export default class Server {
    app: express.Express;

    constructor(private config) {
        this.app = express();
    }
    setupRoutes() {
        this.app.get('/health-check', (req, res) => {
            res.send('I am OK');
        });
    }


    bootstrap() {
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
const server = new Server(123);