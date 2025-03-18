import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Authorreq({allowedRole}) {
const [request,setRequest]=useState({})
const authReq=(e)=>{
   e.preventDefault()
    fetch('http://localhost:7000/api/v1/author/register',{
    method:"POST",
    headers:{'content-type':'application/json'},
    body:JSON.stringify({bio:request.bio,qualification:request.qualification,userId:localStorage.getItem('userId')})
})
localStorage.setItem('role','author')
}

  return allowedRole == localStorage.getItem('role') ? (
    <div className='row justify-content-center py-5'>
        <div className="card shadow col-lg-6 col-sm-8 p-3 col-md-6">
        <h1 className='py-3'>Request to become author:</h1>
        <form action="" onSubmit={(e)=>{authReq(e)}}>
        <input placeholder='Enter your Qualification' className='form-control my-2' onChange={(e)=>{setRequest({...request,qualification:e.target.value})}}/>
        <textarea name="" className='form-control my-2' placeholder='Enter your bio' onChange={(e)=>{setRequest({...request,bio:e.target.value})}} rows={8}></textarea>
        <button className='btn btn-success my-3'>Submit</button>
    </form>
        </div>
    </div>
  ):(
    <Navigate to={'/signin'}/>
  )
}
