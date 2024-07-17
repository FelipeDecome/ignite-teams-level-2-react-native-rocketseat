import AsyncStorage from "@react-native-async-storage/async-storage";

import { STORAGE_KEYS } from "@storage/config";

import { findAllGroups } from "./findAll";

export async function createGroup(group: string) {
  try {
    const groups = await findAllGroups();

    groups.push(group);

    await AsyncStorage.setItem(
      STORAGE_KEYS.GROUP_COLLECTION,
      JSON.stringify(groups)
    );
  } catch (error) {
    throw error;
  }
}
