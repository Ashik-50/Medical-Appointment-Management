import React, { useState } from 'react';
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link, FormControlLabel, Checkbox } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1bbd7e',
    },
    secondary: {
      main: '#ffa726',
    },  
  },
});

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: '70vh',
    width: 300,
    margin: '20px auto',
  };
  const avatarStyle = {
    backgroundColor: '#1bbd7e',
  };
  const btnstyle = {
    margin: '20px 0',
    background: '#1bbd7e',
    color: 'white',
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    // Hardcoded username and password for simplicity
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      const user = JSON.parse(storedUser);

      if (username === user.name && password === user.password) {
        if (rememberMe) {
          // Store user information in local storage
          localStorage.setItem('username', username);
        }
        // Navigate to the landing page
        navigate('/landing');
      } else {
        alert('Invalid username or password');
      }
    } else {
      alert('User not found. Please sign up first.');
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid>
        <Paper elevation={10} style={paperStyle}>
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOutlinedIcon />
            </Avatar>
            <h2>Sign In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Enter username"
            fullWidth
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            margin="normal"
          />
          <TextField
            label="Password"
            placeholder="Enter password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />
          <FormControlLabel
            control={
              <Checkbox
                name="checkedB"
                color="primary"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
            }
            label="Remember me"
          />
          <Button type="button" variant="contained" style={btnstyle} fullWidth onClick={handleLogin}>
            Sign in
          </Button>
          <Typography>
            <Link component={RouterLink} to="/signup">
              Do you have an account? Sign Up
            </Link>
          </Typography>
          <Typography>
            <Link component={RouterLink} to="/admin/login">
              Admin Login
            </Link>
          </Typography>
        </Paper>
      </Grid>
    </ThemeProvider>
  );
};

export default Login;
