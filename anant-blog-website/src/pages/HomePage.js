import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './HomePage.css';
import CloudinaryImage from './CloudinaryImage';

const HomePage = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blogs`);
        const blog = response.data.blogs;
        setBlogs(blog);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <Container sx={{mt:'2rem',mb:'2rem'}}>
      <Typography variant='h3' gutterBottom> Our Top Blogs </Typography>
      <Grid container spacing={3}>
        {blogs.map(blog => (
          <Grid item key={blog._id} xs={12} sm={6} md={4}>
            <Card className="blog-card">
            <CloudinaryImage public_id={blog.public_id}/>
             
              <CardContent>
                <Typography variant="h5">{blog.title}</Typography>
                <Typography variant="body2" color="textSecondary">{blog.author}</Typography>
                <Button onClick={() => navigate(`/blog/${blog._id}`)}>View Detail</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomePage;
