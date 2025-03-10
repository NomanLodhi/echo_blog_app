import React, { use, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import USERIMAGE from '../media/user.png';
export default function Userhome() {
 const navigate= useNavigate
 const[user,setUser]= useState({})
  useEffect(()=>{
    const myToken=localStorage.getItem('token')
    const ID=localStorage.getItem('userId')
    console.log(ID)
    fetch(`http://localhost:7000/api/v1/users/${ID}`,
      {
        method:"GET",
        headers:{
          'Content-Type':'application/json',
          Authorization:`Bearer ${myToken}`
         }
      }
    ).then((res)=>{
    return  res.json()
   }).then((data)=>{
    

      setUser(data)
      console.log(data)
    })
  },[])
  const signOut=()=>{
    localStorage.removeItem('userId')
    localStorage.removeItem('token')
    navigate('/signin')
  }
  // console.log(user.data)
  return (
    <div>
      {
       user.data && user.data.profile==null ? <img src={USERIMAGE} alt="" /> : <img src={`http://localhost:7000/files/${user.data && user.data.profile}`} alt="" />
      }
      
      <h1>{user.data && user.data.name}</h1>
      <Link className='btn btn-primary' to='/edit'>Edit profile</Link>
      <button className='btn btn-primary' onClick={()=>{signOut()}}>Sign out</button>
    </div>
  )
}
