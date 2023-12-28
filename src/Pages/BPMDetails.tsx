import React from 'react';
import '../CSS/Home.css';
import TextLayout from '../components/PageLayout';

const BPMDetails: React.FC = () => {
  return (
    <div>
      <h1>{}</h1>
      <TextLayout title="Main Title" detail="Subtitle Detail" date="January 1, 2024">
            <p></p>
            <p>More content goes here...</p>
        </TextLayout>
    </div>
    
  );
};

export default BPMDetails;
