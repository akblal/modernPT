import React, { useEffect, useState } from 'react'
import axios from 'axios'

const HEPList = ({ selectedDate }) => {

  const [hep, setHEP] = useState([]);
  const [before, setBefore] = useState(false);
  const evalDate = '2023-01-01'

  const getDayHEP = async() => {
    let dayHEP = await axios.get('/getDayHEP', {
      params: {
        date: selectedDate,
        patient_id: 1
      }
    })

    let recentDateHEP = dayHEP.data.rows[0].date;
    console.log(recentDateHEP)
    if (selectedDate.length) {

      //if selected date is earlier than the eval date,
      //return that there is no HEP to return
      if (selectedDate < evalDate) {
        //console.log ('date selected is before eval date')
        setHEP([])
        setBefore(true)
        return
      }
      //if selected date is the late of the most recent HEP update for the patient,
      // or a date after, return the most recent HEP
      if (selectedDate >= recentDateHEP ) {
        //console.log('most recent HEP will be listed')
        let tempHEP = dayHEP.data.rows[0].exercises;
        setHEP(tempHEP)
        setBefore(false)
        return
      }
      //if selected date is later than eval date AND less than the latest date of the updated HEP
      //--> search DB for latest HEP entry on the selected date or prior to the selected date
      if (selectedDate < recentDateHEP && selectedDate > evalDate) {
        try {
          //console.log('search for the hep')
          setHEP([])

          let updatedHEPData = await axios.get('/getAnotherHEP', {
            params: {
              date: selectedDate,
              patient_id: 1
            }
          })

          let updatedHEP = updatedHEPData.data.rows[0].exercises
          setHEP(updatedHEP)
          setBefore(false)
          return
        } catch (err){
          console.log(err, 'err in get another hep')
        }
      }
    }

    console.log (dayHEP, 'these are the results from getHEP')
  }

  useEffect(() => {
    getDayHEP();
  }, [selectedDate])

  return (
    <div >
      <h1>{selectedDate}</h1>
      {hep && hep[0] &&
        hep.map((exerise, index) => {
          return (
            <h1 key= {index}> {exerise.name}</h1>
          )
        })
      }
      {before && <h1>NO hep to display!</h1>}
    </div>
  )
}

export default HEPList