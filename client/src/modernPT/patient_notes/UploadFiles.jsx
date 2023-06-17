import React, { useState } from 'react';
import { TbPhotoPlus, TbPaperclip } from "react-icons/tb";

const UploadFiles = ({}) => {

  return (
    <div className= 'chat-box-icons-row-container'>
      <div className= 'chat-box-icons-container'>
        <TbPhotoPlus className= 'chat-box-icons'/>
      </div>
      <div className= 'chat-box-icons-container'>
        <TbPaperclip className= 'chat-box-icons'/>
      </div>
    </div>

  )
}

export default UploadFiles