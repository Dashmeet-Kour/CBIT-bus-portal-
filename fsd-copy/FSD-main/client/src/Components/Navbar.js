import React from 'react'
import { Link } from "react-router-dom";

export default function Navbar() {
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
            </ul>
        </>
    )
}
