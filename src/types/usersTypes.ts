export enum UsersActionType {
  FETCH_USERS = "FETCH_USERS",
  SET_USERS = "SET_USERS",
  SET_PAGES = "SET_PAGES",
  SET_PAGE = "SET_PAGE",
}

export type UserType = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
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
  // type: UsersActionType.FETCH_USERS;
  type: UsersActionType.FETCH_USERS;
};

export type SET_USERS = {
  // type: UsersActionType.SET_USERS;
  // payload: UserType[];
  type: any;
  payload: any;
};
export type SET_PAGES = {
  // type: UsersActionType.SET_PAGES;
  // payload: { page: number };
  type: any;
  payload: any;
};
export type UsersAction = SET_USERS | SET_PAGES | FetchUsersAction | SET_PAGES;
