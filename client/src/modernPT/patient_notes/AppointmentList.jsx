import React, { useState, useEffect } from 'react';

import AppointmentCard from './AppointmentCard.jsx';

const AppointmentList = ({ note, setNote, currentNotes, totalNotes, currentPage, notesPerPage, setEditChat, setOption, setMessage }) => {


  const [selectedNote, setSelectedNote] = useState(0);
  const [hoveredNote, setHoveredNote] = useState(-1);


  useEffect(() => {
    if (currentNotes.length > 0) {
      setSelectedNote(currentNotes[0].id)
    }
  }, [JSON.stringify(currentNotes)])

  return (
    <div className= 'appointment-log-container'>
      <div className= 'appointment-log-title-container'>
        <div>Appointment List</div>
      </div>
      <div className= 'appointment-list-container'>
        {currentNotes ?
          currentNotes.map((noteCard, index) => {
            return (
              <AppointmentCard key= {noteCard.id} setSelectedNote= {setSelectedNote} setNote= {setNote} setEditChat={setEditChat} setOption= {setOption} setMessage= {setMessage} setHoveredNote= {setHoveredNote} noteCard= {noteCard} totalNotes= {totalNotes} currentPage= {currentPage} notesPerPage= {notesPerPage} hoveredNote= {hoveredNote} selectedNote= {selectedNote} index= {index}/>
            )
          }) :
          null
        }
      </div>
    </div>
  )
}

export default AppointmentList

  //  <div
  //               key= {note.id}
  //               className= {selectedNote === note.id ? 'selected-appointment-log-summary-container': 'appointment-log-summary-container'}
  //               onClick= {() => {
  //                 setSelectedNote(note.id)
  //                 setNote(note)
  //                 setEditChat({});
  //                 setOption('')
  //                 setMessage('')
  //               }}
  //               onMouseOver= {() => setHoveredNote(note.id)}
  //               onMouseOut= {() => setHoveredNote(-1)}>
  //               <div className= 'appointment-log-left-container'>
  //                 <img className= 'appointment-log-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
  //               </div>
  //               <div className=  'appointment-log-right-container'>
  //                 <div className= 'appointment-log-top-right-container'>
  //                   <div className= 'appointment-log-appointment-type'> #{totalNotes - (currentPage - 1) * notesPerPage - index } {note.appointment_type} </div>
  //                   <div className= 'appointment-log-time-stamp'>{new Date(note.date_written).toLocaleString().substring(0, new Date(note.date_written).toLocaleString().indexOf(','))}</div>
  //                 </div>
  //                 <div className= 'appointment-log-bottom-container'>
  //                   <div className= 'appointment-log-reason-container'>
  //                     <div>Reason: Right Knee Pain Knee knee knee </div>
  //                   </div>
  //                   <div className= 'appointment-log-arrow-container'>
  //                     <ImArrowRight2 className= {hoveredNote === note.id && selectedNote != hoveredNote? 'appointment-log-right-arrow bounce' : 'appointment-log-right-arrow hidden-arrow'}/>
  //                   </div>
  //                 </div>
  //               </div>
  //             </div>
