import {
    Button,
    FormControl,
    FormControlLabel,
    FormLabel,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    RadioGroup,
    Radio,
  } from "@mui/material";


import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import React, { useContext, useState, useRef, useEffect } from "react";
import DataContext from "../contexts/DataContext";

const EditProfile = () => {
    const { 
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

  return (


    <Stack
        marginTop="8vh"
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        padding='20px'
    >
        <Typography variant="h5">Edit Profile</Typography>
        <Typography ref={errRef} color='red'>{errMsg}</Typography>
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
        <Button variant="outlined" onClick={handleSignup}>
            Done
        </Button>
    </Stack>
  )
}

export default EditProfile

