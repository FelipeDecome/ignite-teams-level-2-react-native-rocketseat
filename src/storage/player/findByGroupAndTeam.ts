import { findPlayersByGroup } from "./findByGroup";

interface IFindPlayersByGroupAndTeam {
  group: string;
  team: string;
}

export async function findPlayersByGroupAndTeam({
  group,
  team,
}: IFindPlayersByGroupAndTeam) {
  try {
    const groupPlayers = await findPlayersByGroup(group);
    const teamPlayers = groupPlayers.filter(player => player.team === team);

    return teamPlayers;
  } catch (error) {
    throw error;
  }
}
