import React from 'react'
import { Navigate } from "react-router-dom";
import { useAuth } from '../helper/AuthContext';

function Logout() {
    const auth = useAuth();
  return (
    <div>
        {auth.logout()}
        <Navigate to="/"/>
    </div>
  )
}

export default Logout