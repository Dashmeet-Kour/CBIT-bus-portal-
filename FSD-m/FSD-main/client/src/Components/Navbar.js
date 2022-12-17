import React from 'react'
import { Link,useNavigate } from "react-router-dom";
import profile from "../images/Profile.png"
import logo from "../images/logo.jpg"
export default function Navbar() {
const navigate = useNavigate()
    const data = JSON.parse(localStorage.getItem("CBIT"))
    const logout = ()=>{
      localStorage.removeItem("CBIT")
      navigate("/")
    }
    return (
        <>
            <ul className="nav nav-pills nav-fill">
                <li className="nav-item ">
                    <Link className="nav-a" to="/">Home</Link>
                </li>
                <li className="nav-item ">
                    <Link className="nav-a"  to="/About">About-Us</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-a " to="/Payment">Payment</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-a" to="/Contact">Contact</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-a" to='/FeedBack'>FeedBack</Link>
                </li>
                <li className="nav-item">
            
                    <Link className="nav-a" to="/Login">Login</Link>
                </li>

                <li className="nav-item">
            <img style={{width:"34px"}} src={logo} alt="" />
                </li>
                {
data&&
                    <>
                
                    <div>
                <li  className="nav-item">
                    <Link style={{backgroundColor:"white",color:'black',fontSize:"14px"}} className="nav-a px-1" to="/studentinfo">Welcome {data.username} ({data.rollno})
                    </Link>
                    <img style = {{width:"38px",height:"40px"}} src={profile} alt="profileimage" />
                </li>
                                <li onClick={logout} className="nav-item">
                    <Link className="nav-a" to="/Login">Logout</Link>
                </li>
                    </div>
                    </>
                }
            </ul>
        </>
    )
}
