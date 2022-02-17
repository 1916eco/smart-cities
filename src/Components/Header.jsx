import React from 'react';
import {AppBar,Toolbar,Typography} from '@mui/material';



const Header = () => {
  return(
    <React.Fragment>
    <AppBar>
      <Toolbar>
      <Typography>SmartCities</Typography>
      </Toolbar>
      </AppBar>
  </React.Fragment>
  );
};

export default Header;
