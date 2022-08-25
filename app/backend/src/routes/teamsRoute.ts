import * as express from 'express';
import teamsController from '../controllers/teamsController';

const teamsRoute = express.Router();

teamsRoute.get('/teams', teamsController.getAllTeamsController);
teamsRoute.get('/teams/:id', teamsController.getByIdController);

export default teamsRoute;
