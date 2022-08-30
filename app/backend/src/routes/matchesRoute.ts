import * as express from 'express';
import matchesController from '../controllers/matchesController';

const matchesRoute = express.Router();

matchesRoute.get('/matches', matchesController.getAllMatchesController);
matchesRoute.post('/matches', matchesController.createMatchesController);
matchesRoute.patch('/matches/:id/finish', matchesController.updateMatchesProgreesController);

export default matchesRoute;
