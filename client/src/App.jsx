import React, { useState, useEffect, createContext } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import axios from 'axios';

const container = document.getElementById('root');
const root = createRoot(container);

import HomePage from './modernPT/HomePage.jsx'
import SignIn from './modernPT/login/SignIn.js'
import SignUp from './modernPT/login/SignUp.js'
import PatientNotes from './modernPT/patient_notes/PatientNotes.jsx'
import Header from './modernPT/Header.js'
import HEP from './modernPT/HEP.jsx'

function App() {
  const [email, setEmail] = useState('');

  const getEmail = (address) => {
    setEmail(address);
    console.log (address)
    axios.get(`/user/${address}`)
    .then((result) => {
      console.log(result.data.rows[0], 'in get App')
    })
    .catch((err) => {
      console.log(err, 'in get user in App')
    })
  }
  return (
    <div className= 'app-container'>
      <Routes>
        <Route index element= {<PatientNotes />}></Route>
        <Route path= '/HEP' element= {<HEP />}></Route>
      </Routes>
      {/* <Header /> */}
      {/* <SignUp getEmail= {getEmail}/> */}
      {/* <SignIn getEmail= {getEmail}/> */}
      {/* <PatientNotes /> */}
    </div>
  );
}

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)

