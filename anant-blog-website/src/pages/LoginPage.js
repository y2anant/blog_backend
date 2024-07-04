import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './LoginPage.css';
import { toast } from 'react-toastify';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/auth/login`, { email, password })
      .then((response)=>{
        // console.log(response);
        localStorage.setItem("auth-token",response.data.token);
        toast.success("Logging in...");
        navigate('/profile');
        
      })
      // Handle login success (e.g., save token, navigate to profile)
      
    } catch (error) {

      if (error.response && error.response.status === 400) {
        toast.error('Invalid Credentials');
      } else {
        toast.error('Failed to reach the server, Please try again after some time.');
      }
    }
  };

  return (
    <Container className="login-container">
      <Box className="login-box">
        <Typography variant="h4" align="center">Login to HomeBlog</Typography>
        <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
        <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button variant="contained" color="primary" onClick={handleLogin}>Login</Button>
      </Box>
    </Container>
  );
};

export default LoginPage;
