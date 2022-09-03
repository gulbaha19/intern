import { Grid } from "@mui/material";
import { UserBlock } from "../components/UserBlock";
const users = [
  {
    id: 1,
    email: "gvv",
    first_name: "fff",
    last_name: "ftccf",
    avatar:
      "https://static.remove.bg/remove-bg-web/45b4adb99db629ba364dd1649ab6e33dfec34929/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
  },
  {
    id: 2,
    email: "gvv",
    first_name: "fff",
    last_name: "ftccf",
    avatar:
      "https://static.remove.bg/remove-bg-web/45b4adb99db629ba364dd1649ab6e33dfec34929/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
  },
  {
    id: 3,
    email: "gvv",
    first_name: "fff",
    last_name: "ftccf",
    avatar:
      "https://static.remove.bg/remove-bg-web/45b4adb99db629ba364dd1649ab6e33dfec34929/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
  },
  {
    id: 4,
    email: "gvv",
    first_name: "fff",
    last_name: "ftccf",
    avatar:
      "https://static.remove.bg/remove-bg-web/45b4adb99db629ba364dd1649ab6e33dfec34929/assets/start_remove-c851bdf8d3127a24e2d137a55b1b427378cd17385b01aec6e59d5d4b5f39d2ec.png",
  },
];
export const UsersPage = () => {
  return (
    <Grid container spacing={2}>
      {users.map((user) => (
        <Grid item xs={12} sm={6} md={3} key={user.id}>
          <UserBlock user={user} />
        </Grid>
      ))}
    </Grid>
  );
};
