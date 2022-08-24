import { Request, Response } from 'express';
import teams from '../database/models/teams';
import Iteams from '../interfaces/Iteams';

export default class TeamsController {
  constructor(private teamsService: Iteams<teams>) {

  }

  getAllTeamsController = async (req: Request, res: Response) => {
    const team = await this.teamsService.getAllTeamsService();
    return res.status(200).json(team);
  };
}
