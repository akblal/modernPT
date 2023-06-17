import React from 'react';

const TherapistNoteForPatient = ({ therapistText }) => {

  return (
    <div className= 'individual-note-subjective-container'>
      <div className= 'individual-note-therapist-profile-pic-container'>
        <img className= 'individual-note-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
      </div>
      <p className= 'individual-note-receive-message'>
        {therapistText}
      </p>
    </div>
  )
}

export default TherapistNoteForPatient