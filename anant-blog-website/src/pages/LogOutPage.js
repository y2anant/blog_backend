import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const LogOutPage = () => {
    const navigate = useNavigate();
    useEffect(()=>{
        const handleLogout = () => {
            localStorage.removeItem("auth-token");
            // Redirect to home page or login page after logout
            navigate('/login');
          };
          handleLogout();
          navigate("/");
    })
  return (
    <div>LogOutPage</div>
  )
}

export default LogOutPage