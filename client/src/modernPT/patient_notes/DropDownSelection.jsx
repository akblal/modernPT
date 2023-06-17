import React, { useState, useEffect } from 'react';

const DropDownSelection = ({ editChat, note, option, setOption, setEditChat }) => {

  const [selection, setSelection] = useState()

  useEffect(() => {
    if (note) {
      setSelection(note.chat_selection_type)
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
    <div>
    {editChat && editChat.comment_type ?
      <div>
        <select onChange= {handleEdit} className= 'patient-chat-select-option-container' value= {'Edit'}>
            <option value= {'Edit'} disabled= {true}>Edit</option>
        </select>
      </div> :
      <div>
        <select onChange= {handleChange} className= 'patient-chat-select-option-container' value= {option}>
          {selection && selection.length?
            selection.map((item) => {
              return <option value= {item.title}  key= {item.value}>{item.title}</option>
            }) :
            null
          }
        </select>
      </div>
    }
    </div>
  )
}

export default DropDownSelection