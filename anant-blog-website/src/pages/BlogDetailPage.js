import React, { useEffect, useState } from 'react';
import { Container, Typography, Box } from '@mui/material';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './BlogDetailPage.css';
import CloudinaryImage from './CloudinaryImage';

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/${id}`);
        setBlog(response.data);
      } catch (error) {
        console.error('Failed to fetch blog:', error);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <Container className="blog-detail-container">
      <Box className="blog-detail-box" sx={{marginTop:'1rem'}}>
        <Typography variant="h3" gutterBottom>{blog.title}</Typography>
        <Typography variant="subtitle1" gutterBottom sx={{fontStyle:"italic"}}>by {blog.author}</Typography>
        <CloudinaryImage public_id={blog.public_id}/>
        <Typography variant="body1" dangerouslySetInnerHTML={{ __html: blog.content }} />
      </Box>
    </Container>
  );
};

export default BlogDetailPage;
