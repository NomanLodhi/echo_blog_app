import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

export default function Admindashboard({allowedRole}) {
    console.log(allowedRole)
    console.log(localStorage.getItem('role'))
  return allowedRole == localStorage.getItem('role') ?(
     <div className='row'>
      <div className="col-4">
      <ul class="list-group">
  <Link to={'adminusers'} class="list-group-item">Users</Link>
  <Link to={'adminauthors'} class="list-group-item">Authors</Link>
 
</ul>
      </div>
      <div className="col-8"><Outlet/></div>
     </div>
    ) :(
         <Navigate to={'/signin'}></Navigate>
        )
}
