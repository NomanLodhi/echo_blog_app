import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

export default function Admindashboard({allowedRole}) {
    console.log(allowedRole)
    console.log(localStorage.getItem('role'))
  return allowedRole == localStorage.getItem('role') ?(
     <Outlet/>
    ) :(
         <Navigate to={'/signin'}></Navigate>
        )
}
