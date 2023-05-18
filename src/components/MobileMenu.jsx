import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import SendIcon from '@mui/icons-material/Send';
import ComputerIcon from '@mui/icons-material/Computer';

export default function MobileMenu({ isOpen, setIsOpen }) {
  const mobileMenuArray = [
    { text: 'Top', icon: <HomeIcon />, path: '/' },
    {
      text: 'Profile',
      icon: <PersonIcon />,
      path: '/',
    },
    { text: 'Product', icon: <AppsIcon />, path: '/' },
    { text: 'Skill', icon: <ComputerIcon />, path: '/' },
    { text: 'Form', icon: <SendIcon />, path: '/' },
  ];
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setIsOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {mobileMenuArray.map((mobileMenuItem) => (
          <ListItem disablePadding key={mobileMenuItem.text}>
            <ListItemButton>
              <ListItemIcon>{mobileMenuItem.icon}</ListItemIcon>
              <ListItemText primary={mobileMenuItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor='left' open={isOpen} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
}
