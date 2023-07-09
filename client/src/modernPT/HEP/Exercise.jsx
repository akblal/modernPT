import React, { useState } from 'react'

const Exercise = ({ order, exercise, after, changeExerciseStatus }) => {

  const [completed, setCompleted] = useState(false)

  const handleComplete = (e) => {
    e.preventDefault();
    console.log(exercise + ' is completed!')
    // if (completed) {
      exercise.completed = !exercise.completed
    // } else {
    //   exercise.completed = true;
    // }
    let status = !completed
    setCompleted(status)
    changeExerciseStatus(exercise, order)
  }

  const handleComment = (e) => {
    e.preventDefault();
    console.log('comment on ' + exercise.name)
  }

  return (
    <div className= {exercise.completed ? 'hep-page-exercise-container hep-completed' : 'hep-page-exercise-container hep-incomplete'}>
      <div className= 'hep-page-name-video-container'>
        <div className= 'hep-page-center-container'>
          <h1>{exercise.name}</h1>
        </div>
        <div className= 'hep-page-center-container'>
          {exercise.video}
        </div>
      </div>
      <div className= 'hep-page-exercise-instructions-container'>
        <div className= 'hep-page-exercise-scheme-container'>
          <div className= 'hep-page-exercise-rep-container'>
            <h2>Sets: </h2>
            <h2>{exercise.sets}</h2>
          </div>
          <div className= 'hep-page-exercise-set-container'>
            <h2>Reps: </h2>
            <h2>{exercise.reps}</h2>
          </div>
        </div>
        {exercise.hold && exercise.hold.length &&
        <div className= 'hep-page-exercise-hold-container'>
          <h2>Hold: {exercise.hold}</h2>
        </div>
        }
        <h2>
          {exercise.description}
        </h2>
        <div className= 'hep-page-exercise-scheme-container'>
        {!after ?
          exercise.completed ?
          <button onClick= {handleComplete}> Still Need to Do</button> :
          <button onClick= {handleComplete}> Completed!</button>
          :
          null
        }
        {!after && <button onClick= {handleComment}>Comment</button>}

        </div>
      </div>
    </div>
  )
}

export default Exercise