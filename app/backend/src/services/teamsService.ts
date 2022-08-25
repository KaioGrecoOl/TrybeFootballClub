import Iteams from '../interfaces/Iteams';
import teams from '../database/models/teams';

export default class TeamsService {
  static getAllTeamsService = async (): Promise<teams[]> => {
    const team = await teams.findAll();
    return team;
  };

  static getByIdService = async (id: number): Promise<Iteams | null> => {
    const team = await teams.findByPk(id);
    return team;
  };
}
