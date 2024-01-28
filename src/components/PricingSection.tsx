import React from 'react';
import { Grid } from '@mui/material';
import PricingCard from './PricingCard';
import {Plan} from './Types';

const PricingSection: React.FC = () => {
  const plans: Plan[] = [
    {
      title: 'Office365, SharePoint, and Power Platform Solutions - Solutions Delivery and Support ',
      description: 'Deployment and Configuration, ,  Training and User Adoption, Ongoing Maintenance and Support',
      features: [' Deployment and Configuration', 'Customization and Development', 'Training and User Adoption', 'Ongoing Maintenance and Support'],
    },
    {
      title: 'Nintex Workflow, Automation Anywhere , Camunda, Nintex K2 Five Support ',
      description: 'Advanced features for growing businesses',
      features: ['Workflow Design and Implementation', 'Forms Development', 'Robotic Process Automation (RPA)', 'Bot Lifecycle Management', ' System Integration', 'Training and Advisory', 'Ongoing Support and Enhancement'],
    },
    {
      title: 'Artificial Intelligence and Machine Learning (AI/ML) model integrations for business operations ',
      description: 'Full range for large enterprises',
      features: ['AI Strategy and Consulting', 'Custom AI/ML Model Development', 'Data Engineering and Preparation', ' AI/ML Integration with Existing Systems', 'AI-Powered Automation Solutions', 'AI Model Training and Fine-Tuning', 'AI Ethics and Compliance', 'Ongoing Support and Maintenance'],
    },
    {
      title: 'Custom Application Development - Front End, Backend Node.js Applications, Microservices,  ',
      description: 'Full range for large enterprises',
      features: ['Front End Development', 'Backend Development with Node.js', 'Full-Stack Web Applications', 'Microservices Architecture', ' API Development and Integration', 'Cloud Integration and Deployment', ' DevOps and Continuous Integration/Continuous Deployment (CI/CD)', 'Quality Assurance and Testing', 'Ongoing Support and Maintenance'],
    },
  ];

  return (
    <Grid container justifyContent="center" alignItems="center">
      {plans.map((plan, index) => (
        <Grid item key={index}>
          <PricingCard plan={plan} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PricingSection;
