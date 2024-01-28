import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

interface ContactUsProps {
  onFormSubmit: (data: FormData) => void;
}

export interface FormData {
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  contactNumber: string;
  additionalNotes: string;
}

const ContactUs: React.FC<ContactUsProps> = ({ onFormSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    contactNumber: '',
    additionalNotes: ''
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onFormSubmit(formData);
  };

  return (
    <Box sx={{ width: '100%', padding: '20px' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          margin="normal"
          type="email"
        />
        <TextField
          fullWidth
          label="Contact Number"
          name="contactNumber"
          value={formData.contactNumber}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Additional Notes"
          name="additionalNotes"
          value={formData.additionalNotes}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" sx={{ mt: 3 }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default ContactUs;

