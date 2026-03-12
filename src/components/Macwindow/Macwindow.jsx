import React from 'react'
import { Rnd } from 'react-rnd'
import './Mac.scss'

const Macwindow = ({children, height="66vh", width="47vw",x="250",y="100"}) => {
  return (

    <Rnd className='drager'
      default={{

        width: width,
        height: height,
        x: x,
        y: y,
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