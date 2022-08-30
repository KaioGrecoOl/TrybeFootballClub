import * as express from 'express';
import matchesController from '../controllers/matchesController';

const matchesRoute = express.Router();

matchesRoute.get('/matches', matchesController.getAllMatchesController);
matchesRoute.post('/matches', matchesController.createMatchesController);

export default matchesRoute;
