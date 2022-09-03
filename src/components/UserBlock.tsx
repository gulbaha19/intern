import { FC } from "react";
import { useState } from "react";

import { Button, styled, Drawer } from "@mui/material";
interface UserProps {
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}
const Box = styled("div")`
  padding: 16px 16px 12px 16px;
  box-sizing: border-box;
  border-radius: 8px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 10px 15px 0 rgba(0, 0, 0, 0.1);
  }
`;
const Image = styled("img")`
  width: 240px;
  height: 260px;
  object-fit: contain;
`;
const Title = styled("h3")`
  font-size: 16px;
  font-weight: normal;
  color: #19191d;
  margin-top: 12px;
`;
const Price = styled("h3")`
  font-size: 24px;
  color: #19191d;
  margin-top: 12px;
`;
export const UserBlock: FC<UserProps> = ({ user }) => {
  return (
    <Box>
      <div>
        <Image src={user.avatar} alt="" />
        <Title>
          {user.last_name}
          {user.first_name}
        </Title>
        <Price>{user.email}</Price>
      </div>
    </Box>
  );
};
