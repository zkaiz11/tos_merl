import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import Navbar from '../components/Navbar'
import { Outlet } from "react-router-dom";

export const Root = () => {
  return (
    <Box>
        <Navbar/>
        <Outlet/>
    </Box>
  )
}

          
