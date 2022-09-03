import { FETCH_USERS } from "./types";

export function fetchCharacters(data: any) {
  return {
    type: FETCH_USERS,
    payload: data,
  };
}
