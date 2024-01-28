import React, { useState } from 'react';
import { Box, Button, Typography, Grid, Card, CardContent } from '@mui/material';
import '../CSS/CanvasComponent.css'; // Ensure this path is correct

interface CanvasComponentProps {
  backgroundImage: string;
}

const CanvasComponent: React.FC<CanvasComponentProps> = ({ backgroundImage }) => {
  const [activeContent, setActiveContent] = useState<string | null>(null);

  const handleButtonClick = (content: string) => {
    setActiveContent(activeContent === content ? null : content);
  };

  return (
    <Box 
      sx={{
        width: '100vw',
        minHeight: '100vh',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        boxSizing: 'border-box'
      }}
    >
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
      <Grid container direction="column" alignItems="center" justifyContent="center" spacing={2}>
       <Grid item>
          <Typography variant="h1" gutterBottom className="canvas-component-text" style={{ width: '1400px' }}>
       Your long term strategic partner - <span style={{ color: 'rgb(4, 8, 17, 0.897)' }}>delivering bespoke applications to optimise your business processes..</span>
          </Typography>
        </Grid>
       <center><Grid item>
          <Typography variant="h4" gutterBottom className="canvas-component-text-other" style={{ width: '1200px' }}>
          <p>Explore our Vision, Mission and Business Strategy as we pave the way for cutting edge digital solutions
          that create value and enpower people, and businesses.</p>
          </Typography>
        </Grid>
        </center>
        <br>
      </br>
      <br>
      </br>
        <Grid item container justifyContent="center" spacing={3}>
          <Grid item>
            <Button 
              variant="contained" 
              className="canvas-component-button" 
              sx={{ marginTop: '20px' }}
              onClick={() => handleButtonClick('To be the biggest provider of technology enabled solutions that enpower people, businesses, and Government')}>
              Mission
            </Button>
          </Grid>
          <Grid item>
            <Button 
              variant="contained" 
              className="canvas-component-button" 
              sx={{ marginTop: '20px' }}
              onClick={() => handleButtonClick('Bridging gaps to facilitate collaboration and efficiencies between people, businesses and government')}>
              Vision
            </Button>
          </Grid>
        </Grid>
        {activeContent === 'mission' && (
          <Grid item>
            <Card>
              <CardContent>
                <Typography variant="body1" className="canvas-component-text-other">
                To be the biggest provider of technology enabled solutions that enpower people, businesses, and Government
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
        {activeContent === 'vision' && (
          <Grid item>
            <Card>
              <CardContent>
                <Typography variant="body1" className="canvas-component-text-other">
                Bridging gaps to facilitate collaboration and efficiencies between people, businesses and government
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        )}
      </Grid>
    </Box>
  );
};

export default CanvasComponent;

