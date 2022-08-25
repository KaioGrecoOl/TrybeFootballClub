import * as express from 'express';
import loginController from '../controllers/loginController';
import validateEmailandPassword from '../middlewares/loginMiddleware';

const loginRoute = express.Router();

loginRoute.post(
  '/login',
  validateEmailandPassword,
  loginController.getLogin,
);
export default loginRoute;
