import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

interface NewCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const NewCard: React.FC<NewCardProps> = ({ title, description, imageUrl }) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default NewCard;
