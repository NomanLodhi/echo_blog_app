import React, { useEffect, useState } from 'react'
import userImg from '../media/user.png'
import { Link } from 'react-router-dom'
export default function Adminauthor() {
    const [author,setAuthor]=useState({data:[]})
    useEffect(()=>{
        fetch('http://localhost:7000/api/v1/admin/authors')
        .then(res=>res.json())
        .then(data=>setAuthor(data))
    },[])
    const deleteAuthor=(e)=>{
        const confirmDelete= window.confirm('Do you want to delete author?')
        if(confirmDelete){
            fetch(`http://localhost:7000/api/v1/admin/author/${e}`,{
                method:'DELETE'
            })
          
        }
        else{
            alert('Not delted')
        }
    }
  return (
    <div>
        <div className="row py-5">

    {
        author.data && author.data.map(auth=>(
            <div className='col-lg-4 col-md-6'>
        <div className="card rounded-0" style={{width: '18rem'}}>
  {auth.user.profile == null ? <img src={userImg} className="card-img-top rounded-0" alt="..." /> :
  <img src={`http://localhost:7000/files/${auth.user.profile}`}  style={{height:300,objectFit:'cover'}} className="card-img-top rounded-0" alt="..." />}
  <div className="card-body">
    <h5 className="card-title">{auth.user.name}</h5>
    <p className="card-text"><span className='fw-bold'>Email : </span> {auth.user.email}</p>
    <Link to={`${auth.user.id}`} className="btn btn-primary rounded-0">Edit Qualification</Link>
    <button  className="btn btn-danger rounded-0" onClick={()=>{deleteAuthor(auth.user.id)}}>Delete</button>
  </div>
</div>

            </div>
        ))
    }  
    </div>
    </div>
  )
}
