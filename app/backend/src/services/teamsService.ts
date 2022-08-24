// import { Iteams } from '../interfaces/Iteams';
import teams from '../database/models/teams';

export default class TeamsService {
  static getAllTeamsService = async () => {
    const team = await teams.findAll();
    return team;
  };
}
