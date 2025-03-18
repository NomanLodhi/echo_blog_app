import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
export default function SignIn() {
  let navigate= useNavigate()
   const [data,setData]= useState({});
   const signIn=(e)=>{
    e.preventDefault();
    fetch('http://localhost:7000/api/v1/users/signin',{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(data)
    }).then((res)=>{
      
      return  res.json()
    }).then((user)=>{
    localStorage.setItem('token',user.Token)
    localStorage.setItem('userId',user.data.id)
    localStorage.setItem('role',user.data.role)
    console.log(user)
    console.log(typeof user.data.id)
    let role=localStorage.getItem('role');
    if(role=='reader'){
      navigate('/user')
    }
    
    if(role=='admin'){
      navigate('/admin')
    }
    
    if(role=='author'){
      navigate('/author')
    }
    

    }).catch(err=>{console.log(err)})
   }
  
    return (
        <div>
          <div className="container">
          <div className="row align-items-center justify-content-center py-5">
          <form action="" className="card shadow p-3 col-8" onSubmit={(e)=>{signIn(e)}}>
           <h3 className='text-center m-2'>Sign In</h3>
           <input type="email" placeholder='Enter email' className='form-control my-2' onChange={(e)=>{setData({...data,email:e.target.value})}} />
           <input type="password" placeholder='Enter Password' className='form-control my-2'  onChange={(e)=>{setData({...data,password:e.target.value})}}/>
           <button className='btn btn-primary'>Sign in</button>
          </form>
    
          </div>
          </div>
        </div>
      )
}
