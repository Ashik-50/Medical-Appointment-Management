// Navbar.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => {
 return (
    <AppBar position="static" sx={{ backgroundColor: '#D5D1D0', height: '70px' }}>
      <Toolbar>
        <Avatar style={{ marginRight: '10px' }}>
          <img src="https://www.drupal.org/files/project-images/medical.png" alt="Logo" style={{ width: '100%', height: '100%' }} />
        </Avatar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', color: 'black' }}>
          MEDICAL APPOINTMENT MANAGEMENT SYSTEM
        </Typography>
        <Button color="inherit" component={Link} to="/Landing" style={{ color: 'black' }}>
          Home
        </Button>
        <Button color="inherit" component={Link} to="/about" style={{ color: 'black' }}>
          About
        </Button>
        <Button color="inherit" component={Link} to='/' style={{ color: 'black' }}>
          Logout
        </Button>
      </Toolbar>
    </AppBar>
 );
};

export default Navbar;