import { Imatchs } from '../interfaces/Imatches';
import matches from '../database/models/matches';
import teams from '../database/models/teams';
import { ImatchProgress } from '../interfaces/ImatchProgress';

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

  static createMatchesService = async (
    data: Imatchs,
    teamH: number | undefined,
    teamW: number | undefined,
  ) => {
    const homeTeam = await matches.findByPk(teamH);
    const awayTeam = await matches.findByPk(teamW);
    if (!homeTeam || !awayTeam) {
      throw Object.assign(new Error('There is no team with such id!'), { status: 404 });
    }
    return matches.create({
      homeTeam: data.homeTeam,
      awayTeam: data.awayTeam,
      homeTeamGoals: data.homeTeamGoals,
      awayTeamGoals: data.awayTeamGoals,
      inProgress: true,
    });
  };

  static updateMatchesProgressService = async (id: number) => {
    await matches.findByPk(id);
    await matches.update({ inProgress: false }, { where: { id } });
  };

  static updateMatchesInProgress = async (data: ImatchProgress, id: number) => {
    await matches.findByPk(id);
    await matches.update(
      {
        homeTeamGoals: data.homeTeamGoals,
        awayTeamGoals: data.awayTeamGoals },
      { where: { id } },
    );
  };
}
