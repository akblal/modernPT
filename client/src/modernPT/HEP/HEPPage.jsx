import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../Header.js'
import HEPCalendar from './HEPCalendar.jsx'
import HEPList from './HEPList.jsx'

const HEPPage = () => {

  const [date, setDate] = useState(new Date());
  const [stringDate, setStringDate] = useState('');

  // const getHEP = async() => {
  //   try {
  //     const data = await axios.get(`/getHEP/${1}`)
  //   }
  //   catch(err) {
  //     console.log(err, 'err in HEPPage getHEP request')
  //   }
  // }

  // useEffect(() =>{
  //   getHEP()
  // }, [date])

  return (
    <div className= 'app-container'>
      <Header />
      <div className= 'hep-page-container'>
        <div className= 'hep-calendar-container'>
          <HEPCalendar date= {date} setDate= {setDate} setStringDate= {setStringDate}/>
        </div>

        <div className= 'hep-adherence-container'>
          <HEPList selectedDate= {stringDate} />
        </div>
      </div>
    </div>

  )
}

export default HEPPage