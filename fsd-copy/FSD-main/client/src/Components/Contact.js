import React from 'react'

export default function Contact() {
  return (
    <div>
        <h2>CONTACT US - </h2>
        <p> </p>
        <textarea id="inputtext" rows="1" cols="60" placeholder="Name"></textarea>
        <p> </p>
        <textarea id="inputtext" rows="1" cols="60" placeholder="Email"></textarea>
        <p> </p>
        <textarea id="inputtext" rows="1" cols="60" placeholder="Phone Number"></textarea>
        <p> </p>
        <textarea id="inputtext" rows="7" cols="60" placeholder="Message"></textarea>
        <p> </p>
        <button type="submit" className="btn btn-primary my-3">Submit</button>
        <p> </p>
        <address background-color='grey'>
        <h4>College contact Info</h4>
        <p> </p>
        <p>Gandipet, Hyderabad, Telangana,</p>
        <p>PIN : 500075</p>
        <p>Phone: 040-24193276</p>
        <p>Mobile: 8466997201</p>
        <p>For Admissions Enquiry: 8466997216</p>
        <p>Email: principal@cbit.ac.in</p>
        </address>
    </div>
  )
}
