import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "@storage/config";

export async function findAllGroups(): Promise<string[]> {
  try {
    const groups = await AsyncStorage.getItem(
      STORAGE_KEYS.GROUP_COLLECTION
    );

    return groups ? JSON.parse(groups) : [];
  } catch (error) {
    throw error;
  }
}
