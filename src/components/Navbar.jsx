import React from 'react'
import { Link } from 'react-router-dom'
import DateNtime from './DateNtime'

const Navbar = () => {
  return (
   <>
   <nav>
    {/* <div className="links"> */}
        <section>
        <img src="./all_svgs/apple.svg" alt="" />
            <div className="link">Siddharth Jhingran</div >
            <div className="link">File</div >
            <div className="link">Window</div >
            <div className="link">Terminal</div >
        </section>
        <div className="right">

        <img src="./all_svgs/wifi.svg" alt="" />
        <DateNtime></DateNtime>
        </div>
    {/* </div> */}
   </nav>
   
   
   
   </>
  )
}

export default Navbar