import React, { useEffect, useState } from 'react'

export default function Userhome() {
 const[user,setUser]= useState('')
  useEffect(()=>{
    const myToken=localStorage.getItem('token')
    fetch('http://localhost:7000/api/v1/users/2c6509f0-f551-11ef-a050-ff412ea75f7f',
      {
        method:"GET",
        headers:{
          'Content-Type':'application/json',
          Authorization:`Bearer ${myToken}`
         }
      }
    ).then((res)=>{
      res.json()

    }).then((data)=>{
      setUser(data)
    })
  },[])
  console.log(user)
  return (
    <div>
      <h1>{user}</h1>
    </div>
  )
}
