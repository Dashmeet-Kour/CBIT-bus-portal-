import React from 'react'
import './Home.css'

export default function Home() {
  return (
    <div >
          <div  id='bg' >
          <div className='Notifi'>
            <h1> <b> Notifications </b> </h1>
            <div className='noti'>
            <ul className='timetablelist'>
              <li><a target="blank" href={"https://drive.google.com/file/d/1KmP2i8j7sNcjiIKt7_mPSE3GQvmBHV29/view?usp=share_link"}>Senior Buses time table</a></li>
              <li><a target="blank" href={"https://drive.google.com/file/d/1bwkxpIpBjTJdmdBTmGbJc9ezmGHLL2fK/view?usp=share_link"}>Bus routes for senior buses</a></li>
              <li><a target="blank" href={"https://drive.google.com/file/d/1OB-ZbANZeUj7UCLgjXipwwJ-kF7pEaen/view?usp=share_link"}>Bus fees circular</a></li>
            </ul>
            </div>
          </div>
        </div>
        
    </div>
  )
}
