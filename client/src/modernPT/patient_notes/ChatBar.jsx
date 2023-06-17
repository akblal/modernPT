import React, { useState, useEffect } from 'react';
import { TbPhotoPlus, TbPaperclip } from "react-icons/tb";

import Chat from './Chat.jsx';
import DropDownSelection from './DropDownSelection.jsx'

const ChatBar = ({ chatLog, setChatLog, note, setNote, option, setOption, editChat, setEditChat, message, setMessage }) => {

  return (
    <div className= 'chat-box-container'>
      <div className= 'chat-box-icons-container'>
        <TbPhotoPlus className= 'chat-box-icons'/>
      </div>
      <div className= 'chat-box-icons-container'>
        <TbPaperclip className= 'chat-box-icons'/>
      </div>

      <DropDownSelection editChat= {editChat} note= {note} option= {option} setOption= {setOption} setEditChat= {setEditChat} />
      <Chat editChat= {editChat} message= {message} note= {note} chatLog= {chatLog} setChatLog= {setChatLog} setOption= {setOption} setEditChat= {setEditChat} setMessage= {setMessage} option= {option} />
      </div>
)}
export default ChatBar