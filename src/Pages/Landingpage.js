// LandingPage.js
import React from 'react';
import { Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  };

  const primaryButtonStyle = {
    marginRight: '10px',
    backgroundColor: 'black', // Green color (you can choose your preferred color)
    color: 'white',
    fontSize: '16px',
    padding: '10px 20px',
    borderRadius: '5px',
  };

  const outlinedButtonStyle = {
    color: 'black', // Green color (you can choose your preferred color)
    fontSize: '16px',
    padding: '10px 20px',
    borderRadius: '5px',
    border: '2px solid black', // Green color
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <Typography variant="h2" gutterBottom>
        Welcome to the Medical Appointment Management System
      </Typography>
      <Typography variant="h5" color="text.secondary" paragraph>
        Your trusted platform for easy and efficient medical appointments.
      </Typography>
      <div style={buttonContainerStyle}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/appointments"
          style={primaryButtonStyle}
        >
          View Appointments
        </Button>
        <Button
          variant="outlined"
          color="primary"
          component={Link}
          to="/doctors"
          style={outlinedButtonStyle}
        >
          Find Doctors
        </Button>
      </div>
    </div>
  );
};

export default LandingPage;
