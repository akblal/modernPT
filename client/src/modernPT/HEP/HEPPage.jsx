import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../Header.js'
import HEPCalendar from './HEPCalendar.jsx'
import HEPList from './HEPList.jsx'

const HEPPage = () => {

  const [date, setDate] = useState(new Date());
  const [stringDate, setStringDate] = useState('');
  const [currDate, setCurrDate] = useState();

  const getCurrTime = () => {
    const time = new Date().toString();
    let month = time.substring(4,7)
    const day = time.substring(8,10)
    const year = time.substring(11,15)

    switch (month) {
      case 'Jan':
        month = "01";
        break;
      case 'Feb':
        month = "02";
        break;
      case 'Mar':
        month = "03";
        break;
      case 'Apr':
        month = "04";
        break;
      case 'May':
        month = "05";
        break;
      case 'Jun':
        month = "06";
        break;
      case 'Jul':
        month = "07";
        break;
      case 'Aug':
        month = "08";
        break;
      case 'Sep':
        month = "09";
        break;
      case 'Oct':
        month = "10";
        break;
      case 'Nov':
        month = "11";
        break;
      case 'Dec':
        month = "12";
        break;
    }

    const date = year + '-' + month + '-' + day
    setCurrDate(date)
    // console.log(date, 'this is the time')
  }

  useEffect(() => {
    getCurrTime()
    setInterval(getCurrTime, 5*1000)
  }, [stringDate])

  return (
    <div className= 'app-container'>
      <Header />
      <div className= 'hep-page-container'>
        <div className= 'hep-calendar-container'>
          <HEPCalendar date= {date} setDate= {setDate} setStringDate= {setStringDate}/>
        </div>

        <div className= 'hep-adherence-container'>
          <HEPList selectedDate= {stringDate} currDate= {currDate}/>
        </div>
      </div>
    </div>

  )
}

export default HEPPage