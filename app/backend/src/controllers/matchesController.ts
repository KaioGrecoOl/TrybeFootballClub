import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

export default class MatchesController {
  static getAllMatchesController = async (req: Request, res: Response) => {
    const matche = await matchesService.getAllMAtchesService();
    return res.status(200).json(matche);
  };
}
