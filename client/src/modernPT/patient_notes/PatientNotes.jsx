import React, { useState, useEffect } from 'react';
import AppointmentLog from './AppointmentLog.jsx';
import Pagination from '../Pagination.jsx';
import IndividualNote from './IndividualNote.jsx'
import ChatBar from './ChatBar.jsx'

import axios from 'axios';

const PatientNotes = () => {

  const [patientNotes, setPatientNotes] = useState([]);
  const [note, setNote] = useState(0);

  const [currentPage, setCurrentPage] =  useState(1);
  const [notesPerPage] = useState(5);

  const [chatLog, setChatLog] = useState([]);

  const indexLastNote= currentPage * notesPerPage;
  const indexFirstNote= indexLastNote - notesPerPage;
  const currentNotes= patientNotes.slice(indexFirstNote, indexLastNote)

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

  useEffect(() => {
    setNote(patientNotes[indexFirstNote])
  }, [currentPage])

  const paginate = (number) => {
    setCurrentPage(number)
  }

  useEffect(() => {
    console.log(chatLog, 'in parent')
  }, [chatLog])

  return (
    <div className= 'patient-notes-page-container'>
      <div className= 'patient-notes-appointment-log-container'>
        <AppointmentLog indexFirstNote= {indexFirstNote} setNote= {setNote} currentNotes= {currentNotes} totalNotes= {patientNotes.length} currentPage= {currentPage} notesPerPage= {notesPerPage}/>
        <div className= 'appointment-log-pagination'>
          <Pagination notesPerPage= {notesPerPage} totalNotes= {patientNotes.length} paginate= {paginate} currentPage= {currentPage}/>
        </div>
      </div>

      <div className= 'patient-notes-chat-container'>
        <IndividualNote note= {note} chatLog= {chatLog}/>
        <ChatBar chatLog= {chatLog} setChatLog= {setChatLog} note= {note}/>
      </div>


    </div>

  )
}

export default PatientNotes