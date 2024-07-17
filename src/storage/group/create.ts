import AsyncStorage from "@react-native-async-storage/async-storage";

import { AppError } from "@errors/AppError";
import { STORAGE_KEYS } from "@storage/config";

import { findAllGroups } from "./findAll";

export async function createGroup(group: string) {
  try {
    const parsedGroup = group.trim();
    const storedGroups = await findAllGroups();

    const groupAlreadyExists = storedGroups.includes(parsedGroup);

    if (groupAlreadyExists) {
      throw new AppError("Já existe um grupo criado com esse nome.");
    }

    const groups = [...storedGroups, parsedGroup];
    const stringifiedGroups = JSON.stringify(groups);
    await AsyncStorage.setItem(
      STORAGE_KEYS.GROUP_COLLECTION,
      stringifiedGroups
    );
  } catch (error) {
    throw error;
  }
}
