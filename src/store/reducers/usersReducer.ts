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
        data: action.payload,

        loading: false,
      };
      break;
    case UsersActionType.SET_USERS:
      return { ...state, data: action.payload };
    case UsersActionType.SET_PAGES:
      return { ...state, total_pages: action.payload };

    case UsersActionType.SET_PAGE:
      return { ...state, total_page: action.payload };
    case "isLoaded":
      state.loading = false;
      break;
    default:
      return state;
  }
};
