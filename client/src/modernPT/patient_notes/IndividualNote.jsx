import React, { useEffect, useRef } from 'react';

const IndividualNote = ({ note, chatLog }) => {

  // if (note) {
  //   console.log(note, 'individual note')
  // }

  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [chatLog]);

  if (!note) {
    return (
      <div className= 'individual-note-loading-note'>
        <div className= 'loading-spinner'>
          Loading Content...
        </div>
      </div>
    )
  }
  return (
    <div className= 'individual-note-container'>
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

      <div className= 'individual-note-therapist-note'>
        <div className= 'individual-note-subjective-container'>
          <div className= 'individual-note-therapist-profile-pic-container'>
            <img className= 'individual-note-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
          </div>


          <p className= 'individual-note-receive-message'>
            {note.subjective}
          </p>


        </div>
        <div className= 'individual-note-objective-treatment-container'>
          Objective
        </div>
        <div className= 'individual-note-assessment-container'>
          <div className= 'individual-note-therapist-profile-pic-container'>
            <img className= 'individual-note-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
          </div>
          <p className= 'individual-note-receive-message'>
            {note.assessment}
          </p>

        </div>
        <div className= 'individual-note-hep-update-container'>
          HEP Update
        </div>


      </div>


      <div className= 'individual-note-chat-container'>
        <div>
          {chatLog &&
            chatLog.map((message) => {
              if (message.note_id  === note.id){
                return (
                  <div key= {message.chat_id} className='individual-note-patient-chat-container'>

                    <p className= 'individual-note-send-message'>
                      {message.chat_message}
                    </p>

                    <div className= 'individual-note-patient-profile-pic-container'>
                      <img className= 'individual-note-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
                    </div>
                  </div>
                )
              }
            })
          }
        </div>
      </div>
      <div ref={messagesEndRef} />
    </div>
  )
}

export default IndividualNote