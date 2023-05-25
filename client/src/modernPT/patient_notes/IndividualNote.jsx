import React from 'react';

const IndividualNote = ({ note }) => {

  if (note) {
    console.log(note, 'individual note')
  }

  return (
    <div className= 'individual-note-container'>
      <div className= 'individual-note-header'>
        <div className= 'individual-note-visit-information-container'>
          <div>Therapist's Name:</div>
          <div>Visit Number: </div>
          <div>Reason for Visit:</div>
        </div>
        <div className= 'therapist-patient-pic-container'>
          <img className= 'individual-note-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
          <img className= 'individual-note-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
        </div>
      </div>

      <div className= 'individual-note-date-time-container'>
        Date Time
      </div>

    </div>
  )
}

export default IndividualNote