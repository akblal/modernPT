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