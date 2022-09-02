import { Request, Response, NextFunction } from 'express';
import LeaderBoardHomeService from '../services/leaderBoardHome';

export default class LeaderBoardHomeController {
  private service: LeaderBoardHomeService;

  constructor() {
    this.service = new LeaderBoardHomeService();
  }

  public getLeaderBoardHomeController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const leaderBoard = await this.service.sortedLeaderBoard();
      return res.status(200).json(leaderBoard);
    } catch (err) {
      next();
    }
  };
}
