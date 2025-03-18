import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Adminauthoredit() {
    const[author,setAuthor]=useState({})
    const[change,setChange]=useState({})
    const {authorId}=useParams();
    useEffect(()=>{
        fetch(`http://localhost:7000/api/v1/admin/author/${authorId}`)
        .then(res=>res.json())
        .then(data=>setAuthor(data))
    },[])
  
    const editAuthor=(e)=>{
        e.preventDefault();
        if(!change.qualification || !change.bio){
            alert('No changes found')
        }
        else{
            fetch(`http://localhost:7000/api/v1/admin/author/${author.data.id}`,{
                method:'PATCH',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({qualification:change.qualification,bio:change.bio})
            })
            alert('Úpdated')
        }
    }
    return (
    <div>
      {
         <form className='my-3' onSubmit={(e)=>{editAuthor(e)}}>
         
         <div className="mb-3">
           <label  className="form-label">Qualification</label>
           <input type="text" className="form-control" defaultValue={author.data && author.data.qualification} onChange={(e)=>{setChange({...change,qualification:e.target.value})}}/>
         </div>
         <div className="mb-3">
           <label  className="form-label">Bio</label>
            <textarea className='form-control' onChange={(e)=>{setChange({...change,bio:e.target.value})}} rows={8} defaultValue={author.data && author.data.bio}></textarea>
         </div>
         
         <button type="submit" className="btn btn-primary">Submit</button>
       </form>
      }
    </div>
  )
}
