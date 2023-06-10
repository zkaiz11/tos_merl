import { 
  Home, 
  LiveTv,
} from '@mui/icons-material'
import { 
  Box,
  List, 
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon
} from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <Box flex={3} sx={{display:{xs: 'none', sm: 'block'}}}>
      <List>
      <ListItem disablePadding>
        <ListItemButton onClick={e=>navigate('/content/home', {replace:true})}>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItemButton>
      </ListItem>
      <ListItem disablePadding>
          <ListItemButton onClick={e=>navigate('/content/watch', {replace:true})}>
            <ListItemIcon>
              <LiveTv/>
            </ListItemIcon>
            <ListItemText primary="Watch" />
          </ListItemButton>
      </ListItem>
    </List>
    </Box>
  )
}

export default Sidebar