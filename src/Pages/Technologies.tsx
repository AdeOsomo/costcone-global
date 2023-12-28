import React from 'react';
import DataCard from '../components/DataCard';

const Technologies = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
      <DataCard 
        title="Power Platform - PowerApps, Automate, Power BI" 
        text="We are experts in transforming your business processes in to automation solutions that create efficiencies, annd cost savings to your operations." 
        imageUrl="/images\PowerPlatform.png"
      />
      <DataCard 
        title="Nintex Automation Cloud" 
        text="We are leaders in the delivery of bespoke Nintex Automation workflow and Cloud solutions to suit your business needs. With over 12 years of experience using this platform we have delivered several solutions for Operations, HR, Legal detpartments of businesses using Nintex technologies.  " 
        imageUrl="/images\NintexCloud.png" 
      />
      <DataCard 
        title="Automation Anywhere" 
        text="This is some example text for the third card." 
        imageUrl="/images\AutomationAnywhere.png" 
      />
      <DataCard 
        title="Camunda" 
        text="This is some example text for the first card." 
        imageUrl="/images\Camunda.png" 
      />
   </div>
    );
};

export default Technologies;
