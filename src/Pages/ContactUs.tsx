import React from 'react';
import ContactUs, { FormData } from '../components/ContactUs'; // Adjust the import path as needed
import PageLayout from '../components/PageLayout';

const Contact: React.FC = () => {
  const handleFormSubmit = (data: FormData) => {
    console.log('Form Data:', data);
    // Here you would typically make an API call to your backend service
    // to handle the actual email sending.
  };

  return (
    <div>
  
      <h1>Welcome to Our Page</h1>
      <ContactUs onFormSubmit={handleFormSubmit} />
    </div>
  );
};

export default Contact;

