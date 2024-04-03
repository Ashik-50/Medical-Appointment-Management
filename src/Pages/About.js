//About.js
import React from 'react';
import { Typography, Paper } from '@mui/material';
const About = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        About Medical Appointment Management System
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', backgroundColor: '#f5f5f5' }}>
        <Typography variant="body1" paragraph>
          Welcome to the Medical Appointment Management System, a cutting-edge solution designed to revolutionize
          the way medical appointments are scheduled and managed.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>Key Features:</strong>
        </Typography>
        <ul style={{ paddingLeft: '20px' }}>
          <li>Efficient appointment scheduling for both patients and healthcare providers.</li>
          <li>Secure and user-friendly interface for managing medical appointments.</li>
          <li>Real-time availability of doctors and appointment slots.</li>
          <li>Access to detailed information about healthcare providers, including specialization and experience.</li>
          <li>Book appointments online and receive confirmation details.</li>
          <li>Track and manage medical results and reports.</li>
        </ul>
        <Typography variant="body1" paragraph>
          Our system aims to provide a seamless and convenient experience for patients and healthcare providers,
          ensuring that the process of managing medical appointments is efficient and organized.
        </Typography>
      </Paper>
    </div>
  );
}

export default About;
