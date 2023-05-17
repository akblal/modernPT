import React, { useState } from 'react';
import { auth } from '../../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

const SignIn = ({ getEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword (auth, email, password)
    .then ((userCredential) => {
      console.log(userCredential.user.email, 'email')
      const email = userCredential.user.email;
      getEmail(email)
    })
    .catch(err => console.log(err))
  }

  return (
    <div className= 'login-container'>
       <form className= 'center-container' onSubmit= {signIn}>
        <h1>Sign In</h1>
        <div className= 'login-input-field-container'>
          <div>
            <h3>Email</h3>
            <input type= 'text' value = {email} onChange= {(e) => setEmail(e.target.value)}/>
          </div>

          <div>
            <h3>Password</h3>
            <input type= 'text' value= {password} onChange= {(e) => setPassword(e.target.value)}/>
          </div>

        </div>
        <div className= 'login-button-container'>
          <button disabled= {loading} >Log In</button>
        </div>

        <div className= 'login-links-container'>
          <a>Forgot Password?</a>
          <a>Signup for an Account</a>
        </div>
      </form>
    </div>
  )
}

export default SignIn