import React, { useState, useEffect } from 'react';
import Header from '../Header.js'
import AppointmentList from './AppointmentList.jsx';
import Pagination from '../Pagination.jsx';
import IndividualNote from './IndividualNote.jsx'
import ChatBar from './ChatBar.jsx'

import axios from 'axios';

const PatientNotes = () => {

  const [patientNotes, setPatientNotes] = useState([]);
  const [note, setNote] = useState(0);

  const [currentPage, setCurrentPage] =  useState(1);
  const [notesPerPage] = useState(5);

  const [option, setOption] = useState('');

  const [chatLog, setChatLog] = useState([]);

  const [editChat, setEditChat] = useState({});

  const [message, setMessage] = useState('');

  const indexLastNote= currentPage * notesPerPage;
  const indexFirstNote= indexLastNote - notesPerPage;
  const currentNotes= patientNotes.slice(indexFirstNote, indexLastNote)

  //get all the patient notes
  useEffect(() => {
    const fetchNotes = () => {
      axios.get(`/getPatientNotes/${1}`)
      .then((result) => {
        console.log(result.data.reverse());
        setPatientNotes(result.data);
        setNote(result.data[0])
      })
      .catch((err) => {
        console.log(err)
      })
    }
    fetchNotes();
  }, [])

  //pagination: selecting the note on the top of the page when clicking through pagination
  useEffect(() => {
    setNote(patientNotes[indexFirstNote])
  }, [currentPage])

  useEffect(() => {
    if (editChat && editChat.comment_type) {
      setOption(editChat.comment_type)
    }
  }, [editChat])

  const paginate = (number) => {
    setCurrentPage(number)
  }

  return (
    <div className= 'app=container'>
      <Header />
      <div className= 'patient-notes-page-container'>
        <div className= 'patient-notes-appointment-log-container'>
          <AppointmentList indexFirstNote= {indexFirstNote} setNote= {setNote} currentNotes= {currentNotes} totalNotes= {patientNotes.length} currentPage= {currentPage} notesPerPage= {notesPerPage} setOption={setOption} setMessage= {setMessage} setEditChat= {setEditChat}/>
          <div className= 'appointment-log-pagination'>
            <Pagination notesPerPage= {notesPerPage} totalNotes= {patientNotes.length} paginate= {paginate} currentPage= {currentPage}/>
          </div>
        </div>

        <div className= 'patient-notes-chat-container'>
          <IndividualNote note= {note} chatLog= {chatLog} setChatLog= {setChatLog} option= {option} setEditChat= {setEditChat} editChat= {editChat}/>
          <ChatBar chatLog= {chatLog} setChatLog= {setChatLog} note= {note} setNote={setNote} option= {option} setOption= {setOption} editChat= {editChat} setEditChat= {setEditChat} message= {message} setMessage= {setMessage}/>
        </div>
      </div>
    </div>

  )
}

export default PatientNotes