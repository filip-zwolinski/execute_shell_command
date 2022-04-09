import { App } from './app';
import { ExecuteController } from './execute/execute.controller';

const app = new App([new ExecuteController()], 8080);
app.listen();

export default app.app;
