import * as express from 'express';

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
    }

     // Setup the bootstrap

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