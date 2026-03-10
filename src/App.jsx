import React from 'react'
import Doc from './components/doc'
import Navbar from './components/Navbar'
import Macwindow from './components/Macwindow/Macwindow'

export default function App() {
  return (
    <>
    <main>
  <Navbar></Navbar>
  <Macwindow></Macwindow>
    <Doc></Doc>
    </main>
    </>
  )
}
