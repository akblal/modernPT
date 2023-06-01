import React, { useState } from 'react';
import axios from 'axios';
import { TbPhotoPlus, TbPaperclip } from "react-icons/tb";

const ChatBar = ({ chatLog, setChatLog, note, option, setOption }) => {

  const [message, setMessage] = useState('');
  const [dropdownOptions, setDropdownOptions] = useState([
    {
      value: '',
      title: 'Select'
    },
    {
      value: 'Visit',
      title: "Visit"
    },
    {
      value: 'Flare Up',
      title: 'Flare Up'
    },
    {
      value: 'Change in Goal',
      title: 'Change in Goal'
    },
    {
      value: 'HEP',
      title: 'HEP'
    },
    {
      value: 'Other',
      title: 'Other'
    },
  ])

  const handleChange = (e) => {
    setOption(e.target.value);
    console.log(e.target.value)
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
      const reducedOptions = dropdownOptions.filter(item => item.value != option || item.value === 'Other');
      console.log(reducedOptions)
      setDropdownOptions(reducedOptions)
      setOption('')

    } catch(err) {
      console.log(err, 'error in store message')
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

      <div>
        <select onChange= {handleChange} className= 'patient-chat-select-option-container' value= {option}>
          {dropdownOptions.map((item) => {
            return <option value= {item.title} key= {item.value}>{item.title}</option>
          })}
        </select>
      </div>

      <form onSubmit= {message.trim().length && storeMessage}>
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
      </form>
   </div>
 )
}

export default ChatBar