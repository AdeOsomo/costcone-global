import React from 'react';
import { Box, Typography, Button, Grid, List, ListItem } from '@mui/material';
import '../CSS/CanvasComponent.css'; // Ensure this path is correct

interface CompanyComponentProps {
  backgroundImage: string;
  headerText: string;
  bodyText: string;
  bodyText1:string;
  sideImage?: string; // Optional side image
  bulletPoints?: string[]; // Array of bullet points
}

const CompanyComponent: React.FC<CompanyComponentProps> = ({ backgroundImage, headerText, bodyText, bodyText1, sideImage, bulletPoints }) => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        width: '100%',
        minHeight: '50vh',
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      <Typography variant="h4" gutterBottom className="canvas-component-text-company">
        {headerText}
      </Typography>
      <br/>
      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <Typography variant="body1" className="canvas-component-text-body" sx={{ fontSize: '20px' }}>
            {bodyText}
          </Typography>
          <br>
          </br>
          <Typography variant="body1" className="canvas-component-text-body" sx={{ fontSize: '20px' }}>
            {bodyText1}
          </Typography>
          <br>
          </br>
          {bulletPoints && bulletPoints.length > 0 && (
            <List sx={{ pl: 4, color: 'white' }}>
              {bulletPoints.map((point, index) => (
                <ListItem className="canvas-component-text-body" key={index} sx={{ display: 'list-item', listStyleType: 'disc' }}>
                  {point}
                </ListItem>
              ))}
            </List>
          )}
          <Button variant="contained" color="primary" sx={{ marginTop: '20px' }}>
            Talk to Us
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          {sideImage && (
            <Box
              sx={{
                backgroundImage: `url(${sideImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '600px', // Adjust height as needed
                width: '100%',
              }}
            />
          )}
        </Grid>
      </Grid>
    </Box>
  );
};

export default CompanyComponent;




