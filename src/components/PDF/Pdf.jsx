import React from 'react'
import Macwindow from '../Macwindow/Macwindow'
import './pdf.scss'

const Pdf = () => {
  return (
    <>
      <Macwindow x="500">
        <div className="resume">
        <embed src="/public/SID_RESUME.pdf" frameborder="0"></embed>
        </div>
      </Macwindow>

    </>
  )
}

export default Pdf