'use client'
import Link from 'next/link'
import React, { useState, FomEvent } from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { auth, db } from '@/app/lib/firebase/clientApp';
import { useAuth } from '@/app/lib/firebase/AuthContext';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');

  const router = useRouter();
  const { signInWithGoogle } = useAuth();

  const handleRegister = async (event) => {
    event.preventDefault();
    setError(null);
    setMessage(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await sendEmailVerification(user);

      localStorage.setItem(
        "registrationData",
        JSON.stringify({
          userName,
          firstName,
          lastName,
          middleName,
          email,
        })
      )
      setMessage("Registration successful! Please check your email for verification.")
      setUserName('');
      setFirstName('');
      setPassword('');
      setMiddleName('');
      setLastName('');
      setConfirmPassword('');
    } catch {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occured.")
      }
    }

  }

  return (
    <div>
      <form onSubmit={handleRegister}>
        <label htmlFor='userName'>Enter Username</label>
        <input type='text' value={userName} id='userName' className='text-black bg-pink-900' onChange={(e) => setUserName(e.target.value)}></input>
        <label htmlFor='userEmail'>Enter Email</label>
        <input type='email' value={email} id='email' className='text-black bg-pink-900' onChange={(e) => setEmail(e.target.value)} required></input>
        <label htmlFor='userPass'>Enter Password</label>
        <input type='password' id='password' className='text-black bg-pink-900' value={password} onChange={(e) => setPassword(e.target.value)} required ></input>
        <label htmlFor='userPass'>Confirm Password</label>
        <input type='password' id='confirmPassword' className='text-black bg-pink-900' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required ></input>
        <input type='submit' name='submit' value={'Register'}/>
      </form>
      <button><Link href='/pages/signin'>Already have an account?</Link></button>
      <button onClick={signInWithGoogle} ><AiOutlineGoogle size={30} /></button>
    </div >
  )
}

export default SignUp
