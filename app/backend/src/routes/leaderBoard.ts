import * as express from 'express';

const leaderBoarderRoute = express.Router();

leaderBoarderRoute.get('/leaderboard/home');

export default leaderBoarderRoute;
