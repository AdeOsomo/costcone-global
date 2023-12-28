// In HomePage.tsx
import React from 'react';
import DataCard from '../components/DataCard';
import PageLayout from '../components/PageLayout';


const Services: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
    <div>
      <PageLayout title="Creating Efficiencies, transparency, and cost savings for your business through automation." detail="We are experts in delivering scalable, AI driven, business process solutions taylored to your specific business needs." date="January 1, 2024">
            <p></p>
            <p>More content goes here...</p>
        </PageLayout>
    </div>
  <DataCard 
    title="Business Solutions - Application Development, Process Automation, and Transformations" 
    text="We are experts in transforming your business processes in to automation solutions that create efficiencies, annd cost savings to your operations." 
    imageUrl="/images\BPM1.png"
  />
  <DataCard 
    title="Artificial Intelligence,Blockchain Research and Development" 
    text=" consultation services offered to help businesses integrate Nintex Automation Cloud. " 
    imageUrl="/images/Blockchain.png" 
  />
  <DataCard 
    title="Business Consulting, Data Analysis and Visualisation" 
    text="This is some example text for the third card." 
    imageUrl="/images\BusinessIntel.png" 
  />
  <DataCard 
    title="Contracts, Delivery Management and Services" 
    text="This is some example text for the first card." 
    imageUrl="/images\AIML1.png" 
  />
</div>
);
};

export default Services;
