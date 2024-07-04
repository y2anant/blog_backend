import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignupPage.css';
import { toast } from 'react-toastify';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/signup`, { 
        name, 
        email, 
        password, 
        phoneNumber 
      });

      if (response.status === 201) {
        toast.success('Signup successful');
        navigate('/');
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        toast.error('Email  already exists');
      } else {
        toast.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <Container className="signup-container">
      <Box className="signup-box">
        <Typography variant="h4" align="center">Signup to HomeBlog Now</Typography>
        <TextField label="Name" type="name" fullWidth margin="normal" value={name} onChange={(e) => setName(e.target.value)} required />
        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required/>
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} required/>
        <TextField label="phoneNumber" type="phone" fullWidth margin="normal" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} required/>
        <Button variant="contained" color="primary" onClick={handleSignup}>Signup</Button>
      </Box>
    </Container>
  );
};

export default SignupPage;
