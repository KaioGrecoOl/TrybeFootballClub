import * as express from 'express';
import loginRoute from './routes/loginRoute';
import teamsRoute from './routes/teamsRoute';
import matchesRoute from './routes/matchesRoute';
import leaderBoarderRoute from './routes/leaderBoard';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();
    this.app.use(matchesRoute);
    this.app.use(loginRoute);
    this.app.use(teamsRoute);
    this.app.use(leaderBoarderRoute);
    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
