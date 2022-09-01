import { Request, Response, NextFunction } from 'express';
import matchesService from '../services/matchesService';

export default class MatchesController {
  static getAllMatchesController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const matche = await matchesService.getAllMAtchesService();
      return res.status(200).json(matche);
    } catch (err) {
      next(err);
    }
  };

  static createMatchesController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const createMatch = await matchesService.createMatchesService(
        req.body,
        req.body.awayTeam,
        req.body.homeTeam,
      );
      if (req.body.awayTeam === req.body.homeTeam) {
        return res.status(401).json({
          message: 'It is not possible to create a match with two equal teams' });
      }
      if (createMatch === 'There is no such id') {
        return res.status(404).json({ message: 'There is no team with such id!' });
      }
      return res.status(201).json(createMatch);
    } catch (err) {
      next(err);
    }
  };

  static updateMatchesProgreesController = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      await matchesService.updateMatchesProgressService(+req.params.id);
      res.status(200).json({ message: 'Finished' });
    } catch (err) {
      next(err);
    }
  };

  static updateMatchesInProgrees = async (req: Request, res: Response, next: NextFunction) => {
    try {
      await matchesService.updateMatchesInProgress(req.body, +req.params.id);
      res.status(200).json({ message: 'Updated' });
    } catch (err) {
      next(err);
    }
  };
}
