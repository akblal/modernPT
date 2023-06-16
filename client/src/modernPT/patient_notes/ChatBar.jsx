import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TbPhotoPlus, TbPaperclip } from "react-icons/tb";

import Chat from './Chat.jsx';

const ChatBar = ({ chatLog, setChatLog, note, setNote, option, setOption, editChat, setEditChat, message, setMessage }) => {

  const [optionName, setOptionName] = useState('');
  const [removedSelection, setRemovedSelection] = useState()

  useEffect(() => {
    if (note) {
      console.log (note.chat_selection_type, 'in useeffect')
      setRemovedSelection(note.chat_selection_type)
    }
  }, [note])



  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const handleEdit = (e) => {
    setOption('Edit');
    setEditChat({})
  };


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

      <Chat editChat= {editChat} message= {message} note= {note} chatLog= {chatLog} setChatLog= {setChatLog} setOption= {setOption} setEditChat= {setEditChat} setMessage= {setMessage} option= {option} />
      </div>
)}
export default ChatBar