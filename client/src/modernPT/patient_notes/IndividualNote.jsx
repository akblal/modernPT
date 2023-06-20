import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';

import TherapistNoteHeader from './TherapistNoteHeader.js'
import TherapistNoteForPatient from './TherapistNoteForPatient.jsx'
import HEPCard from './HEPCard.js'
import UpdatedHEP from './UpdatedHEP.js'

import { CiEdit } from "react-icons/ci";
import { MdOutlineCancel } from "react-icons/md";

const IndividualNote = ({ note, chatLog, setChatLog, option, setEditChat, editChat }) => {

  const messagesEndRef = useRef(null)
  const [addedHEP, setAddedHEP] = useState([]);
  const [removedHEP, setRemovedHEP] = useState([]);

  //get chat history base on the note id
  useEffect(() => {
    const getChatHistory = async() => {
      if (note) {
        const fetchChatHistory = await axios.get(`/getChatHistory/${note.id}`);
        const chatHistory = fetchChatHistory.data.rows;
        setChatLog(chatHistory)
      }
    }
    getChatHistory()
  }, [note, editChat])

  useEffect(() => {
    if (note) {
      let added = note.hep_update.filter(hep => hep.status === 'added');
      let removed = note.hep_update.filter(hep => hep.status === 'removed');
      setAddedHEP(added)
      setRemovedHEP(removed)
      console.log (added, removed, 'added, removed')
    }
  }, [note])

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

      <TherapistNoteHeader note= {note}/>

      <div className= 'individual-note-therapist-note'>
        <TherapistNoteForPatient therapistText= {note.subjective} />
        <TherapistNoteForPatient therapistText= {note.objective} />
        <TherapistNoteForPatient therapistText= {note.assessment} />

        <div className= 'individual-note-hep-update-container'>
          {addedHEP.length ?
            <TherapistNoteForPatient therapistText= {<HEPCard hep= {addedHEP}/>} />
            : null
          }

          {removedHEP.length ?
            <TherapistNoteForPatient therapistText= {<HEPCard hep= {removedHEP}/>} />
            : null
          }
        </div>

        <TherapistNoteForPatient therapistText= {<UpdatedHEP />} />
      </div>

      <div className= 'individual-note-chat-container'>
        <div>
          {chatLog &&
            chatLog.map((message) => {
              if (message.note_id  === note.id){
                return (
                  <div key= {message.chat_id} className= 'individual-note-section-chat-container'>
                    <div className= 'individual-note-section-title-container'>
                      <div>{message.comment_type}</div>
                      { Object.values(editChat) && editChat.chat_id === message.chat_id ?
                        <MdOutlineCancel
                          onClick= { () =>{
                            setEditChat({})
                            setMessage('')
                          }}
                          className= 'individual-note-add-chat-to-section'/> :
                        <CiEdit
                          onClick= { () =>
                            setEditChat({
                              chat_id: message.chat_id,
                              comment_type: message.comment_type,
                              chat_message: message.chat_message,
                            })}
                          className= 'individual-note-add-chat-to-section'/>
                      }

                    </div>
                    <div className='individual-note-patient-chat-container'>
                      <p className= 'individual-note-send-message'>
                        {message.chat_message}
                      </p>

                      <div className= 'individual-note-patient-profile-pic-container'>
                        <img className= 'individual-note-therapist-picture-container' src={require('../../images/therapist_profile_pic/brandon_hsu.png')} alt= 'therapist_profile_pic' />
                      </div>
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