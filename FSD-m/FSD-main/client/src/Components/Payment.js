import React, { useState } from 'react'
import swal from 'sweetalert'
import "./Payment.css"

export default function Payment() {

  const [data,setData] = useState({
    rollno:"",
    cardno:"",
    expiry:"",
    cvv:""
  }
  )
const paymentSuccess = (e)=>{
  e.preventDefault()
  swal("Payment Successfull","Congratulations","success")
}
const handlechange = (e)=>{
  setData({...data,[e.target.name]:e.target.value})
}

  return (
<div className="container">
<div className="row justify-content-center">
<div className="col-xs-12 col-md-4 col-lg-6">
<div className="panel panel-default credit-card-box">
<div className="panel-heading display-table" >
<div className="row display-tr" >
<h3 className="panel-title display-td" >Payment Details</h3>
<div className="display-td" >                            
{/* <img className="img-responsive pull-right" src="http://i76.imgup.net/accepted_c22e0.png"/> */}
</div>
</div>                    
</div>
<div className="panel-body textleft">
<form onSubmit={paymentSuccess} role="form" id="payment-form">
<div className="row">
<div className="col-xs-12">
<div className="form-group">

<label htmlFor="cardNumber">Roll No</label>
<div className="input-group">
<input 
onChange={handlechange}
value={data.rollno}
type="tel"
className="form-control"
name="rollno"
placeholder="Roll No"
autoComplete="cc-number"
required 
/>
</div>

<label htmlFor="cardNumber">CARD NUMBER</label>
<div className="input-group">
<input 
onChange={handlechange}
value={data.cardno}
type="tel"
pattern="[0-9\s]{13,19}"
inputmode="numeric"
className="form-control"
name="cardno"
placeholder="xxxx xxxx xxxx xxxx"
maxlength="19"
autoComplete="cc-number"
required 
/>
<span className="input-group-addon"><i className="fa fa-credit-card"></i></span>
</div>
</div>                            
</div>
</div>
<div className="row">
<div className="col-xs-7 col-md-7">
<div className="form-group ">
<label htmlFor="cardExpiry"><span className="hidden-xs">EXPIRATION </span>DATE</label>
<input 
onChange={handlechange}
value={data.expiry}
type="tel" 
className="form-control" 
name="expiry"
placeholder="MM / YY"
autoComplete="cc-exp"
required 
/>
</div>
</div>
<div className="col-xs-5 col-md-5 pull-right">
<div className="form-group">
<label htmlFor="cardCVC">CVV CODE</label>
<input 
onChange={handlechange}
value = {data.cvv}
type="tel" 
className="form-control"
name="cvv"
placeholder="CVC"
autoComplete="cc-csc"
required
/>
</div>
</div>
</div>
{/* <div className="row">
<div className="col-xs-12">
<div className="form-group">
<label htmlFor="couponCode">COUPON CODE</label>
<input type="text" className="form-control" name="couponCode" />
</div>
</div>                        
</div> */}
<div className="row mt-2">
<div className="col-xs-12">
<button  className="btn btn-success btn-lg btn-block" type="submit">Pay Fees</button>
</div>
</div>
<div className="row" style={{display:'none'}}>
<div className="col-xs-12">
<p className="payment-errors"></p>
</div>
</div>
</form>
</div>
</div>            


</div>            



</div>
</div>

  )
}
