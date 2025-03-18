import React, { useEffect, useState } from 'react'
import userImage from '../media/user.png'
import { Link, useParams } from 'react-router-dom';
export default function Adminusers() {
  const [users,setUsers]= useState({data:[]});
 useEffect(()=>{
   fetch('http://localhost:7000/api/v1/admin/users')
   .then(res=>res.json())
   .then(data=>setUsers(data))
  },[])
 const Del=(e)=>{
  fetch(`http://localhost:7000/api/v1/admin/users/${e.id}`,{
    method:"DELETE"
  })
  

 }
  return (
    <div className='container-fluid'>
      <div className="row py-5">

     {
   
  users.data && users.data.length > 1 ? ( users.data && users.data.map((user)=>(
    user.role !=='admin' ? (
      <div className='col-lg-4'>
      <div className="card" style={{width:'18rem'}}>
{user.profile == null ? <img src={userImage} className="card-img-top" alt="..."/> : <img src={`http://localhost:7000/files/${user.profile}`} className="card-img-top" alt="..."/>}
<div className="card-body">
<h5 className="card-title">{user.name}</h5>
<p className="card-text"><span className='fw-bold'>Role:  </span>{user.role}</p>
<p className="card-text"><span className='fw-bold'>Email:  </span>{user.email}</p>
<Link to={`${user.id}`} className="btn btn-primary rounded-0">Edit user</Link>
<button  className="btn btn-danger  rounded-0" onClick={()=>{Del(user)}} >Delete user</button>
</div>
</div>
     </div>
    ):(
      null
    )
    ))) : (
   <h1>No user found</h1>
  ) 
      }
      </div>
     
    </div>
  )
}

