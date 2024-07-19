import { AppError } from "@errors/AppError";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "@storage/config";
import { findAllGroups } from "./findAll";

export async function removeGroupByName(group: string) {
  try {
    const groups = await findAllGroups();

    const groupInGroups = groups.find((g) => g === group);

    if (!groupInGroups) {
      throw new AppError("Não é possível remover um grupo que não existe");
    }

    await AsyncStorage.removeItem(STORAGE_KEYS.PLAYER_COLLECTION(group));

    await AsyncStorage.setItem(
      STORAGE_KEYS.GROUP_COLLECTION,
      JSON.stringify(groups.filter((g) => g !== group))
    );
  } catch (error) {
    throw error;
  }
}
