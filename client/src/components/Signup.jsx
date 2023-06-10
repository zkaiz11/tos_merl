import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  styled,
  RadioGroup,
  Radio,
  Paper,
  Grid,
} from "@mui/material";
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useContext, useState, useRef, useEffect } from "react";
import DataContext from "../contexts/DataContext";

const StyledButtonGroup = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "20px 0 20px 0",
});

const Signup = () => {
  const { 
    username,
    setUsername,
    password,
    setPassword,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    phoneNumber,
    setPhoneNumber,
    gender,
    setGender,
    dateOfBirth,
    setDateOfBirth,
    errMsg,
    setErrMsg,
    errRef, 
    handleSignup,
    navigate,
  } = useContext(DataContext);
  const [showPassword, setShowPassword] = useState(false);
  const userRef = useRef();
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  useEffect(() => {
    setErrMsg('');
  },[username,password,firstName,lastName,phoneNumber,dateOfBirth,gender]);


  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickToSignin = (e) => {
    setUsername("");
    setPassword("");
    setDateOfBirth("");
    setPhoneNumber("");
    setFirstName("");
    setLastName("");
    setGender("");
    navigate('/account/login', {replace:true})
  }


  const paperStyle = {width: '25rem', margin:'20px auto'}
  return (
    <Grid>
      <Paper elevation={10} style={paperStyle}>
        <Stack
          marginTop="8vh"
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={1}
          padding='20px'
        >
          <Typography variant="h5">Sign Up</Typography>
          <Typography ref={errRef} color='red'>{errMsg}</Typography>
          <FormControl sx={{ m: 1, width: "20rem" }} variant="outlined">
            <InputLabel htmlFor="username-input">Username</InputLabel>
            <OutlinedInput
              id="username-input"
              type="text"
              label="Username"
              required
              ref={userRef}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "20rem" }} variant="outlined">
            <InputLabel htmlFor="password-input">Password</InputLabel>
            <OutlinedInput
              id="password-input"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "20rem" }} variant="outlined">
            <InputLabel htmlFor="firstName-input">First Name</InputLabel>
            <OutlinedInput
              id="firstName-input"
              type="text"
              label="firstName"
              required
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "20rem" }} variant="outlined">
            <InputLabel htmlFor="lastName-input">Last Name</InputLabel>
            <OutlinedInput
              id="lastName-input"
              type="text"
              label="lastName"
              required
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          <FormControl sx={{ m: 1, width: "20rem" }} variant="outlined">
            <InputLabel htmlFor="phoneNumber-input">Phone Number</InputLabel>
            <OutlinedInput
              id="phoneNumber-input"
              type="text"
              label="phoneNumber"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </FormControl>
          <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="male"
              name="radio-buttons-group"
              value={gender}
              onChange={e => setGender(e.target.value)}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DemoItem label="Date of Birth">
                <DatePicker label ="Date" value={dateOfBirth} onChange={(newValue) => setDateOfBirth(newValue)} />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
          <StyledButtonGroup>
            <Button variant="outlined" onClick={handleSignup}>
              Sign Up
            </Button>
          </StyledButtonGroup>
          <Typography onClick={handleClickToSignin}>Already have an account? Log in here!!</Typography>
        </Stack>
      </Paper>
    </Grid>
  )
}

export default Signup