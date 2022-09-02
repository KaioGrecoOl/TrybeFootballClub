import matches from '../database/models/matches';
import teams from '../database/models/teams';

export default class LeaderBoardAwayService {
  private _teams: typeof teams;
  private _matches: typeof matches;

  constructor() {
    this._teams = teams;
    this._matches = matches;
  }

  public getAllTimes = () => teams.findAll();

  public getFinishMatches = async (): Promise<matches[]> => matches
    .findAll({ where: { inProgress: false } });

  public scoreGoals = async (id: number) => {
    let goalsFavor = 0;
    let goalsOw = 0;
    let goalsBalance = 0;

    (await this.getFinishMatches()).forEach((game) => {
      if (game.awayTeam === id) {
        goalsFavor += game.awayTeamGoals;
        goalsOw += game.homeTeamGoals;
        goalsBalance = goalsFavor - goalsOw;
      }
    });
    return { goalsFavor, goalsOw, goalsBalance };
  };

  public getStatistics = async (id: number) => {
    let totalGames = 0; let totalVictories = 0; let totalDraws = 0;
    let totalLosses = 0; let efficiency = 0; let totalPoints = 0;

    (await this.getFinishMatches()).forEach((game) => {
      if (game.awayTeam === id) {
        totalGames += 1;
        if (game.awayTeamGoals > game.homeTeamGoals) {
          totalVictories += 1; totalPoints += 3;
        }
        if (game.awayTeamGoals < game.homeTeamGoals) {
          totalLosses += 1; totalPoints += 0;
        }
        if (game.homeTeamGoals === game.awayTeamGoals) {
          totalDraws += 1; totalPoints += 1;
        }
      }
      efficiency = +((totalPoints / (totalGames * 3)) * 100).toFixed(2);
    });
    return { totalVictories, totalLosses, totalDraws, efficiency, totalGames, totalPoints };
  };

  public leaderBoard = async () => {
    const teamsList = await this.getAllTimes();
    const leaderBoard = teamsList.map(async (teamss) => {
      const points = await this.getStatistics(teamss.id);
      const goals = await this.scoreGoals(teamss.id);
      return {
        name: teamss.teamName,
        totalPoints: points.totalPoints,
        totalGames: points.totalGames,
        totalVictories: points.totalVictories,
        totalDraws: points.totalDraws,
        totalLosses: points.totalLosses,
        goalsFavor: goals.goalsFavor,
        goalsOwn: goals.goalsOw,
        goalsBalance: goals.goalsBalance,
        efficiency: points.efficiency,
      };
    });
    return Promise.all(leaderBoard);
  };

  public sortedLeaderBoard = async () => {
    const leaderBoard = await this.leaderBoard();
    const sorted = leaderBoard.sort((a, b) =>
      b.totalPoints - a.totalPoints
      || b.goalsBalance - a.goalsBalance
    || b.totalVictories - a.totalVictories
    || b.goalsFavor - a.goalsFavor
    || a.goalsOwn - b.goalsOwn);
    return sorted;
  };
}
