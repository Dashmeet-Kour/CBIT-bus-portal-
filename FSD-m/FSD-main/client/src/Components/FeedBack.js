import axios from 'axios';
import React, { useState } from 'react'
import swal from 'sweetalert';

export default function FeedBack() {
  const [data,setData] = useState({
    rollno:"",
    feedback:""
  })
  const handlechange = (e)=>{
    setData({ ...data, [e.target.name]: e.target.value });
  }
  const handleSubmit = async(e)=>{
    e.preventDefault()
    await axios.post("/api/auth/feedback",data).then((res)=>{             
      setData({
        rollno:"",
        feedback:""
      })
      swal(res.data,"","success")
    }).catch((error)=>{
      swal(error.response.data,"","error")
    })
  }
  return (
    <div>
        <div className="container my-5">
          <form onSubmit={handleSubmit} action="" className='feedbackform'>

         <input onChange={handlechange} name = "rollno" value={data.rollno} type = "number" id="inputtext" placeholder="Roll No "></input>
         <p></p>
            <textarea onChange={handlechange} name = "feedback" value={data.feedback} id="inputtext" rows="7" cols="70" placeholder="Write your FeedBack"></textarea>
            <p> </p>
            <button type="submit" className="btn btn-primary my-3">Send</button>
          </form>
        </div>
    </div>
  )
}
