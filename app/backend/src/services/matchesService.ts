import matches from '../database/models/matches';
import teams from '../database/models/teams';

export default class MatchesService {
  static getAllMAtchesService = async (): Promise<matches[]> => {
    const matche = await matches.findAll({
      include: [
        {
          model: teams,
          as: 'teamHome',
          attributes: ['teamName'],
        },
        {
          model: teams,
          as: 'teamAway',
          attributes: ['teamName'],
        },
      ],
    });
    return matche;
  };
}
