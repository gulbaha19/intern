import { CircularProgress, Grid, Pagination } from "@mui/material";
import { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UserBlock } from "../components/UserBlock";
import { fetchUsers } from "../store/actions/fetchUsers";
import { Dispatch } from "../store";
import { UserType } from "../types/usersTypes";

export const UsersPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(1));
  }, [dispatch]);
  const changePage = useCallback(
    (page: number) => {
      dispatch(fetchUsers(page));
    },
    [dispatch],
  );

  const usersFromStore = useSelector((state: any) => state.user.data);
  const pagesFromStore = useSelector((state: any) => state.user.total_pages);
  const pageFromStore = useSelector((state: any) => state.user.page);

  console.log(usersFromStore, "gggg");
  const loadingStatus = false;
  const users = usersFromStore;

  console.log(users);
  return (
    <>
      {loadingStatus ? (
        <CircularProgress />
      ) : (
        <>
          {" "}
          <Grid container spacing={2}>
            {users.map((user: UserType) => (
              <Grid item xs={12} sm={6} md={3} key={user.id}>
                <UserBlock user={user} />
              </Grid>
            ))}
          </Grid>
          <Pagination
            count={pagesFromStore}
            page={pageFromStore}
            onChange={(e, value) => changePage(value)}
          />
        </>
      )}
    </>
  );
};
