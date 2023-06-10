import { Stack } from '@mui/material';
import React from 'react';
import Card from './Card';

const Watch = () => {
  return (
    <Stack
        flex={6} 
        spacing={2} 
        direction='column'
        sx={{
            display:'flex',
            justifyContent: 'center',
            alignItems:'center',
            paddingTop: '1rem'
        }}
    >
        <Card/>
        <Card/>
        <Card/>
    </Stack>
  )
}

export default Watch