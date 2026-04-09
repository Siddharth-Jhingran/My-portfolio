import React, { useState } from 'react'
import Doc from './components/doc'
import Navbar from './components/Navbar'
import Github from './components/Github/Github'
import Notepad from './components/Notepad/Notepad'
import Pdf from './components/PDF/Pdf'
import Spotify from './components/Spotify/Spotify'
import Cli from './components/cli/cli'
import Calendar from './components/Calendar'

export default function App() {

  const [windowStatus, setwindowStatus] = useState({
    Calender:false,
    Notepad:false,
    Github:false,
    Pdf:false,
    Spotify:false,
    Cli:false,
    Doc:false,
  })
  // console.log(windowStatus)
  return (
    <>
      <main>
        <Navbar/>
        {windowStatus.Notepad && <Notepad setwindowStatus={setwindowStatus}/>}
        {windowStatus.Github && <Github setwindowStatus={setwindowStatus}/>}
        {windowStatus.Pdf && <Pdf setwindowStatus={setwindowStatus}/>}
        {windowStatus.Spotify && <Spotify setwindowStatus={setwindowStatus}/>}
        {windowStatus.Cli && <Cli setwindowStatus={setwindowStatus}/>}
        {windowStatus.Calender && <Calendar setwindowStatus={setwindowStatus}/>}
        <Doc setwindowStatus={setwindowStatus} windowStatus={windowStatus}/>
      </main>
    </>
  )
}
