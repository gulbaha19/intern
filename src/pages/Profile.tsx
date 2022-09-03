import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { UserType } from "../types/usersTypes";

const ImageRound = styled("img")`
  width: 150px;
  height: 150px;
  border-radius: 180px;
  object-fit: contain;
`;

export const Profile = () => {
  const email = localStorage.getItem("email");
  const usersFromStore = useSelector((state: any) => state.user.data);
  const user = usersFromStore.find((userO: UserType) => userO.email === email);


  return (
    <div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
      <ImageRound src={user.avatar} alt="image" />
      <div>
        <p>
          {user.last_name}
          {user.first_name}
        </p>
        <p>{user.email}</p>
      </div>
    </div>
  );
};
