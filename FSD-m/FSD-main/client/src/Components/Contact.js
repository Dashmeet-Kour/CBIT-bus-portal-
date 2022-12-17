import axios from 'axios'
import React, { useState } from 'react'
import swal from 'sweetalert'
import "./Contact.css"

export default function Contact() {
const [data,setData] = useState({
  name:"",
  email:"",
  phoneno:"",
  message:""
})
const handlechange = (e)=>{
setData({...data,[e.target.name]:e.target.value})
}
const handlesubmit = async(e)=>{
e.preventDefault()
await axios.post("/api/auth/contactinfo",data).then((res)=>{
  swal(res.data,"","success")
}).catch((error)=>{
  swal(error.response.data,"","error")
})
}
console.log(data)
  return (
    <>
      <div className="mainimg">
      <img className='Statue' src='https://www.cbit.ac.in/wp-content/uploads/2019/01/about.jpg' width={100} ></img>

      </div>
    <div className ="flexcontact">
  <div className="contactcol">
        <h2>CONTACT US - </h2>
<p></p>
<br />
<form className='contactform' onSubmit={handlesubmit} action="">
        <input required type="text" name="name" onChange={handlechange} id="inputtext" placeholder="Name"></input>
        <p> </p>
        <input required type="email" name = "email" onChange={handlechange} id="inputtext"  placeholder="Email"></input>
        <p> </p>
        <input required type="text" name = "phoneno" onChange={handlechange} id="inputtext"  maxlength="10" placeholder="Phone Number"/>
        <p> </p>
        <textarea required name = "message" onChange={handlechange} id="inputtext" rows="7" cols="60" placeholder="Message"></textarea>
        <p> </p>
        <div>
        <button type="submit" className="btn btn-primary my-1 px-3">Submit</button>
        </div>
        <p> </p>
</form>
  </div>
  <div style = {{textAlign:"start"}} className="addresscol">
        <h2>College Address</h2>
        <address>
        <p>Chaitanya Bharathi Institute of Technology,</p>
        <p>Gandipet, Hyderabad, Telangana,</p>
        <p>PIN : 500075</p>
        <p>Phone: 040-24193276</p>
        <p>Mobile: 8466997201</p>
        <p>For Admissions Enquiry: 8466997216</p>
        <p>Email: principal@cbit.ac.in</p>
        </address>
  </div>
    </div>
    </>
  )
}
