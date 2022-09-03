import { UsersState, UsersActionType } from "../../types/usersTypes";
const initState: UsersState = {
  data: [],
  loading: false,
  error: false,

  page: 1,
  total_pages: 2,
};

export const usersReducer = (state = initState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case UsersActionType.FETCH_USERS:
      return {
        ...state,
        characters: action.payload,
        isLoading: true,
      };
      break;
    case UsersActionType.SET_USERS:
      return { ...state, movies: action.payload };
    case UsersActionType.SET_PAGES:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
