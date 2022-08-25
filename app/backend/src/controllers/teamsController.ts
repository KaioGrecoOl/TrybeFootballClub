import { Request, Response } from 'express';
import teamsService from '../services/teamsService';

export default class TeamsController {
  static getAllTeamsController = async (req: Request, res: Response) => {
    const team = await teamsService.getAllTeamsService();
    return res.status(200).json(team);
  };

  static getByIdController = async (req: Request, res: Response) => {
    const { id } = req.params;
    const team = await teamsService.getByIdService(Number(id));
    return res.status(200).json(team);
  };
}
