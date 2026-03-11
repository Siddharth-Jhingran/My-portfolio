import React from 'react'
import Doc from './components/doc'
import Navbar from './components/Navbar'
import Github from './components/github/Github'
import Notepad from './components/Notepad/Notepad'
import Pdf from './components/PDF/Pdf'
import Spotify from './components/Spotify/Spotify'

export default function App() {
  return (
    <>
      <main>
        <Navbar></Navbar>
        <Github></Github>
        <Notepad></Notepad>
        <Spotify></Spotify>
        <Pdf></Pdf>
        <Doc></Doc>
      </main>
    </>
  )
}
