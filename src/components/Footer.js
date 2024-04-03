// Footer.js
import React from 'react';
import { Paper, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
 return (
    <Paper square elevation={3} style={{ backgroundColor: '#D5D1D0', color: 'black', padding: '1em', textAlign: 'center' }}>
      <Typography variant="body2">
        &copy; 2023 Medical Appointment Management System. All rights reserved.
      </Typography>
      <Typography variant="body2" style={{ marginTop: '10px' }}>
        Contact us: contact@medicalappointment.com
      </Typography>
      <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
        {/* Social Media Links */}
        <IconButton color="inherit" component={Link} href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
          <FacebookIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
          <TwitterIcon />
        </IconButton>
        <IconButton color="inherit" component={Link} href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
      </div>
    </Paper>
 );
}

export default Footer;