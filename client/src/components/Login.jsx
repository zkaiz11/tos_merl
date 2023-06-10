import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  styled,
  Paper,
} from "@mui/material";
import api from "../api/api";
import React, { useContext, useState, useRef, useEffect } from "react";
import DataContext from '../contexts/DataContext';
import { Navigate } from "react-router-dom";

const StyledButtonGroup = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  gap: "1rem",
  padding: "20px 0 20px 0",
});



const Login = () => {
  const { 
    username,
    setUsername,
    password,
    setPassword,
    errMsg,
    setErrMsg,
    errRef,
    handleLogin,
    navigate,
    isLoggedIn,
    setIsLoggedIn,
   } = useContext(DataContext);
  const [showPassword, setShowPassword] = useState(false);
  const userRef = useRef();
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  
  const handleClickToSignup = (e) => {
    setUsername("");
    setPassword("");
    navigate('/account/signup', {replace:true})
  }

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/content/home');
    }
  },[isLoggedIn]);

  useEffect(() => {
    setErrMsg('');
  },[username,password]);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

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
          <Typography variant="h5">Log In</Typography>
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
          <p>forget password?</p>
          <StyledButtonGroup>
            <Button variant="outlined" onClick={handleLogin}>
              Log in
            </Button>
            <Button variant="contained" onClick={handleClickToSignup}>Sign Up</Button>
          </StyledButtonGroup>
        </Stack>
      </Paper>
    </Grid>
  );
};

export default Login;
