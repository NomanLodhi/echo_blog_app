import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Adminuseredit() {
   const [user,setUser]= useState([]);
   const [changes,setChanges]= useState({});
   const {userId}= useParams()
   useEffect(()=>{
    fetch(`http://localhost:7000/api/v1/admin/users/${userId}`)
    .then(res=>res.json())
    .then(data=>setUser(data))
    console.log(user)
   },[])
   const updateUser=(e)=>{
    if(!user.name ||!user.password ){
      alert('Kindly enter all fields')
    }
  e.preventDefault();
  const updated=new FormData;
  updated.append('name',changes.name)
  updated.append('password',changes.password)
  updated.append('profile',changes.profile)
  fetch(`http://localhost:7000/api/v1/admin/users/${userId}`,{
    method:'PATCH',
    body:updated
  }).then(res=>res.json())
  .then(data=>console.log(data))
}
console.log(userId,'pp')
  return (
    <div>
         <form action={`${userId}`} onSubmit={(e)=>{updateUser(e)}} enctype="multipart/form-data">
            <input type="text" className='form-control my-2'  onChange={(e)=>{setChanges({...changes,name:e.target.value})}} defaultValue={user.data && user.data.name}/>
            
            <input type="password" className='form-control my-2' placeholder='Enter new password' onChange={(e)=>{setChanges({...changes,password:e.target.value})}}/>
            <input type="file" className='form-control my-2' name='profile' onChange={(e)=>{
                setChanges({...changes,profile:e.target.files[0]})
            }}/>
      <button className='btn btn-primary'>Submit</button>
        </form>
     
    </div>
  )
}
