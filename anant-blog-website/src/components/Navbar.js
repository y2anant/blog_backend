import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Drawer, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';

import { Home, Login, PersonAdd,ExitToApp, AccountCircle } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';



const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const authToken = localStorage.getItem("auth-token");
  const navigate = useNavigate();

  
  const menuItems = [
    { label: 'HomeBlog', icon: <Home />, path: '/' ,authRequired:true},
    { label: 'Login', icon: <Login />, path: '/login', authRequired: !authToken },
    { label: 'Signup', icon: <PersonAdd />, path: '/signup', authRequired: !authToken },
    { label: 'Profile', icon: <AccountCircle />, path: '/profile', authRequired: authToken },
    { label: 'Logout', icon: <ExitToApp />, path: '/logout', authRequired: authToken }
  ];

  const handleCloseDrawer = (path) => {
    setDrawerOpen(false);
    navigate(path);
  };

  return (
    <>
      <AppBar position="static" sx={{background:"#fff",color:"black"}}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" onClick={() => navigate('/')}>
            HomeBlog
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <List>
        {menuItems.map((item) => (
            (item.authRequired ) && (
              <ListItemButton key={item.label} onClick={() => handleCloseDrawer(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            )
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Navbar;


