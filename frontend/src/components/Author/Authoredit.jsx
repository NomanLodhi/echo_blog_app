import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Authoredit() {
    const ID=localStorage.getItem('userId')
    const [user,setUser]=useState({})
     useEffect(()=>{
        fetch(`http://localhost:7000/api/v1/admin/author/${ID}`)
        .then(res=> res.json())
        .then(data=>setUser(data))
     },[])
  return(
    <form>
  <div className="mb-3">
    <label  className="form-label">Name</label>
    <input type="text" className="form-control" defaultValue={user.data && user.data.name}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Qualification</label>
    <input type="text" className="form-control" defaultValue={user.data && user.data.qualification}/>
  </div>
  <div className="mb-3">
    <label  className="form-label">Bio</label>
     <textarea className='form-control' defaultValue={user.data && user.data.bio}></textarea>
  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
