import * as express from 'express';
import teamsController from '../controllers/teamsController';

const teamsRoute = express.Router();

teamsRoute.get('/teams', teamsController.getAllTeamsController);

export default teamsRoute;
