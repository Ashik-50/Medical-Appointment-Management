// SecondaryNavbar.js
import React from 'react';
import { AppBar, Toolbar, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const SecondaryNavbar = () => {
  return ( 
    <AppBar position="static" sx={{ backgroundColor: 'black', height: '50px' }}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
        <Button color="inherit" component={Link} to="/appointments">
          Appointments
        </Button>
        <Button color="inherit" component={Link} to="/doctors">
          Book Appointment
        </Button>
        <Button color="inherit" component={Link} to="/results">
          Results
        </Button>
      </Toolbar>
    </AppBar>
  );
};
export default SecondaryNavbar;
