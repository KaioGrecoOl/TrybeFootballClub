import * as express from 'express';
import matchesController from '../controllers/matchesController';

const matchesRoute = express.Router();

matchesRoute.get('/matches', matchesController.getAllMatchesController);

export default matchesRoute;
