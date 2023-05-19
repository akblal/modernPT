import React, { useState } from 'react';
import { auth } from '../../firebase.js';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { BsEnvelope, BsEye, BsEyeSlash } from "react-icons/bs";
import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";

import LogInImage from '../../images/login/loginscreen.jpg'
import usePasswordToggle from '../hooks/usePasswordToggle.js'


const SignIn = ({ getEmail }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const [PasswordType, ToggleIcon] = usePasswordToggle();


  const signIn = (e) => {
    e.preventDefault();

    if (email.length === 0 || email.indexOf('@') < 0) {
      return setError('Please enter a valid email')
    }

    if (password.length === 0) {
      return setError('Please enter your password')
    }

    signInWithEmailAndPassword (auth, email, password)
    .then ((userCredential) => {
      console.log(userCredential.user.email, 'email')
      const email = userCredential.user.email;
      getEmail(email)
    })
    .catch((err) => {
      console.log(err)
      setError('Account not found. Please try again or sign up.')
    })
  }


  return (
    <div className= 'login-page-container'>
      <div className= 'login-image-container'>
        <img src= {LogInImage} alt= 'log in image' className= 'login-image'></img>
      </div>
      <div className= 'login-input-container'>
        <form className= 'center-container' onSubmit= {signIn}>
          <div className= 'login-title-container'>
            <div className= 'login-title'>Welcome to Performax Therapy</div>
            <div className= 'login-subtitle'>Let's help you achieve your physical goals!</div>
            {error ?
            <div className= 'sign-up-error-message'> {error} </div> :
            <div className= 'sign-up-error-message sign-up-hidden-error'>no error</div>
          }
          </div>
          <div className= 'login-input-field-container'>
            <div>
              <div className= 'login-input-title'>Email</div>
              <div className= 'login-input-wrapper'>
                <BsEnvelope className= 'login-input-icon' />
                <input type= 'text' value = {email} onChange= {(e) => setEmail(e.target.value)} className= 'login-input-field'/>
              </div>
            </div>

            <div>
              <div className= 'login-input-title'>Password</div>
              <div className= 'login-input-wrapper'>
                <HiOutlineLockClosed className= 'login-input-icon' />
                <input type= {PasswordType} value= {password} onChange= {(e) => setPassword(e.target.value)} className= 'login-input-field'/>
                <span className= 'login-password-eye-icon'>{ToggleIcon}</span>
              </div>
            </div>

            <div className= 'forgot-password-container'>
              <a className= 'forgot-password'>Forgot Password?</a>
            </div>

            <label className= 'login-checkbox-container'>
              <input type="checkbox"  checked={checked} onChange={() => {setChecked(!checked)}} className= 'login-checkbox'/>

              <div className= 'remember-me-container'>
                <div className= 'remember-me'>Remember Me</div>
              </div>
            </label>

          </div>
          <div className= 'login-button-container'>
            <button disabled= {loading} className= 'login-button login-button-font'>Log In</button>
          </div>

          <div className= 'login-link-container'>
            <span className= 'login-need-an-account'>Need an account? </span>
            <a className= 'sign-up-link login-need-an-account'>Sign Up Here!</a>
          </div>

          <div className= 'social-media-row-container'>
            <div className= 'social-media-text-container'>
              <div className= 'social-media-text'></div>
            </div>
            <div className= 'social-media-buttons-container'>
              <div className= 'social-media-container'>

              </div>
              <div className= 'social-media-container'>

              </div>
              <div className= 'social-media-container'>

              </div>
            </div>

          </div>
        </form>
      </div>
    </div>
  )
}

export default SignIn