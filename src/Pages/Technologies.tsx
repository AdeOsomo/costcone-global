import React from 'react';
import DataCard from '../components/DataCard';

const Technologies = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <DataCard 
        title="Power Platform - PowerApps, Automate, Power BI" 
        text="We are experts in transforming your business processes in to automation solutions that create efficiencies, annd cost savings to your operations." 
        imageUrl="https://example.com/image2.jpg"
      />
      <DataCard 
        title="Nintex Automation Cloud" 
        text="We deliver " 
        imageUrl="https://example.com/image2.jpg" 
      />
      <DataCard 
        title="Automation Anywhere" 
        text="This is some example text for the third card." 
        imageUrl="https://example.com/image3.jpg" 
      />
      <DataCard 
        title="Camunda" 
        text="This is some example text for the first card." 
        imageUrl="https://example.com/image1.jpg" 
      />
   </div>
    );
};

export default Technologies;
