import { Request, Response } from 'express';
import matchesService from '../services/matchesService';

export default class MatchesController {
  static getAllMatchesController = async (req: Request, res: Response) => {
    const matche = await matchesService.getAllMAtchesService();
    return res.status(200).json(matche);
  };

  static createMatchesController = async (req: Request, res: Response) => {
    const createMatch = await matchesService.createMatchesService(
      req.body,
      req.body.awayTeam,
      req.body.homeTeam,
    );
    if (req.body.awayTeam === req.body.homeTeam) {
      return res.status(401).json({
        message: 'It is not possible to create a match with two equal teams' });
    }
    return res.status(201).json(createMatch);
  };

  static updateMatchesProgreesController = async (req: Request, res: Response) => {
    await matchesService.updateMatchesProgressService(+req.params.id);
    res.status(200).json({ message: 'Finished' });
  };
}
