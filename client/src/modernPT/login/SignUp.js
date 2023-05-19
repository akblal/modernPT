import React, { useState } from 'react';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faEnvelope, faUser } from '@fortawesome/free-regular-svg-icons';
import { faKey, faImagePortrait } from '@fortawesome/free-solid-svg-icons';

import LogInImage from '../../images/login/loginscreen.jpg'

const SignUp = ({ getEmail }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const signUp = (e) => {
    e.preventDefault();

    if (email.length === 0 || email.indexOf('@') < 0 ) {
      return setError('Enter a valid email')
    }

    if (password.length < 6 || confirmPassword.length < 6) {
      return setError('Passwords need to be at least 6 characters')
    }

    if (password !== confirmPassword) {
      return setError('Passwords do not match')
    }

    createUserWithEmailAndPassword (auth, email, password)
    .then ((userCredential) => {
      console.log(userCredential)
    })
    .then((result)=> getEmail(email))
    .catch((err) => {
      console.log(err)
      setError(JSON.stringify(err.code))
    })
  }

  return (
    <div className= 'login-page-container'>
      <div className= 'login-image-container'>
        <img src= {LogInImage} alt= 'log in image' className= 'login-image'></img>
      </div>
      <div className= 'login-input-container'>
        <form className= 'center-container' onSubmit= {signUp}>
          <div className= 'login-title-container'>
            <div className= 'login-title'>Sign Up</div>
          </div>
          <div className= 'login-input-field-container'>


            <div className= 'sign-up-top-input-container'>
              <div className= 'sign-up-nonpassword-container'>
                <div>
                  <div className= 'login-input-title'>Name</div>
                  <div className= 'login-input-wrapper'>
                    <FontAwesomeIcon className= 'login-input-icon' icon= {faUser} />
                    <input type= 'text' value = {name} onChange= {(e) => setName(e.target.value)} className= 'login-input-field'/>
                  </div>
                </div>

                <div>
                  <div className= 'login-input-title'>Email</div>
                  <div className= 'login-input-wrapper'>
                    <FontAwesomeIcon className= 'login-input-icon' icon= {faEnvelope} />
                    <input type= 'text' value = {email} onChange= {(e) => setEmail(e.target.value)} className= 'login-input-field'/>
                  </div>
                </div>
              </div>

              <div className= 'sign-up-user-image-container'>
                <div className= 'sign-up-user-image'>
                  <FontAwesomeIcon className= 'sign-up-portrait-icon' icon= {faImagePortrait} />
                </div>
              </div>
            </div>
            <div className= 'sign-up-password-wrapper'>
              <div className= 'sign-up-password-container'>
                <div className= 'sign-up-full-width'>
                  <div className= 'login-input-title'>Password</div>
                  <div className= 'login-input-wrapper'>
                  <FontAwesomeIcon className= 'login-input-icon' icon= {faKey} />
                    <input type= 'password' value= {password} onChange= {(e) => setPassword(e.target.value)} className= 'sign-up-password-field'/>
                  </div>
                </div>
              </div>

              <div className= 'sign-up-password-container'>
                <div className= 'sign-up-full-width'>
                  <div className= 'login-input-title'>Confirm Password</div>
                  <div className= 'login-input-wrapper'>
                  <FontAwesomeIcon className= 'login-input-icon' icon= {faKey} />
                    <input type= 'password' value= {confirmPassword} onChange= {(e) => setConfirmPassword(e.target.value)} className= 'sign-up-password-field'/>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className= 'login-button-container'>
            <button disabled= {loading} className= 'login-button login-button-font'>Create Account</button>
          </div>

        </form>
      </div>
    </div>

  )
}

export default SignUp


