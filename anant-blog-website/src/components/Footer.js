import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { LinkedIn, Email } from '@mui/icons-material';
import { ShareSocial } from 'react-share';

const Footer = () => (
  <Box component="footer" sx={{ py: 3, px: 2, mt: 'auto', backgroundColor: '#010101', color: 'white' }}>
    <Typography variant="h6" align="center">HomeBlog - the home of bloggers</Typography>
    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
      <IconButton color="inherit" href="https://www.linkedin.com/in/anant-yadav">
        <LinkedIn />
      </IconButton>
      <IconButton color="inherit" href="mailto:y2anant@gmail.com">
        <Email />
      </IconButton>
    </Box>
    <Typography variant="body2" color="inherit" align="center">Anant Yadav | y2anant@gmail.com</Typography>
  </Box>
);

export default Footer;
