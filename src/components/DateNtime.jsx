import React, { useState, useEffect } from 'react'

const DateNtime = () => {
    const [dateTime, setDateTime] = useState(new Date())

    useEffect(() => {
        const timer = setInterval(() => {
            setDateTime(new Date())
        }, 1000)

        return () => clearInterval(timer)
    }, [])

    const formatDateTime = (date) => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

        const dayName = days[date.getDay()]
        const monthName = months[date.getMonth()]
        const dateNum = date.getDate()
        const year = date.getFullYear()

        let hours = date.getHours()
        const minutes = String(date.getMinutes()).padStart(2, '0')
        const seconds = String(date.getSeconds()).padStart(2, '0')
        const ampm = hours >= 12 ? 'PM' : 'AM'

        hours = hours % 12
        hours = hours ? hours : 12

        return `${dayName} ${monthName} ${dateNum} ${hours}:${minutes} ${ampm}`
    }                          //i can add here ${year}   & here :${seconds}

    return (
        <div>
            {formatDateTime(dateTime)}
        </div>
    )
}

export default DateNtime