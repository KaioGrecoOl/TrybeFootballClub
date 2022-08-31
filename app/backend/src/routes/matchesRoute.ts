import * as express from 'express';
import matchesController from '../controllers/matchesController';
import authorizations from '../middlewares/authorizationMiddleware';

const matchesRoute = express.Router();

matchesRoute.get('/matches', matchesController.getAllMatchesController);
matchesRoute.post('/matches', authorizations, matchesController.createMatchesController);
matchesRoute.patch(
  '/matches/:id/finish',
  matchesController.updateMatchesProgreesController,
);
matchesRoute.patch('/matches/:id', matchesController.updateMatchesInProgrees);

export default matchesRoute;
