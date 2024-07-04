import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import './ProfilePage.css';
import avatar from '../assets/avatar.png';

const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  

  useEffect(() => {
    // Fetch profile data from backend
    const fetchProfile = async () => {
      try {
        const item =  localStorage.getItem("auth-token");
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/auth/profile`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${item}`,
            },
          }
        );
        console.log(response.data);
        setProfile(response.data);
      } catch (error) {
        console.error('Failed to fetch profile:', error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <Container className="profile-container">
      <Box className="profile-box">
        <img src={avatar} alt="Profile" className="profile-image" />
        <Typography variant="h5">{profile.name}</Typography>
        <Typography variant="body1">{profile.email}</Typography>
        {/* Add more profile details as needed */}
      </Box>
    </Container>
  );
};

export default ProfilePage;
