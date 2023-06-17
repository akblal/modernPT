import React, { useState } from 'react';
import { ImArrowLeft2, ImArrowRight2 } from "react-icons/im";
import { RxDotFilled, RxDot } from "react-icons/rx";

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

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  return (
    <div className= 'patient-chat-hep-update'>
      <div className= 'patient-hep-carousel-container'>
      {hep.length > 1 && <ImArrowLeft2 className= {'carousel-left-arrow'} onClick= {goPrevious} />}
      {hep.length ?
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
        </div>:
        null
      }
      {hep.length > 1 && <ImArrowRight2 className= {'carousel-right-arrow'} onClick= {goNext} />}
      </div>

      {hep.length ?
        <div className= 'carousel-dot-container'>
          {hep.map((exercise, exerciseIndex) => {
            if (exerciseIndex === currentIndex) {
              return <RxDotFilled className= 'carousel-dot' />
            } else {
              return <RxDot className= 'carousel-dot' onClick= {() => goToSlide(exerciseIndex)} />
            }
          })}
        </div> :
        null
      }
    </div>
  )
}

export default HEPCard