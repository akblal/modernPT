import React, { useState, useEffect } from 'react';
import { auth } from '../../firebase.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { storage } from '../../firebase.js'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

import { BsEnvelope, BsEye, BsEyeSlash } from "react-icons/bs";
import { HiOutlineLockClosed, HiOutlineUser } from "react-icons/hi";
import { MdPortrait } from 'react-icons/md';


import LogInImage from '../../images/login/loginscreen.jpg'
import usePasswordToggle from '../hooks/usePasswordToggle.js'

const SignUp = ({ getEmail }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [typingPassword, setTypingPassword] = useState(false);
  const [typingConfirmPassword, setTypingConfirmPassword] = useState(false);
  const [profilePic, setProfilePic] = useState();
  const [profilePicURL, setProfilePicURL] = useState();
  const [error, setError] = useState('');

  const [PasswordType, ToggleIcon] = usePasswordToggle();

  const signUp = (e) => {
    e.preventDefault();

    if (name.length === 0) {
      return setError('Enter your name')
    }

    if (email.length === 0 || email.indexOf('@') < 0 ) {
      return setError('Enter a valid email')
    }

    if (password.length < 6) {
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
      setError('Email is already in the system. Do you have an account?')
    })
  }

  const uploadImage = () => {
    if (!profilePic) {
      return
    }
    const imageRef = ref(storage, `/images/${profilePic.name}`)

    uploadBytes(imageRef, profilePic)
    .then((snapshot) => {
      getDownloadURL(snapshot.ref)
      .then((url) => {
        console.log(url)
        setProfilePicURL(url)
      })
    })
  }

  useEffect(() => {
    uploadImage();
  }, [profilePic])

  return (
    <div className= 'login-page-container'>
      <div className= 'login-image-container'>
        <img src= {LogInImage} alt= 'log in image' className= 'login-image'></img>
      </div>
      <div className= 'login-input-container'>
        <form className= 'center-container' onSubmit= {signUp}>
          <div className= 'sign-up-title-container'>
            <div className= 'login-title'>Sign Up</div>
          </div>

          {error ?
            <div className= 'sign-up-error-message'> {error} </div> :
            <div className= 'sign-up-error-message sign-up-hidden-error'>no error</div>
          }

          <div className= 'login-input-field-container'>
            <div className= 'sign-up-top-input-container'>
              <div className= 'sign-up-nonpassword-container'>
                <div>
                  <div className= 'login-input-title'>Name</div>
                  <div className= 'login-input-wrapper'>
                    <HiOutlineUser className= 'login-input-icon' />
                    <input type= 'text' value = {name} onChange= {(e) => setName(e.target.value)} className= 'sign-up-input-field'/>
                  </div>
                </div>

                <div>
                  <div className= 'login-input-title'>Email</div>
                  <div className= 'login-input-wrapper'>
                    <BsEnvelope className= 'login-input-icon'/>

                    <input type= 'text' value = {email} onChange= {(e) => setEmail(e.target.value)} className= 'sign-up-input-field'/>
                  </div>
                </div>
              </div>
                <div className= 'sign-up-user-image-container'>
                  <div className= 'sign-up-user-image'>
                  <input
                    type= 'file'
                    onChange= {(e) => {
                      setProfilePic(e.target.files[0])
                    }}
                    className= 'sign-up-upload-profile-pic'
                  />
                  {profilePicURL && profilePicURL.length > 0 ?
                    <img src= {profilePicURL} alt= 'profile pic'  className= 'sign-up-profile-pic'/>:
                    <MdPortrait className= 'sign-up-portrait-icon'/>
                  }
                </div>
              </div>
            </div>
            <div className= 'sign-up-password-wrapper'>
              <div className= 'sign-up-password-container'>
                <div className= 'sign-up-full-width'>
                  <div className= 'login-input-title'>Password</div>
                  <div className= 'login-input-wrapper'>
                    <HiOutlineLockClosed className= 'login-input-icon' />
                    <input
                      type= {PasswordType}
                      value= {password}
                      onChange= {(e) => {
                        setPassword(e.target.value)
                        setTypingPassword(true)
                        }
                      }
                      className= 'sign-up-password-field'/>
                    <span className= 'password-visible'>{ToggleIcon}</span>
                  </div>
                </div>
              </div>

              <div className= 'sign-up-password-container'>
                <div className= 'sign-up-full-width'>
                  <div className= 'login-input-title'>Confirm Password</div>
                  <div className= 'login-input-wrapper'>
                    <HiOutlineLockClosed className= 'login-input-icon' />
                    <input
                      type= {PasswordType}
                      value= {confirmPassword}
                      onChange= {(e) => {
                        setConfirmPassword(e.target.value)
                        setTypingConfirmPassword(true)
                        }}
                      className= 'sign-up-password-field'/>
                    <span className= 'password-visible'>{ToggleIcon}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className= 'login-button-container'>
            <button className= 'login-button login-button-font'>Create Account</button>
          </div>

          <div className= 'login-link-container'>
            <span className= 'login-need-an-account'>Already have an account? </span>
            <a className= 'sign-up-link login-need-an-account'>Log in!</a>
          </div>

          <div>

          </div>

        </form>
      </div>
    </div>
  )
}

export default SignUp
