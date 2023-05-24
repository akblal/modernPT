import React, { useState } from 'react';
import { ImArrowRight2 } from "react-icons/im";

const AppointmentLog = ({ setNote, currentNotes, totalNotes, currentPage, notesPerPage }) => {


  const [selectedNote, setSelectedNote] = useState(0);
  const [hoveredNote, setHoveredNote] = useState(-1);

  return (
    <div className= 'appointment-log-container'>
      <div className= 'appointment-log-title-container'>
        <div>Appointment Log</div>
      </div>
      <div className= 'appointment-list-container'>
        {currentNotes ?
          currentNotes.map((note, index) => {
            return (
              <div
                key= {note.id}
                className= {selectedNote === index ? 'selected-appointment-log-summary-container': 'appointment-log-summary-container'}
                onClick= {() => {
                  setSelectedNote(index)
                  setNote(index)
                }}
                onMouseOver= {() => setHoveredNote(index)}
                onMouseOut= {() => setHoveredNote(-1)}>
                <div className= 'appointment-log-left-container'>
                  <img className= 'appointment-log-therapist-picture-container' src= {note.therapist_profile_pic}>
                  </img>
                </div>
                <div className=  'appointment-log-right-container'>
                  <div className= 'appointment-log-top-right-container'>
                    <div className= 'appointment-log-appointment-type'> #{totalNotes - (currentPage - 1) * notesPerPage - index } {note.appointment_type} </div>
                    <div className= 'appointment-log-time-stamp'>{new Date(note.date_written).toLocaleString().substring(0, new Date(note.date_written).toLocaleString().indexOf(','))}</div>
                  </div>
                  <div className= 'appointment-log-bottom-container'>
                    <div className= 'appointment-log-reason-container'>
                      <div>Reason: Right Knee Pain Knee knee knee </div>
                    </div>
                    <div className= 'appointment-log-arrow-container'>
                      <ImArrowRight2 className= {hoveredNote === index && selectedNote != hoveredNote? 'appointment-log-right-arrow bounce' : 'appointment-log-right-arrow hidden-arrow'}/>
                    </div>
                  </div>
                </div>
              </div>
            )
          }) :
          null
        }
      </div>


    </div>
  )
}

export default AppointmentLog

/*the visit count will be determined by the position in the array
ex. [{1}, {2}, {3}]

appointment listing 3 will be visit 3
appointment listing 2 will be visit 2
appointment listing 1 will be visit 1
*/
