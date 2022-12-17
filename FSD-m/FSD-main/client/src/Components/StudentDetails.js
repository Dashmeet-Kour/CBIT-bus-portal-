import React from 'react'

export const StudentDetails = () => {

    const data = JSON.parse(localStorage.getItem("CBIT")) 
    console.log(data)

  return (
   <>
{data &&
<div className="userdetails d-flex justify-content-center mt-5">
    <div style = {{width:"40%",backgroundColor:"silver",textAlign:'start',border:"1px solid gold"}} className="card shadow py-4 px-5">
    <h4>Username: <span>{data.username}</span></h4>
    <br />
    <h4>Roll No: <span>{data.rollno}</span></h4>
    <br />
    <h4>Bus No: <span>{data.busno}</span> </h4>
    <br />
    <h4>payment Status: <span>{data.paymentstatus=true?"your fees is paid":"payment is not done"}</span></h4>
    <br />
    <h4>Year: <span>{data.year=3?"3rd year":data.year=2?"2nd year":data.year=4?"4th year":"1st year"}</span></h4>
    </div>

</div>
}
   </>
  )
}
