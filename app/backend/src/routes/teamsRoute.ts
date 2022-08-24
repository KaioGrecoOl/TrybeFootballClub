import * as express from 'express';
import TeamsController from '../controllers/teamsController';
import TeamsService from '../services/teamsService';

const teamServic = new TeamsService();
const teamController = new TeamsController(teamServic);
const teamsRoute = express.Router();

teamsRoute.get('/teams', teamController.getAllTeamsController);

export default teamsRoute;
