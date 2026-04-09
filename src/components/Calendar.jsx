import React from 'react'
import Macwindow from './Macwindow/Macwindow'


const Calendar = () => {
  return (<Macwindow>

        <div className='calendar'><iframe src="https://calendar.google.com/calendar/embed?src=iframely.embeds%40gmail.com" allowfullscreen></iframe></div>


  </Macwindow>
  )
}

export default Calendar