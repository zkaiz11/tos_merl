import { Button, Stack } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Welcome = () => {
  const navigate = useNavigate();
  const handleLoginButton = (e) => {
    e.preventDefault();
    navigate('/account/login', {replace:true});
  }
  const handleSignupButton = (e) => {
    e.preventDefault();
    navigate('/account/signup', {replace:true});
  }
  return (
    <Stack
        marginTop="8vh"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
    >
        <Button variant="outlined" onClick={handleLoginButton}>Log In</Button>
        <Button variant="outlined" onClick={handleSignupButton}>Sign Up</Button>
    </Stack>
  )
}

export default Welcome