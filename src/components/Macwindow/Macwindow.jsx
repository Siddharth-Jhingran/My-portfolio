import React from 'react'
import { Rnd } from 'react-rnd'
import './Mac.scss'

const Macwindow = ({children}) => {
  return (

    <Rnd className='drager'
      default={{

        width: "47vw",
        height: "66vh",
        x: "200",
        y: "100"
      }}
    >
      <div className="window">
        <div className="nav">
          <div className="red"><p>x</p></div>
          <div className="yellow"><p>-</p></div>
          <div className="green"><p>□</p></ div>
        </div>
        <div className="content">
          {children}
        </div>
      </div>
    </Rnd>

    // </>
  )
}

export default Macwindow