import express, { Application, NextFunction, Request, Response } from 'express';
import bodyParser from 'body-parser';

type Controllers = Record<string, any>[];

export class App {
  public app: Application;
  public port: number;

  constructor(controllers: Controllers, port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
  }

  public listen(): void {
    this.app.listen(this.port, () => {
      console.log(`App is listening on the port ${this.port}`);
    });
  }

  private initializeMiddlewares(): void {
    this.app.use(bodyParser.json());
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    });
  }

  private initializeControllers(controllers: Controllers): void {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }
}
