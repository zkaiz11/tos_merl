import {
  AppBar,
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { MenuOutlined } from "@mui/icons-material";
import DataContext from "../contexts/DataContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, navigate } = useContext(DataContext);
  const [anchorElUser, setAnchorElUser] = useState(null);

  useEffect(()=>{

  },[isLoggedIn])

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = (e) => {
    setIsLoggedIn(false);
    navigate('/account/login', {replace:true});
  }

  const handleClickToProfile = (e) => {
    navigate('/account/profile', {replace:true})
  }

  return (
    <Box>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuOutlined sx={{ display: { xs: "block", sm: "none" } }} />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tos Merl
          </Typography>
          {isLoggedIn && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenUserMenu}
                color="inherit"
              >
                <Avatar alt="profile" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"/>
              </IconButton>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem key='profile' onClick={handleClickToProfile}>
                    <Typography textAlign="center">Profile</Typography>
                </MenuItem>
                <MenuItem key='account' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">Account</Typography>
                </MenuItem>
                <MenuItem key='log-out' onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={handleLogout}>Log Out</Typography>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
