import axios from "axios";
import { Dispatch } from "react";
import { UsersActionType, UsersAction } from "../../types/usersTypes";
// import { Dispatch } from "../../store/index";

export const fetchUsers = (page: number) => (dispatch: Dispatch<UsersAction>) => {
  axios.get(`https://reqres.in/api/users?page=${page}`).then((data) => {
    data.status === 200
      ? dispatch({
          type: UsersActionType.SET_USERS,
          payload: data.data.data,
        })
      : dispatch({
          type: "isLoaded",
          payload: false,
        });
    dispatch({
      type: UsersActionType.SET_PAGES,
      payload: data.data.total_pages,
    });
    dispatch({
      type: UsersActionType.SET_PAGE,
      payload: data.data.page,
    });
  });
};
