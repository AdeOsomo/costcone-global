import React from 'react';
import { Paper, Typography, Button, Box } from '@mui/material';

const Banner: React.FC = () => {
  return (
    <Paper elevation={4} style={{ padding: '150px', backgroundColor: '#f5f5f5' }}>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Typography variant="h3"></Typography>
        <Typography variant="subtitle1" style={{ margin: '20px 0' }}>
          Check out our latest features.
        </Typography>
        <Button  variant="contained" sx={{ fontSize: '24px', padding: '12px 24px' }}>
          Mission
        </Button>
        <Button variant="contained" color="primary">
          Vision
        </Button>
      </Box>
    </Paper>
  );
};

export default Banner;
