import { FC } from "react";
import { useState } from "react";

import { Modal, styled, Typography } from "@mui/material";

interface UserProps {
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
  };
}
const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
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
const ImageRound = styled("img")`
  width: 150px;
  height: 150px;
  border-radius: 180px;
  object-fit: contain;
`;

const Title = styled("h3")`
  font-size: 16px;
  font-weight: normal;
  color: #19191d;
  margin-top: 12px;
`;
const Email = styled("h3")`
  font-size: 24px;
  color: #19191d;
  margin-top: 12px;
`;
export const UserBlock: FC<UserProps> = ({ user }) => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Box>
        <div onClick={() => setOpen(true)}>
          <Image src={user.avatar} alt="image" />
          <Title>
            {user.last_name}
            {user.first_name}
          </Title>
          <Email>{user.email}</Email>
        </div>
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div style={{ display: "flex", flexDirection: "row", position: "relative" }}>
            <span
              onClick={() => setOpen(false)}
              style={{ position: "absolute", marginLeft: "90%", cursor: "pointer" }}>
              X
            </span>
            <ImageRound src={user.avatar} alt="image" />
            <div>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {user.last_name}
                {user.first_name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {user.email}
              </Typography>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
};
