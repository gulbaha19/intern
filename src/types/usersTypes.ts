export enum UsersActionType {
  FETCH_USERS = "FETCH_USERS",
  SET_USERS = "SET_USERS",
  SET_PAGES = "SET_PAGES",
}

export type UserType = {
  data: { id: number; email: string; first_name: string; last_name: string; avatar: string };
  support: { url: string; text: string };
};
export type UsersType = {
  users: UserType[];
};
export type UsersState = {
  data: UserType[];
  loading: boolean;
  error?: boolean;

  page: number;
  total_pages: number;
};
export type FetchUsersAction = {
  type: UsersActionType.FETCH_USERS;
};

export type SET_USERS = {
  type: UsersActionType.SET_USERS;
  payload: UserType[];
};
export type SET_PAGES = {
  type: UsersActionType.SET_PAGES;
  payload: { page: number };
};
export type UsersAction = SET_USERS | SET_PAGES | FetchUsersAction;
