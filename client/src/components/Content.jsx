import { Box, Stack } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Content = () => {
  return (
    <Stack direction='row' spacing={2} justifyContent='center'>
        <Sidebar/>
        <Outlet/>
        <Box bgcolor='gray' flex={3}
        > </Box>
    </Stack>
  )
}

export default Content