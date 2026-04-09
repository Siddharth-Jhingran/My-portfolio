import React from 'react'

const Doc = ({setwindowStatus,windowStatus}) => {
  return (
    <footer>
        <div className="icon calender " onClick={()=>{setwindowStatus(windowStatus.Calender ? (status =>({ ...status, Calender: false })):((status =>({ ...status, Calender: true }))))}}><img src="./all_svgs/calender.svg"></img></div>
        <div className="icon github" onClick={()=>{setwindowStatus(windowStatus.Github ? (status =>({ ...status, Github: false })):((status =>({ ...status, Github: true }))))}}><img src="./all_svgs/github.svg" alt="" /></div>
        <div className="icon note"onClick={()=>{setwindowStatus(windowStatus.Notepad ? (status =>({ ...status, Notepad: false })):((status =>({ ...status, Notepad: true }))))}}><img src="./all_svgs/note.svg" alt="" /></div>
        <div className="icon pdf"onClick={()=>{setwindowStatus(windowStatus.Pdf ? (status =>({ ...status, Pdf: false })):((status =>({ ...status, Pdf: true }))))}}><img src="./all_svgs/pdf.svg" alt="" /></div>
        <div className="icon mail" onClick={()=>{window.open("https://mail.google.com/mail/u/0/#inbox?compose=sid@gmail.com", "_blank")}}><img src="./all_svgs/mail.svg" alt="" /></div>
        <div className="icon spotify" onClick={()=>{setwindowStatus(windowStatus.Spotify ? (status =>({ ...status, Spotify: false })):((status =>({ ...status, Spotify: true }))))}}><img src="./all_svgs/spotify.svg" alt="" /></div>
        <div className="icon link"><img src="../../public/all_svgs/link.svg"></img>
        </div>
        <div className="icon cli" onClick={()=>{setwindowStatus(windowStatus.Cli ? (status =>({ ...status, Cli: false })):((status =>({ ...status, Cli: true }))))}}><img src="../../public/all_svgs/cli.svg" alt="" /></div>

    </footer>
  )
}

export default Doc