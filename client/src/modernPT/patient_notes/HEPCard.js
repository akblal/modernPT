import React from 'react';

const HEPCard = ({ hep }) => {
  return (
    <div className= 'patient-chat-hep-update'>
      <div className= 'patient-chat-hep-update-container'>
        <div className= 'patient-chat-hep-update-video-container'>
          {hep.video}
        </div>

        <div className= 'patient-chat-hep-update-exercise-info-container'>
          {hep.status === 'added' &&
          <div>{hep.name} added</div>
          }
          {hep.status === 'removed' &&
          <div>{hep.name} removed</div>
          }
          <div className= 'patient-chat-hep-update-exercise-scheme'>
            <div> Sets: {hep.sets} </div>
            <div> Reps: {hep.reps} </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default HEPCard