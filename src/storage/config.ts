const APP = '@ignite-teams';
const GROUP_COLLECTION = `${APP}:groups`;
const PLAYER_COLLECTION =
  (group: string) => `${APP}:players-${group}`;

export const STORAGE_KEYS = {
  GROUP_COLLECTION,
  PLAYER_COLLECTION
};
