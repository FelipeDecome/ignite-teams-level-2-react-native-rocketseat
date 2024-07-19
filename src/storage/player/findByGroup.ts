import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEYS } from "@storage/config";
import { PlayerStorageDTO } from "@storage/dtos/PlayerStorageDTO";

export async function findPlayersByGroup(group: string): Promise<PlayerStorageDTO[]> {
  try {
    const players = await AsyncStorage.getItem(
      STORAGE_KEYS.PLAYER_COLLECTION(group)
    );

    return players ? JSON.parse(players) : [];
  } catch (error) {
    throw error;
  }
}
