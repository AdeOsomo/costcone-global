import React from 'react';
import { Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Container style={{ textAlign: 'center', marginTop: '30px' }}>
      <Typography variant="body1">© 2023 Costcone-Global Services Ltd. All Rights Reserved.</Typography>
    </Container>
  );
};

export default Footer;
