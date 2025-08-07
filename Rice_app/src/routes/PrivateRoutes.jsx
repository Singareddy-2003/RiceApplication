import React from 'react'

import { useNavigate,useLocation,Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../store/context/AuthContext'

const PrivateRoutes = ({allowedUser}) => {
  console.log("allowed user",allowedUser)

  let {loading,role,isAuthenticated} = useAuth()

  // accessing the current URL 
  let location = useLocation()

  // making app wait until authrntication checks  are done 
  if (loading) return null

  // if not loggedin 

  if(!isAuthenticated){
    return <Navigate to={'/auth'} state={{from:location}} replace />
  }
// role verification 

if(allowedUser && !allowedUser.includes(role)){
  return <Navigate to={'/unauthorized'}  replace />
}



  return <Outlet/> // renders display the children based on the auth 
}

export default PrivateRoutes
