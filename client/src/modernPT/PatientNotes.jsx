import React, { useState, useEffect } from 'react';
import AppointmentLog from './AppointmentLog.jsx';
import Pagination from './Pagination.jsx';

import axios from 'axios';

const PatientNotes = () => {

  const [patientNotes, setPatientNotes] = useState([]);
  const [note, setNote] = useState(0);

  const [currentPage, setCurrentPage] =  useState(1);
  const [notesPerPage] = useState(5);

  const indexLastNote= currentPage * notesPerPage;
  const indexFistNote= indexLastNote - notesPerPage;
  const currentNotes= patientNotes.slice(indexFistNote, indexLastNote)

  useEffect(() => {
    const fetchNotes = () => {
      axios.get(`/getPatientNotes/${1}`)
      .then((result) => {
        console.log(result.data.reverse());
        setPatientNotes(result.data);
      })
      .catch((err) => {
        console.log(err)
      })
    }
    fetchNotes();
  }, [])

  const paginate = (number) => setCurrentPage(number)

  return (
    <div className= 'patient-notes-page-container'>
      <div className= 'patient-notes-appointment-log-container'>
        <AppointmentLog setNote= {setNote} currentNotes= {currentNotes} totalNotes= {patientNotes.length} currentPage= {currentPage} notesPerPage= {notesPerPage}/>
        <div className= 'appointment-log-pagination'>
          <Pagination notesPerPage= {notesPerPage} totalNotes= {patientNotes.length} paginate= {paginate} currentPage= {currentPage}/>
        </div>
      </div>

      <div className= 'patient-notes-individual-note-container'>
        Individual Note
      </div>
    </div>

  )
}

export default PatientNotes