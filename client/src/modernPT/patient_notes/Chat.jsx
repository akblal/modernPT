import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Chat = ({ editChat, message, note, chatLog, setChatLog, setOption, setEditChat, setMessage, option }) => {

  const [editMessage, setEditMessage] = useState('');

  useEffect(() => {
    if (Object.values(editChat).length) {
      setEditMessage(editChat.chat_message)
      console.log(editChat.chat_message, 'edited chat')
    }
    else {
      setEditMessage('')
      setMessage('')
      setOption('')
    }
    if (editChat && editChat.chat_message) {
      setMessage(editChat.chat_message)
    }

  }, [editChat])

  const storeMessage = async(e) => {
    e.preventDefault();
    try {
      const save = await axios.post('/saveChat', {
        message: message,
        patient_id: 1,
        therapist_id: 1,
        note_id: note.id,
        comment_type: option,

      })

      setChatLog([...chatLog, save.data.rows[0]])
      setMessage('')

      // const reducedOptions = removedSelection.filter(item => item.value != option || item.value === 'Other');
      // console.log(reducedOptions, 'options left over')

      // const reduceSelections = await axios.put('/reduceOptions', {
      //   note_id: note.id,
      //   selection_options: JSON.stringify(reducedOptions)
      // })

      // const updatedNote = {...note, chat_selection_type: reducedOptions}
      // console.log (updatedNote, 'updated note in chat bar')
      // setNote(updatedNote)
      // setRemovedSelection(reducedOptions)
      // console.log(reducedOptions, 'in removing function')
      setOption('')

      if (editChat.comment_type) {
        setEditChat({})
      }
    } catch(err) {
      console.log(err, 'error in store message')
    }
  }

  const editAndSaveMessage = async(e) => {
    e.preventDefault();
    if (message != editMessage) {
      try {
        const save = await axios.put('/editChat', {
          message: message,
          patient_id: 1,
          therapist_id: 1,
          note_id: note.id,
          comment_type: option,
          chat_id: editChat.chat_id,
        })
        setMessage('')
        setOption('')

        if (editChat.comment_type) {
          setEditChat({})
        }
      } catch(err) {
        console.log(err, 'error in store message')
      }
    } else {
      setOption('')
      setMessage('')
      if (editChat.comment_type) {
        setEditChat({})
      }
    }
  }
  return (
    <form onSubmit= {editChat && editChat.comment_type ? message.trim().length && editAndSaveMessage : message.trim().length && storeMessage}>
      {editChat && editChat.comment_type ?
        <div>
          <label>
            <input
              type= 'text'
              defaultValue= {editMessage}
              onChange= {(e) => {
                if (e.target.value.length > 0) {
                  setMessage(e.target.value)
                } else {
                  setMessage(editMessage)
                }
              }}
              className= 'patient-chat-text-field-container'>
            </input>
          </label>
        </div> :
        <label>
          <input
            type= 'text'
            disabled= {!option.length}
            placeholder= {!option.length ? 'Select Topic' : undefined}
            value= {message}
            onChange= {(e) => {
              setMessage(e.target.value)
            }}
            className= 'patient-chat-text-field-container'>
          </input>
        </label>
      }
    </form>
  )
}

export default Chat