import * as express from 'express';
import loginController from '../controllers/loginController';
import { validateEmailandPassword, tokenValid } from '../middlewares/loginMiddleware';

const loginRoute = express.Router();

loginRoute.get('/login/validate', tokenValid);
loginRoute.post(
  '/login',
  validateEmailandPassword,
  loginController.getLogin,
);
export default loginRoute;
