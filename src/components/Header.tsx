import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Costcone-Global
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/services">Services</Button>
        <Button color="inherit" component={Link} to="/technologies">Technologies</Button>
        <Button color="inherit" component={Link} to="/partners">Partners</Button>
        <Button color="inherit" component={Link} to="/company">Company</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
