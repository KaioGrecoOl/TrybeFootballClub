import * as express from 'express';
import LeaderBoardHomeController from '../controllers/leaderBoardHomeController';
import LeaderBoardAwayController from '../controllers/leaderBoardAwayController';

const leaderBoarderRoute = express.Router();

const leaderBoaordHome = new LeaderBoardHomeController();
const leaderBoardAway = new LeaderBoardAwayController();

leaderBoarderRoute.get('/leaderboard/home', leaderBoaordHome.getLeaderBoardHomeController);
leaderBoarderRoute.get('/leaderboard/away', leaderBoardAway.getLeaderBoardAwayController);
export default leaderBoarderRoute;
