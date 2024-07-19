import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@errors/AppError";
import { STORAGE_KEYS } from "@storage/config";
import { PlayerStorageDTO } from "@storage/dtos/PlayerStorageDTO";
import { findPlayersByGroup } from "./findByGroup";

interface IAddPlayerToGroup {
  player: PlayerStorageDTO;
  group: string;
}

export async function addPlayerToGroup({
  player,
  group,
}: IAddPlayerToGroup) {
  try {
    const players = await findPlayersByGroup(group);

    const playerAlreadyExists = players.some(
      (item) => item.name === player.name
    );

    if (playerAlreadyExists) {
      throw new AppError("Já existe um jogador com esse nome neste grupo");
    }

    const newPlayers = [...players, player];
    const stringifiedPlayers = JSON.stringify(newPlayers);

    await AsyncStorage.setItem(
      STORAGE_KEYS.PLAYER_COLLECTION(group),
      stringifiedPlayers
    );
  } catch (error) {
    throw error;
  }
}
