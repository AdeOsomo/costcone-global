import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';


const Header: React.FC = () => {
  const logoPath = './images/Costcone Logo 2.png';

  return (
    <AppBar position="fixed">
      <Toolbar>
      <img src={logoPath} alt="Logo" style={{ height: 20, marginRight: 10 }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/services">Services</Button>
        <Button color="inherit" component={Link} to="/technologies">Technologies</Button>
        <Button color="inherit" component={Link} to="/partners">Partners</Button>
        <Button color="inherit" component={Link} to="/company">Company</Button>
        <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
      </Toolbar>
    </AppBar>
  );
}

export default Header;

