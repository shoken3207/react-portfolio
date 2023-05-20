import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import AppsIcon from '@mui/icons-material/Apps';
import SendIcon from '@mui/icons-material/Send';
import ComputerIcon from '@mui/icons-material/Computer';

export default function MobileMenu({ isOpen, setIsOpen }) {
  const mobileMenuArray = [
    {
      text: 'Profile',
      icon: <PersonIcon />,
      path: '#profile',
    },
    { text: 'Skill', icon: <ComputerIcon />, path: '#skill' },
    { text: 'Product', icon: <AppsIcon />, path: '#product' },
    { text: 'Form', icon: <SendIcon />, path: '#form' },
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
          <a href={mobileMenuItem.path} key={mobileMenuItem.text}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>{mobileMenuItem.icon}</ListItemIcon>
                <ListItemText primary={mobileMenuItem.text} />
              </ListItemButton>
            </ListItem>
          </a>
        ))}
      </List>
    </Box>
  );

  return (
    <Drawer anchor='right' open={isOpen} onClose={toggleDrawer(false)}>
      {list()}
    </Drawer>
  );
}
