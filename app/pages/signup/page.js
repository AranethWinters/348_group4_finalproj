'use client'

import Link from 'next/link'
import React, { useState, FomEvent } from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './../../lib/firebase/clientApp';
import { redirect } from 'next/navigation';
import { setDoc, doc, addDoc, getDoc} from 'firebase/firestore';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

const SignUp = () => {
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (password == confirmPassword) { 
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        throw new Error("Password does not match");
      }
      const user = auth.currentUser;
      console.log(user)
      console.log(user.uid)
      await sendEmailVerification(user)
      if (user) {
        console.log(user);
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          userName: userName,
          firstName: firstName,
          lastName: lastName,
        })
      }
      console.log("User registered successfully");
      toast.success("User registered successfully!", { position: 'top-center' });
      router.push('/pages/dashboard')
    } catch(error) {
      console.log(error.message)
      toast.error(error.message, { position: 'bottom-center' });
    }
  }

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider).then(function(result) {
        // code which runs on success
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        alert(errorCode);
      
        var errorMessage = error.message;
        console.log(errorMessage);
        alert(errorMessage);
      });;
};

  return (
    <div className='flex content-center justify-center align-center pt-[5%]'>
      <div className='flex flex-col items-center justify-center content-center border-[3px] border-gray-500 shadow-md w-auto p-5 rounded-lg'>
      <form onSubmit={handleRegister} className='flex flex-col border-1 border-gray-100 h-full w-full justify-center items-center align-center content-center'>
        <div>
          <label htmlFor='userName'>Enter Username: </label>
          <input type='text' value={userName} id='userName' className='text-black bg-pink-900' onChange={(e) => setUserName(e.target.value)} required></input>
        </div>
        <div>
          <label htmlFor='email'>Enter Email:</label>
          <input type='email' value={email} id='email' className='text-black bg-pink-900' onChange={(e) => setEmail(e.target.value)} required></input>
        </div>
        <div>
          <label htmlFor='firstName'>Enter First Name: </label>
          <input type='text' value={firstName} id='firstName' className='text-black bg-pink-900' onChange={(e) => setFirstName(e.target.value)} required></input>
        </div>
        <div>
          <label htmlFor='lastName'>Enter Last Name: </label>
          <input type='text' value={lastName} id='lastName' className='text-black bg-pink-900' onChange={(e) => setUserName(e.target.value)}required></input>
        </div>
        <div>
          <label htmlFor='password'>Enter Password: </label>
          <input type='password' id='password' className='text-black bg-pink-900' value={password} onChange={(e) => setPassword(e.target.value)} required ></input>
        </div>
        <div>
          <label htmlFor='confirmPassword'>Confirm Password: </label>
          <input type='password' id='confirmPassword' className='text-black bg-pink-900' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required ></input>
        </div>
        <br></br>
        <input type='submit' name='submit' value={'Register'} className='bg-gray-500 border-1 rounded px-3'/>
      </form>
      <button><Link href='/pages/signin' className='font-bold underline'>Already have an account?</Link></button>
      <button onClick={signInWithGoogle} ><AiOutlineGoogle size={30} /></button>
    </div >
    </div>
  )
}

export default SignUp