import * as React from 'react';
import { memo, useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
const TopBar = memo(({ setIsOpen }) => {
  const topBarRef = useRef();
  const [topBarHeight, setTopBarHeight] = useState(0);
  const appBarStyle = { bottom: 'auto', top: 0 };

  useEffect(() => {
    setTopBarHeight(topBarRef.current?.clientHeight);
  }, []);

  return (
    <div style={{ paddingTop: topBarHeight }}>
      <AppBar ref={topBarRef} color='inherit' position='fixed' sx={appBarStyle}>
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            sx={{ mr: 2 }}
            onClick={() => setIsOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
});

export default TopBar;
