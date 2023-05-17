import React, { useState } from 'react';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = ({ getEmail }) => {
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
    <div className= 'login-container'>
       <form className= 'center-container' onSubmit= {signUp}>
        <h1>Create an Account</h1>
        {error && <p>{JSON.stringify(error)}</p>}
        <div className= 'login-input-field-container'>
          <div>
            <h3>Email</h3>
            <input type= 'text' value = {email} onChange= {(e) => setEmail(e.target.value)}/>
          </div>

          <div>
            <h3>Password</h3>
            <input type= 'text' value= {password} onChange= {(e) => setPassword(e.target.value)}/>
          </div>

          <div>
            <h3>Confirm Password</h3>
            <input type= 'text' value= {confirmPassword} onChange= {(e) => setConfirmPassword(e.target.value)}/>
          </div>
        </div>
        <div className= 'login-button-container'>
          <button disabled= {loading} >Sign Up</button>
        </div>

        <div className= 'login-links-container'>
          <a>Forgot Password?</a>
          <a>Signup for an Account</a>
        </div>
      </form>
    </div>
  )
}

export default SignUp