import React, { useState } from 'react';
import { Container, TextField, Button, Typography, Box } from '@mui/material';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';
import './CreateBlogPage.css';
import {toast} from 'react-toastify'
import { useNavigate } from 'react-router-dom';
// import MediaCard from "./components/MediaCard";

const CreateBlogPage = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [public_id, setPublicId] = useState('');
  const [file,setFile] = useState(null);
  const [content, setContent] = useState('');
  const [uploaded,setUploaded] = useState(false);
  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const item = localStorage.getItem("auth-token");
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/api/blogs/create`, { title, author, content,public_id },{
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${item}`,
        },
      }).then((response)=>{
        toast.success("Blog submitted successfully");
        navigate("/");
      })
      
      // Handle successful blog creation (e.g., navigate to home or show message)
    } catch (error) {
      console.error('Failed to create blog:', error);
    }
  };

  const uploadImage = async(event)=>{
    const formData = new FormData();
    formData.append("file",file);
    formData.append("upload_preset","AnantBlogCloudinary");

    await axios.post(`https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUDINARY_CLOUDNAME}/image/upload`,formData)
    .then((response)=>{
      setPublicId(response.data.public_id);
      setUploaded(true);
    })
    .catch((error)=>{
      console.log(error);
    });
  }

  return (
    <Container className="create-blog-container">
      <Box className="create-blog-box">
        <Typography variant="h4" align="center">Create Blog</Typography>
        {/* <CloudinaryImage/> */}
        <TextField label="Title" fullWidth margin="normal" value={title} onChange={(e) => setTitle(e.target.value)} />
        <TextField type='file' fullWidth margin="normal"  onChange={(event)=>setFile(event.target.files[0])} disabled={uploaded}/>
        <Button onClick={uploadImage} disabled={uploaded}> {!uploaded && 'Upload Image'} {uploaded && 'Uploaded'}</Button>
        <TextField label="Author" fullWidth margin="normal" value={author} onChange={(e) => setAuthor(e.target.value)} />
        
        <ReactQuill value={content} onChange={setContent} />
        <Button variant="contained" color="primary" onClick={handleSubmit}>Submit</Button>
      </Box>
    </Container>
  );
};

export default CreateBlogPage;
