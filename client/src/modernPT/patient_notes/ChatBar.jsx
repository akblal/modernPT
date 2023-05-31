import React, { useState } from 'react';
import axios from 'axios';

const ChatBar = ({ chatLog, setChatLog, note }) => {

  const [option, setOption] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setOption(e.target.value);
  };

  const storeMessage = async(e) => {
    e.preventDefault();
    try {
      const save = await axios.post('/saveChat', {
        message: message,
        patient_id: 1,
        therapist_id: 1,
        note_id: note.id,
      })


      setChatLog([...chatLog, save.data.rows[0]])
      setMessage('')

    } catch(err) {
      console.log(err, 'error in store message')
    }

  }
  return (
    <div className= 'chat-box-container'>
      <span>Video</span>
      <span>Photo</span>
      <span>Attachment</span>

      <div>
        <select onChange= {handleChange} className= 'patient-chat-select-option-container'>
          <option value=''>Select</option>
          <option value="visit">Today's Visit</option>
          <option value= "goal">Change in Goals</option>
          <option value="flareup">Flare Up</option>
          <option value="HEP">HEP</option>
          <option value= "other">Other</option>
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