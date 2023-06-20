import React from 'react'

const TherapistNoteHeader = ({ note }) => {
  return (
    <div className= 'individual-note-header'>
      <div className= 'individual-note-visit-information-container'>
        <div>Therapist's Name:{note.therapist_name} </div>
        <div>Visit Number: {note.id}, Date Time</div>
        <div>Reason for Visit:</div>
      </div>
      <div className= 'therapist-patient-pic-container'>
        <img className= 'individual-note-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
        <img className= 'individual-note-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
      </div>
    </div>
  )
}

export default TherapistNoteHeader