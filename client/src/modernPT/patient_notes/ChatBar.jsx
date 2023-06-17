import React, { useState, useEffect } from 'react';

import Chat from './Chat.jsx';
import DropDownSelection from './DropDownSelection.jsx';
import UploadFiles from './UploadFiles.jsx';

const ChatBar = ({ chatLog, setChatLog, note, setNote, option, setOption, editChat, setEditChat, message, setMessage }) => {

  return (
    <div className= 'chat-box-container'>
      <UploadFiles />
      <DropDownSelection editChat= {editChat} note= {note} option= {option} setOption= {setOption} setEditChat= {setEditChat} />
      <Chat editChat= {editChat} message= {message} note= {note} chatLog= {chatLog} setChatLog= {setChatLog} setOption= {setOption} setEditChat= {setEditChat} setMessage= {setMessage} option= {option} />
    </div>
)}
export default ChatBar