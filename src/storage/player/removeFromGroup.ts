import { AppError } from "@errors/AppError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "@storage/config";

import { findPlayersByGroup } from "./findByGroup";

interface IRemovePlayerFromGroup {
  group: string;
  playerName: string;
}

export async function removePlayerFromGroup({
  group,
  playerName,
}: IRemovePlayerFromGroup) {
  try {
    const playersInGroup = await findPlayersByGroup(group);

    const playerInGroup = playersInGroup.find(
      (playerInGroup) => playerInGroup.name === playerName
    );

    if (!playerInGroup) {
      throw new AppError("Não é possível remover um jogador que não está no grupo");
    }

    const newPlayersInGroup = playersInGroup.filter(
      (playerInGroup) => playerInGroup.name !== playerName
    );
    const stringifiedPlayersInGroup = JSON.stringify(newPlayersInGroup);

    await AsyncStorage.setItem(
      STORAGE_KEYS.PLAYER_COLLECTION(group),
      stringifiedPlayersInGroup
    );
  } catch (error) {
    throw error;
  }
}
