import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { Auth } from "../context/Auth";
import { Divider, ListItemIcon } from "@mui/material";
import { Logout } from "@mui/icons-material";
export const Navbar = () => {
  const navigate = useNavigate();
  const { token } = useContext(Auth);
  const [searchText, setSearchText] = useState<string>("");
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [anchorElAvatar, setAnchorElAvatar] = React.useState<null | HTMLElement>(null);
  const openCategoryMenu = Boolean(anchorEl);
  const openAvatar = Boolean(anchorElAvatar);
  const handleClickAvatar = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElAvatar(event.currentTarget);
  };
  const handleCloseAvatar = () => {
    setAnchorElAvatar(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Button
              onClick={() => navigate("/users")}
              sx={{ my: 2, color: "white", display: "block" }}>
              Users
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {token ? (
              <>
                <Tooltip title="Account">
                  <IconButton
                    onClick={handleClickAvatar}
                    size="small"
                    sx={{ ml: 2 }}
                    aria-controls={openAvatar ? "account-menu" : undefined}
                    aria-haspopup="true"
                    aria-expanded={openAvatar ? "true" : undefined}>
                    {/* {user?.photoURL ? (
                      <Avatar alt="user" sx={{ width: 32, height: 32 }} src={user.photoURL} />
                    ) : (
                      <div>{user.email}</div>
                    )} */}
                  </IconButton>
                </Tooltip>
                <Menu
                  anchorEl={anchorElAvatar}
                  id="account-menu"
                  open={openAvatar}
                  onClose={handleCloseAvatar}
                  onClick={handleCloseAvatar}
                  PaperProps={{
                    elevation: 0,
                    sx: {
                      overflow: "visible",
                      filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                      mt: 1.5,
                      "& .MuiAvatar-root": {
                        width: 32,
                        height: 32,
                        ml: -0.5,
                        mr: 1,
                      },
                      "&:before": {
                        content: '""',
                        display: "block",
                        position: "absolute",
                        top: 0,
                        right: 14,
                        width: 10,
                        height: 10,
                        bgcolor: "background.paper",
                        transform: "translateY(-50%) rotate(45deg)",
                        zIndex: 0,
                      },
                    },
                  }}
                  transformOrigin={{ horizontal: "right", vertical: "top" }}
                  anchorOrigin={{ horizontal: "right", vertical: "bottom" }}>
                  <MenuItem onClick={() => navigate("/profile", {})}>
                    <Avatar /> Profile
                  </MenuItem>
                  <Divider />
                  <MenuItem>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </>
            ) : (
              <Button
                onClick={() => navigate("/")}
                sx={{ my: 2, color: "white", display: "block" }}>
                Log In
              </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
