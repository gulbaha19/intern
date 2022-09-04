import { Grid, Pagination } from "@mui/material";
import { useEffect, useCallback } from "react";
import { useSelector } from "react-redux";
import { UserBlock } from "../components/UserBlock";
import { fetchUsers } from "../store/actions/fetchUsers";

import { UserType } from "../types/usersTypes";
import { useTypedDispatch } from "../hooks/useTypedDispatch";

export const UsersPage = () => {
  const dispatch = useTypedDispatch();

  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);
  const changePage = useCallback(
    (page: number) => {
      dispatch(fetchUsers(page));
    },
    [dispatch],
  );
  const email = localStorage.getItem("email");

  const usersFromStore = useSelector((state: any) => state.user.data);
  const pagesFromStore = useSelector((state: any) => state.user.total_pages);
  const pageFromStore = useSelector((state: any) => state.user.page);

  const users = usersFromStore;
  function setProfile() {
    setTimeout(function () {
      const user = usersFromStore.find((userO: UserType) => userO.email === email);
      localStorage.setItem("avatar", user.avatar);
      localStorage.setItem("lastName", user.last_name);
      localStorage.setItem("firstName", user.first_name);
    }, 500);
  }
  setProfile();

  return (
    <div style={{ padding: "50px, 50px" }}>
      <Grid container spacing={2} style={{ width: "90%", marginLeft: "5%" }}>
        {users.map((user: UserType) => (
          <Grid item xs={12} sm={6} md={3} key={user.id}>
            <UserBlock user={user} />
          </Grid>
        ))}
      </Grid>
      <div style={{ margin: "20px  0", justifyContent: "center", display: "flex" }}>
        <Pagination
          count={pagesFromStore}
          page={pageFromStore}
          onChange={(e, value) => changePage(value)}
        />
      </div>
    </div>
  );
};
