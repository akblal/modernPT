import React, { useEffect, useState } from 'react'
import axios from 'axios'

import Header from '../Header.js'
import HEPCalendar from './HEPCalendar.jsx'



const HEPPage = () => {
  //filter throught patient_note schema --> hep_update --> status === "added"
    //put all exesrcises into an array
    //remove duplicates (sort by latest entry of HEP)
      //https://fullstackheroes.com/tutorials/javascript/5-ways-to-remove-duplicate-objects-from-array-based-on-property/
  //OR
  //add hep column to patient table which has the accumulation of HEP per patient

  const [date, setDate] = useState(new Date());

  const getHEP = async() => {
    try {
      const data = await axios.get(`/getHEP/${1}`)
      // console.log(data, 'in get HEP')
    }
    catch(err) {
      console.log(err, 'err in HEPPage getHEP request')
    }
  }

  useEffect(() =>{
    getHEP()
  }, [date])

  return (
    <div className= 'app-container'>

      <Header />
      <div className= 'hep-page-container'>
        <div className= 'hep-calendar-container'>
          <HEPCalendar date= {date} setDate= {setDate}/>
        </div>

        <div className= 'hep-adherence-container'>
          Right Side
        </div>
      </div>
    </div>

  )
}

export default HEPPage