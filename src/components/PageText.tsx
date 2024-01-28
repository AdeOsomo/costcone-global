// DeliveringExcellence.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface Section {
  title: string;
  text: string;
}

interface PageTextProps {
  sections: Section[];
}

const PageText: React.FC<PageTextProps> = ({ sections }) => {
  return (
    <Box sx={{ width: '100vw', margin: 'auto', textAlign: 'left' }}>
      {sections.map((section, index) => (
        <Box key={index} mb={2} sx={{ maxWidth: '1250px', marginLeft: 'auto', marginRight: 'auto' }}>
          <Typography variant="h6" component="p">
            {`${index + 1}. ${section.title}`}
          </Typography>
          <Typography variant="body1">
            {section.text}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default PageText;

