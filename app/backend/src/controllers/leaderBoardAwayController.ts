import { Request, Response, NextFunction } from 'express';
import LeaderBoardAwayService from '../services/leaderBoardAway';

export default class LeaderBoardAwayController {
  private service: LeaderBoardAwayService;

  constructor() {
    this.service = new LeaderBoardAwayService();
  }

  public getLeaderBoardAwayController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderBoard = await this.service.sortedLeaderBoard();
      return res.status(200).json(leaderBoard);
    } catch (err) {
      next();
    }
  };
}
