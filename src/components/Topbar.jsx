import * as React from 'react';
import { memo, useState, useEffect, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Box, Button } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Slide from '@mui/material/Slide';
import PropTypes from 'prop-types';

function HideOnScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

const TopBar = memo(({ setIsOpen, ...otherProps }) => {
  const topBarRef = useRef();
  const [topBarHeight, setTopBarHeight] = useState(0);
  const appBarStyle = { bottom: 'auto', top: 0 };
  const navItems = ['profile', 'skill', 'product', 'form'];
  useEffect(() => {
    setTopBarHeight(topBarRef.current?.clientHeight);
  }, []);

  return (
    <div style={{ paddingTop: topBarHeight }}>
      <HideOnScroll {...otherProps}>
        <AppBar
          ref={topBarRef}
          color='inherit'
          position='fixed'
          sx={appBarStyle}
        >
          <Toolbar>
            <Typography
              variant='h4'
              component='div'
              sx={{
                flexGrow: 1,
                fontFamily: 'Shippori Mincho B1, serif;',
              }}
            >
              <a href='#top'>Portfolio</a>
            </Typography>

            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <a href={`#${item}`} key={item}>
                  <Button sx={{ color: '#1976D2' }}>{item}</Button>
                </a>
              ))}
            </Box>
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ mr: 2, display: { xs: 'block', sm: 'none' } }}
              onClick={() => setIsOpen(true)}
            >
              <MenuIcon fontSize='large' />
            </IconButton>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
    </div>
  );
});

export default TopBar;
