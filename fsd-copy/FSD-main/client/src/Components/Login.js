import React from 'react'

export default function Login() {
  return (
    <div>
      <form>
        <div className="form-group my-5">
          <label for="exampleInputEmail1">USERNAME</label>
          <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Username" />
          <small id="emailHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">PASSWORD</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
        </div>
        <button type="submit" className="btn btn-primary my-3">Submit</button>
      </form>
    </div>
  )
}
