import React from 'react'
import { Navigate } from 'react-router-dom'
import { protectedRoutes } from '../utils/listOfRoutes'
import { Router } from 'react-router-dom'
const PublicRoutes = ({children}) => {
    
    return <Navigate to="/dashboard"/>
}

export default PublicRoutes