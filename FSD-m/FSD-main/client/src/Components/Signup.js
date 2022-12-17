import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Signup.css"
import axios from "axios"
import swal from 'sweetalert'
export const Signup = () => {

    const [data,setData] = useState({
        username:"",
        rollno:"",
        busno:"",
        paymentstatus:"payment status",
        year:""
    })

const handleSubmit= async(e)=>{
    e.preventDefault()
await axios.post("/api/auth/signup",data).then((res)=>{
    console.log(res)
    setData({
        username:"",
        rollno:"",
        busno:"",
        paymentstatus:"payment status",
        year:""
    })
    swal("Signup Successfull","Congratulations","success")
}).catch((error)=>{
  swal(error.response.data,"","error")
})
}

const setForm = async(e)=>{
    setData({ ...data, [e.target.name]: e.target.value });
}
function showPassword() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }

console.log(data)

  return (
<>
<div className="form-content wel-bg sign-logo">
              <h2>Hello!</h2>
              <div className="form-main">
                <form
                  onSubmit={handleSubmit}
                  encType="Application/json"
                  autoComplete="new-password"
                  className="form-floating mb-3 registerform"
                >
                  <div className="form-floating"></div>
                  <div className="form-floating mb-2">
                    <input
                      name="username"
                      value={data.username}
                      onChange={setForm}
                      type="text"
                      required
                      className="form-control"
                      autoComplete="off"
                    />
                    <label htmlFor="floatingInput">UserName</label>
                  </div>
                  <div className="form-floating mb-2">
                    <input
                      onChange={setForm}
                      type="number"
                      name="rollno"
                      required
                      value={data.rollno}
                      className="form-control"
                      autoComplete="new-password"
                    />
                    <label htmlFor="floatingInput">Roll No</label>
                  </div>
                  <div className="form-inner fom-btn">
                    <div className="form-floating mb-2">
                      <input
                        name="busno"
                        onChange={setForm}
                        value={data.busno} 
                        required
                        type="Number"
                        className="form-control"
                        autoComplete="new-password"
                        pattern="[0-9]{10}"
                        aria-describedby="emailHelp"
                      />
                      <small id="emailHelp" className="form-text text-muted"></small>
                      <label htmlFor="floatingInput">Bus Number</label>
                    </div>
 
                  </div>

                  <div className="form-inner fom-btn">
                  
                  <div className="form-floating mb-2">
                    <select
                      name="paymentstatus"
                      defaultValue={data.paymentstatus}
                      onChange={setForm}
                      className="form-select"
                      aria-label="Floating label select example"
                      value={data.paymentstatus}
                      autoComplete="new-password"
                      style={{ border: "1px solid" }}
                    >
                      <option value =  "payment status" disabled>Payment Status</option>
                      <option value = "true">True</option>
                      <option value = "false">False</option>
              
                    </select>
                    <label htmlFor="floatingSelect">Payment Status</label>
                  </div>

          </div>


                  <div className="form-inner fom-btn">
                    <div className="form-floating mb-2">
                      <input
                        onChange={setForm}
                        name="year"
                        value={data.year}
                        required
                        type="number"
                        className="form-control"
                        autoComplete="new-password"
                      />
                      <label htmlFor="floatingInput">Year</label>
                    </div>
{/* 
                    <div className="form-floating">
                      <select
                        name="gender"
                        onChange={setForm}
                        className="form-select"
                        aria-label="Floating label select example"
                        value={gender}
                        autoComplete="new-password"
                        style={{ border: "1px solid" }}
                      >
                        <option>select gender</option>
                        <option>Male</option>
                        <option>Female</option>
                
                      </select>
                      <label htmlFor="floatingSelect">Gender (Optional)</label>
                    </div> */}
                  </div>

       
                  <div className="fom-btn mb-3 mt-3">
                    <button
                      style={{ backgroundColor: "green", color: "black" }}
                    //   disabled={errorMessage === "Password is less 8 than"}
                      type="submit"
                      id = "loginhover"
                      className="btn btn-outline-secondary"
                    >
                      SignUp
                    </button>
                  </div>
                </form>
              </div>
              {/* <p>
                By signing up, I agree to the{" "}
                <Link to="/terms-and-conditions">
                  <span>Terms and conditions and Privacy policy</span>
                </Link>
              </p> */}
            </div>
</>
    )
}
