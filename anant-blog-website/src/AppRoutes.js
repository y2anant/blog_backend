import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';




const LoginPage = lazy(() => import('./pages/LoginPage'));
const SignupPage = lazy(() => import('./pages/SignupPage'));
const CreateBlogPage = lazy(() => import('./pages/CreateBlogPage'));
const HomePage = lazy(() => import('./pages/HomePage'));
const ProfilePage = lazy(() => import('./pages/ProfilePage'));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage'));
const LogOutPage = lazy(() => import('./pages/LogOutPage'));

const AppRoutes = () => (
  
  <Router>
    <Navbar />
    <ToastContainer />
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/create-blog" element={<CreateBlogPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/blog/:id" element={<BlogDetailPage />} />
        <Route path="/logout" element={<LogOutPage />} />
      </Routes>
    </Suspense>
    <Footer />
  </Router>
);

export default AppRoutes;
