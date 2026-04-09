import React from 'react'
import { Link } from 'react-router-dom'
import DateNtime from './DateNtime'

const Navbar = ({ setwindowStatus, windowStatus }) => {
  return (
   <>
   <nav>
    {/* <div className="links"> */}
        <section>
        <img src="./all_svgs/apple.svg" alt="" />
            <div className="link">Siddharth Jhingran</div >
            <div className="link" onClick={()=>{setwindowStatus(windowStatus.Pdf ? (status =>({ ...status, Pdf: false })):((status =>({ ...status, Pdf: true }))))}}>File</div >
            <div className="link" onClick={()=>{setwindowStatus(windowStatus.Spotify ? (status =>({ ...status, Spotify: false })):((status =>({ ...status, Spotify: true }))))}}>Window</div >
            <div className="link" onClick={()=>{setwindowStatus(windowStatus.Cli ? (status =>({ ...status, Cli: false })):((status =>({ ...status, Cli: true }))))}}>Terminal</div >
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