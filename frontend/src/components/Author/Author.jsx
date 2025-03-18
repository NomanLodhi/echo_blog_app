import React from 'react'
import { Link, Navigate, Outlet } from 'react-router-dom'

export default function Author({AllowedRole}) {
  return AllowedRole == localStorage.getItem('role')?(
    <>
    <div className='row'>
          <div className="col-4">
          <ul class="list-group">
      <Link to={'authoredit'} class="list-group-item">Edit profile</Link>
    </ul>
          </div>
          <div className="col-8"><Outlet/></div>
         </div>
    </>
  ):(
    <Navigate to={'/signin'}/>
  )
}
