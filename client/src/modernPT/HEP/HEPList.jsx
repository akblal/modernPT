import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Exercise from './Exercise.jsx'

const HEPList = ({ selectedDate, currDate }) => {

  const [hep, setHEP] = useState([]);
  const [before, setBefore] = useState(false);
  const [after, setAfter] = useState(false);
  const evalDate = '2023-06-30'

  const getLatestHEP = async() => {
    try {

      //dsyHEP returns data of the most recently inputted HEP into the hep table
      let dayHEP = await axios.get('/getLatestHEP', {
        params: {
          date: selectedDate,
          patient_id: 1
        }
      })

      let recentDateHEP = dayHEP.data.rows[0].date;
      if (selectedDate.length) {

        //if selected date is earlier than the eval date,
        //return that there is no HEP to return
        if (selectedDate < evalDate) {
          //console.log ('date selected is before eval date')
          setHEP([])
          setBefore(true)
          setAfter(false)
          return
        }

        //if selected date is the late of the most recent HEP update for the patient,
        // or a date after, return the most recent HEP
        if (selectedDate >= recentDateHEP && selectedDate <= currDate) {
          // console.log('most recent HEP will be listed')
          let tempHEP = dayHEP.data.rows[0].exercises;
          // console.log(tempHEP, 'hep')
          setHEP(tempHEP)
          setBefore(false)
          setAfter(false)
          return
        }

        //if the selected date is a future date,
        //setAfter (which is boolean and determines if date is within present time period)
        if (selectedDate > currDate) {
          //console.log('most recent HEP will be listed')
          let tempHEP = dayHEP.data.rows[0].exercises;
          // console.log(tempHEP, 'hep')
          setHEP(tempHEP)
          setBefore(false)
          setAfter(true)
          console.log('selected date after curr date')
          return
        }

        //if selected date is later than eval date AND less than the latest date of the updated HEP
        //--> search DB for latest HEP entry on the selected date or prior to the selected date
        if (selectedDate < recentDateHEP && selectedDate >= evalDate) {
          /*
            getHEPOnSelectedDate = axios.get...
            if (getHEPOnSelectedDate returns a valid HEP)
              set the hep to getHEPOnSelectedDate
            else
              updatedHEPData....
              insert HEP into DB
          */

          try {
            //console.log('search for the hep')
            setHEP([])

            let selectDayHEPData = await axios.get('/getHEPOnSelectedDate', {
              params: {
                date: selectedDate,
              }
            })
            let selectedDayHEP = selectDayHEPData.data
            // console.log(selectedDayHEP, 'selectedDayHEP')

            if (selectedDayHEP && selectedDayHEP.length) {
              // console.log('hep already in postgres')
              // console.log(selectedDayHEP[0].exercises, 'hep, already in postgres')
              setHEP(selectedDayHEP[0].exercises)
            } else {
              // console.log('no hep in postgres. need to add it in')
              let updatedHEPData = await axios.get('/getLatestHEPBeforeDate', {
                params: {
                  date: selectedDate,
                  patient_id: 1
                }
              })
              // console.log(updatedHEPData)
              let updatedHEP = updatedHEPData.data.rows[0].exercises
              // console.log(updatedHEP, 'hep, need to add into postgres')
              setHEP(updatedHEP)

              let addHEPData = await axios.post('/updateHEPOnSelectedDate', {
                patient_id: 1,
                date: selectedDate,
                exercises: JSON.stringify(updatedHEP),
                completed: false
              })
            }
            setBefore(false)
            setAfter(false)
            return
          } catch (err){
            console.log(err, 'err in get another hep')
          }
        }
      }
      // console.log (dayHEP, 'these are the results from getHEP')
    } catch (err) {
      console.log('err in getLatestHEP')
    }

  }

  useEffect(() => {
    getLatestHEP();
  }, [selectedDate])

  return (
    <div className= 'hep-page-exercise-list-container'>
      <h1>number of exercise/{hep.length} completed!</h1>
      {hep && hep[0] &&
        hep.map((exercise, index) => {
          return (
            <Exercise key= {index} exercise= {exercise}/>
          )
        })
      }
      {before && <h1>NO hep to display!</h1>}
    </div>
  )
}

export default HEPList