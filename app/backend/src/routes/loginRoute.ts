import * as express from 'express';
import loginController from '../controllers/loginController';
import { validateEmail,
  validatePassword,
} from '../middlewares/loginMiddleware';

const loginRoute = express.Router();

loginRoute.post(
  '/login',
  validateEmail,
  validatePassword,
  loginController.getLogin,
);
export default loginRoute;
