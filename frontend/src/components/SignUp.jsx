import React, { useState } from 'react'

export default function SignUp() {
    const [data,setData]=useState({})

const signUp=(e)=>{
e.preventDefault();
const newUser=new FormData;
newUser.append('name',data.name)
newUser.append('email',data.email)
newUser.append('password',data.password)
fetch('http://localhost:7000/api/v1/users/signup',{
    method:"POST",
    body:newUser
})
}
  return (
    <div>
      <div className="container">
      <div className="row align-items-center justify-content-center py-5">
      <form action="" className="card shadow p-3 col-8" onSubmit={(e)=>{signUp(e)}}>
       <h3 className='text-center m-2'>Sign up</h3>
       <input type="text" placeholder='Enter username' className='form-control my-2' onChange={(e)=>{setData({...data,name:e.target.value})}} />
       <input type="email" placeholder='Enter email' className='form-control my-2' onChange={(e)=>{setData({...data,email:e.target.value})}} />
       <input type="password" placeholder='Enter Password' className='form-control my-2'  onChange={(e)=>{setData({...data,password:e.target.value})}}/>
       <button className='btn btn-primary'>Sign up</button>
      </form>

      </div>
      </div>
    </div>
  )
}
