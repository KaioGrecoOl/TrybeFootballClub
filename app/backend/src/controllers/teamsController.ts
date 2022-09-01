import { Request, Response, NextFunction } from 'express';
import teamsService from '../services/teamsService';

export default class TeamsController {
  static getAllTeamsController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const team = await teamsService.getAllTeamsService();
      return res.status(200).json(team);
    } catch (err) {
      next(err);
    }
  };

  static getByIdController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const team = await teamsService.getByIdService(Number(id));
      return res.status(200).json(team);
    } catch (err) {
      next(err);
    }
  };
}
