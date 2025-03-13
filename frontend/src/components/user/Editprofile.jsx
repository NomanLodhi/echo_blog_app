import React, { useEffect, useState } from 'react'

export default function Editprofile() {
    const[user,setUser]= useState({})
    const [changes,setChanges]=useState({})
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
        
    const updateUser=(e)=>{
  e.preventDefault();
  if( !changes.name || !changes.password ){
    alert('Knidly enter all info')
  }
 else{
  const newData=new FormData;
  newData.append('name',changes.name)
  newData.append("password",changes.password)
  newData.append('profile',changes.profile)
   fetch(`http://localhost:7000/api/v1/users/${Id}`,{
    method:"PATCH",
    body:newData
   }).then(res=>res.json()).then(data=>console.log(data))
    }
  }
    const Id=localStorage.getItem('userId')
    return (
    <div>
        <form action={`${Id}`} onSubmit={(e)=>{updateUser(e)}} enctype="multipart/form-data">
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
