import React from 'react'
import { Navigate } from 'react-router-dom'
import { protectedRoutes } from '../utils/listOfRoutes'
const PublicRoutes = ({children}) => {
    
    return <Navigate to="/dashboard"/>
}

export default PublicRoutes