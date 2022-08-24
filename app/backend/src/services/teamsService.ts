import Iteams from '../interfaces/Iteams';
import teams from '../database/models/teams';

export default class TeamsService implements Iteams<teams> {
  getAllTeamsService = async (): Promise<teams[]> => {
    const team = await teams.findAll();
    return team;
  };
}
