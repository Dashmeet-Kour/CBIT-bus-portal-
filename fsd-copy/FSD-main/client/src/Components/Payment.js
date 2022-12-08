import React from 'react'

export default function Payment() {
  return (
    <div classNameName='pay'>
        <div className="form-group row">
          <h3>Welcome to Payment Site</h3>
          <p>To check payment status - </p>
    <div className="col-sm-14">
      <input type="text" className="form-control" id="inputroll" placeholder="Enter Roll Number" />
    </div>
    </div>
    <button type="submit" className="btn btn-primary my-3">Enter</button>
    </div>
  )
}
