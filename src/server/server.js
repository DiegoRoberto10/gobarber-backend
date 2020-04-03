import 'dotenv/config';
import express from 'express';
import routes from '../routes/routes';

class Server {
  constructor() {
    this.server = express();

    this.middleware();
    this.routes();
  }

  middleware() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new Server().server;
