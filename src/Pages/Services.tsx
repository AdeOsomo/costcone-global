// In HomePage.tsx
import React from 'react';
import DataCard from '../components/DataCard';

const Services: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
  <DataCard 
    title="Business Solutions Development, Process Automation, and Transformations" 
    text="We are experts in transforming your business processes in to automation solutions that create efficiencies, annd cost savings to your operations." 
    imageUrl="https://example.com/image2.jpg"
  />
  <DataCard 
    title="Artificial Intelligence, Blockchain Research and Development" 
    text="We deliver " 
    imageUrl="https://example.com/image2.jpg" 
  />
  <DataCard 
    title="Business Technology Consulting" 
    text="This is some example text for the third card." 
    imageUrl="https://example.com/image3.jpg" 
  />
  <DataCard 
    title="Contracts, Delivery Management and Services" 
    text="This is some example text for the first card." 
    imageUrl="https://example.com/image1.jpg" 
  />
</div>
);
};





export default Services;
