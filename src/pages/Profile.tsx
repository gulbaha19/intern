import styled from "@emotion/styled";
import { useSelector } from "react-redux";
import { UserType } from "../types/usersTypes";

const ImageRound = styled("img")`
  width: 250px;
  height: 250px;
  border-radius: 180px;
  object-fit: contain;
  border: 1px solid black;
`;

export const Profile = () => {
  const email = localStorage.getItem("email");
  const avatar = localStorage.getItem("avatar");
  const firstName = localStorage.getItem("firstName");
  const lastName = localStorage.getItem("lastName");

  // const usersFromStore = useSelector((state: any) => state.user.data);
  // const user = usersFromStore.find((userO: UserType) => userO.email === email);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        position: "relative",

        padding: "50px 100px",
      }}>
      <ImageRound
        src={
          avatar
            ? avatar
            : " https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg"
        }
        alt="image"
      />
      <div style={{ marginLeft: "40px" }}>
        <p style={{ fontSize: "24px" }}>
          {lastName}
          {firstName}
        </p>
        <p>{email}</p>
      </div>
    </div>
  );
};
