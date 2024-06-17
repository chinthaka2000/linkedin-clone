import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const dispatch = useDispatch();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name,
          photoUrl: profilepic,
        })
        .then(() => {
          dispatch(login({
            email: user.email,
            uid: user.uid,
            displayName: name,
            photoUrl: profilepic,
          }));
        });
      })
      .catch((error) => alert(error.message));
  };

  const logintoApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoURL: user.photoURL,
        }));
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <img src='LinkedIn_Logo.png' alt='LinkedIn' />
      <form>
        <input value={name} onChange={e => setName(e.target.value)} type='text' placeholder='Full Name' />
        <input value={profilepic} onChange={e => setProfilepic(e.target.value)} placeholder='Profile pic URL (optional)' type='text' />
        <input value={email} onChange={e => setEmail(e.target.value)} type='email' placeholder='Email' />
        <input value={password} onChange={e => setPassword(e.target.value)} type='password' placeholder='Password' />
        <button type='submit' onClick={logintoApp}>Sign in</button>
      </form>
      <p>Not a member? {" "}
        <span className='login__register' onClick={register}>Register Now</span>
      </p>
    </div>
  );
}

export default Login;

