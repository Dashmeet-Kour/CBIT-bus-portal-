import React from 'react'

export default function FeedBack() {
  return (
    <div>
        <div className="container my-5">
         <textarea id="inputtext" rows="1" cols="70" placeholder="Roll No "></textarea>
         <p></p>
            <textarea id="inputtext" rows="7" cols="70" placeholder="Write your FeedBack"></textarea>
            <p> </p>
            <button type="submit" className="btn btn-primary my-3">Send</button>
        </div>
    </div>
  )
}
