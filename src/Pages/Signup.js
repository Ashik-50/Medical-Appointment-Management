import React, { useState } from 'react';
import {
 Grid,
 Paper,
 Avatar,
 Typography,
 TextField,
 FormControl,
 FormLabel,
 RadioGroup,
 FormControlLabel,
 Radio,
 Checkbox,
 Button,
 Link,
} from '@material-ui/core';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
 paper: {
    padding: theme.spacing(6),
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
 },
 avatar: {
    margin: theme.spacing(1),
    backgroundColor: '#1bbd7e',
 },
 header: {
    marginBottom: theme.spacing(3),
 },
 form: {
    marginTop: theme.spacing(3),
 },
 marginTop: {
    marginTop: theme.spacing(2),
 },
 button: {
    marginTop: theme.spacing(3),
    backgroundColor: '#1bbd7e',
    color: 'white',
    '&:hover': {
      backgroundColor: '#1ed760',
    },
 },
}));

const Signup = () => {
 const classes = useStyles();
  const paperStyle = { padding: '30px 20px', width: 300, margin: '20px auto' };
  const headerStyle = { margin: 0, color: '#1bbd7e' };
  const avatarStyle = { backgroundColor: '#1bbd7e' };
  const marginTop = { marginTop: 10 };
  const formStyle = { display: 'flex', flexDirection: 'column', alignItems: 'center' };
  const buttonStyle = { marginTop: 20, background: '#1bbd7e', color: 'white' };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('Male');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSignup = () => {
    // Validate form data
    if (!name || !email || !password || password !== confirmPassword || !acceptTerms) {
      alert('Invalid or incomplete form data');
      return;
    }

    // Save user information in local storage
    const user = {
      name,
      email,
      gender,
      phoneNumber,
      password,
    };
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <Grid container justify="center">
      <Paper elevation={20} style={paperStyle}>
        <Grid align='center'>
          <Avatar style={avatarStyle}>
            <AddCircleOutlineOutlinedIcon />
          </Avatar>
          <Typography variant='h5' style={headerStyle}>Sign Up</Typography>
          <Typography variant='caption' color='textSecondary' gutterBottom>
            Please fill out this form to create an account
          </Typography>
        </Grid>
        <form style={formStyle}>
          <TextField
            fullWidth
            label='Name'
            placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Email'
            placeholder='Enter your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin='normal'
          />
          <FormControl component='fieldset' style={marginTop}>
            <FormLabel component='legend'>Gender</FormLabel>
            <RadioGroup
              aria-label='gender'
              name='gender'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              row
            >
              <FormControlLabel value='Male' control={<Radio />} label='Male' />
              <FormControlLabel value='Female' control={<Radio />} label='Female' />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label='Phone Number'
            placeholder='Enter your phone number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Password'
            placeholder='Enter your password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin='normal'
          />
          <TextField
            fullWidth
            label='Confirm Password'
            placeholder='Confirm your password'
            type='password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            margin='normal'
          />
          <FormControlLabel
            control={<Checkbox name='acceptTerms' checked={acceptTerms} onChange={() => setAcceptTerms(!acceptTerms)} />}
            label='I accept the terms and conditions.'
          />
          <Button
            type='button'
            variant='contained'
            style={buttonStyle}
            fullWidth
            onClick={handleSignup}
            component={Link}
            to="/"
          >
            Sign up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
