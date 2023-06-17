import React, { useState } from 'react';

const HEPCard = ({ hep }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? hep.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex)
  }

  const goNext = () => {
    const isLast = currentIndex === hep.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  }

  return (
    <div>
      <div className= 'patient-chat-hep-update'>
        {hep.length > 1?
          <div>
            <div className= {'carousel-left-arrow'} onClick= {goPrevious}> back </div>
            <div className= {'carousel-right-arrow'} onClick= {goNext}> next </div>
          </div>:
          null
        }

        {hep.length &&
          <div className= {hep[currentIndex].status === 'added' ? 'patient-chat-hep-update-container hep-added' : 'patient-chat-hep-update-container hep-removed'}>
            <div className= 'patient-chat-hep-update-video-container'>
              {hep[currentIndex].video}
            </div>

            <div className= 'patient-chat-hep-update-exercise-info-container'>
              {hep[currentIndex].status === 'added' &&
                <div className= 'patient-chat-hep-update-exercise-name'>
                  <div>{hep[currentIndex].name} added</div>
                </div>
              }
              {hep[currentIndex].status === 'removed' &&
              <div className= 'patient-chat-hep-update-exercise-name'>
                  <div>{hep[currentIndex].name} removed</div>
                </div>
              }

              <div className= 'patient-chat-hep-update-exercise-scheme'>
                <div> Sets: {hep[currentIndex].sets} </div>
                <div> Reps: {hep[currentIndex].reps} </div>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default HEPCard