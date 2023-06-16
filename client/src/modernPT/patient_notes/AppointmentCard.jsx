import React from 'react';
import { ImArrowRight2 } from "react-icons/im";

const AppointmentCard = ({ setSelectedNote, setNote, setEditChat, setOption, setMessage, setHoveredNote, noteCard, totalNotes, currentPage, notesPerPage, hoveredNote, selectedNote, index }) => {
  return (
    <div
      className= {selectedNote === noteCard.id ? 'selected-appointment-log-summary-container': 'appointment-log-summary-container'}
      onClick= {() => {
        setSelectedNote(noteCard.id)
        setNote(noteCard)
        setEditChat({});
        setOption('')
        setMessage('')
      }}
      onMouseOver= {() => setHoveredNote(noteCard.id)}
      onMouseOut= {() => setHoveredNote(-1)}>
      <div className= 'appointment-log-left-container'>
        <img className= 'appointment-log-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
      </div>
      <div className=  'appointment-log-right-container'>
        <div className= 'appointment-log-top-right-container'>
          <div className= 'appointment-log-appointment-type'> #{totalNotes - (currentPage - 1) * notesPerPage - index } {noteCard.appointment_type} </div>
          <div className= 'appointment-log-time-stamp'>{new Date(noteCard.date_written).toLocaleString().substring(0, new Date(noteCard.date_written).toLocaleString().indexOf(','))}</div>
        </div>
        <div className= 'appointment-log-bottom-container'>
          <div className= 'appointment-log-reason-container'>
            <div>Reason: Right Knee Pain Knee knee knee </div>
          </div>
          <div className= 'appointment-log-arrow-container'>
            <ImArrowRight2 className= {hoveredNote === noteCard.id && selectedNote != hoveredNote? 'appointment-log-right-arrow bounce' : 'appointment-log-right-arrow hidden-arrow'}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AppointmentCard