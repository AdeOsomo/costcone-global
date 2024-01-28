import React from 'react';
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';
import {Plan} from './Types';

interface PricingCardProps {
  plan: Plan;
}

const PricingCard: React.FC<PricingCardProps> = ({ plan }) => {
  return (
    <Card raised style={{ margin: '10px', width: '300px' }}>
      <CardContent>
        <Typography variant="h5" style={{ color: '#1976d2' }}>{plan.title}</Typography>
        <br>
        </br>
        <Typography variant="body1" className="canvas-component-text-body" style={{ marginBottom: '15px', color: '#424242' }}>
          {plan.description}
        </Typography>
        <List>
          {plan.features.map((feature, index) => (
            <ListItem key={index}>
              <Typography variant="body2">{feature}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default PricingCard;


