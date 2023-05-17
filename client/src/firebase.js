import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBEPvcUK0zC1VH3UQ3TScJjqMKvTAMpbnk",
  authDomain: "modernpt-development.firebaseapp.com",
  projectId: "modernpt-development",
  storageBucket: "modernpt-development.appspot.com",
  messagingSenderId: "763160783438",
  appId: "1:763160783438:web:aa8b8cd316e865ba8e711f"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app);