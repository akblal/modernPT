import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TbPhotoPlus, TbPaperclip } from "react-icons/tb";

const ChatBar = ({ chatLog, setChatLog, note, setNote, option, setOption, editChat, setEditChat, message, setMessage }) => {

  useEffect(() => {
    console.log(note, 'this is the note')
  }, [note])

  const [editMessage, setEditMessage] = useState('');
  const [optionName, setOptionName] = useState('');
  const [removedSelection, setRemovedSelection] = useState()

  useEffect(() => {
    if (note) {
      setRemovedSelection(note.chat_selection_type)
    }
  }, [note])

  useEffect(() => {
    if (Object.values(editChat).length) {
      setEditMessage(editChat.chat_message)
    }
    else {
      setEditMessage('')
      setMessage('')
    }
    if (editChat && editChat.chat_message) {
      setMessage(editChat.chat_message)
    }

  }, [editChat])

  const handleChange = (e) => {
    setOption(e.target.value);
    console.log(e.target.value)
  };

  const handleEdit = (e) => {
    setOption('Edit');
    setEditChat({})
  };

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

      const reducedOptions = removedSelection.filter(item => item.value != option || item.value === 'Other');
      // console.log(reducedOptions, 'options left over')

      const reduceSelections = await axios.put('/reduceOptions', {
        note_id: note.id,
        selection_options: JSON.stringify(reducedOptions)
      })

      const updatedNote = {...note, chat_selection_type: reducedOptions}
      setNote(updatedNote)
      setRemovedSelection(reducedOptions)
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
    <div className= 'chat-box-container'>
      <div className= 'chat-box-icons-container'>
        <TbPhotoPlus className= 'chat-box-icons'/>
      </div>
      <div className= 'chat-box-icons-container'>
        <TbPaperclip className= 'chat-box-icons'/>
      </div>

      {editChat && editChat.comment_type ?
        <div>
          <select onChange= {handleEdit} className= 'patient-chat-select-option-container' value= {'Edit'}>
              <option value= {'Edit'} disabled= {true}>Edit</option>
          </select>
        </div> :

        <div>
          <select onChange= {handleChange} className= 'patient-chat-select-option-container' value= {option}>
            {removedSelection && removedSelection.length?
              removedSelection.map((item) => {
                return <option value= {item.title}  key= {item.value}>{item.title}</option>
              }) :
              null
            }

          </select>
        </div>
      }
      {
        console.log(editChat, 'editchat', editMessage, 'editmessatge', message, 'message')
      }
      <form onSubmit= {editChat && editChat.comment_type ? message.trim().length && editAndSaveMessage : message.trim().length && storeMessage}>

        {editChat && editChat.comment_type ?
          <div>
            <label>
              <input
                type= 'text'
                defaultValue= {editMessage}
                onChange= {(e) => {
                  if (e.target.value.length > 0) {
                    console.log (e.target.value, 'e.target.value')
                    setMessage(e.target.value)
                  } else {
                    console.log (e.target.value, 'e.target.value same')
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
      </div>
)}
export default ChatBar