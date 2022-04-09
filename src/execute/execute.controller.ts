import { Request, Response, Router } from 'express';
import { makeValidateBody } from 'express-class-validator';

import { ExecuteService } from './execute.service';
import { ExecuteCommandDto } from './dto/execute-command.dto';

export class ExecuteController {
  public path = '/execute';
  public router: Router;
  private service = new ExecuteService();

  constructor() {
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post(this.path, makeValidateBody(ExecuteCommandDto), this.executeShellCommand.bind(this));
  }

  private async executeShellCommand(req: Request, res: Response): Promise<void> {
    const command = req.body.command;
    const output = await this.service.executeShellCommand(command);
    res.send({ output });
  }
}
