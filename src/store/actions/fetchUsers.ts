import { Dispatch } from "react";
import { UsersActionType, UsersAction } from "../../types/usersTypes";
export type Arguments = {
  page: number;
};
export const fetchUsers =
  ({ page = 1 }: Arguments) =>
  (dispatch: Dispatch<UsersAction>) => {
    dispatch({ type: UsersActionType.FETCH_USERS });

    fetch(`https://reqres.in/api/users?page=2`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: UsersActionType.SET_USERS, payload: data.results });
        console.log(data, "fe");

        dispatch({
          type: UsersActionType.SET_PAGES,
          payload: {
            page: data.page,
          },
        });
      });
  };
