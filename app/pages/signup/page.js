'use client'
import Link from 'next/link'
import React, { useState, FomEvent } from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './../../lib/firebase/clientApp';
import { redirect } from 'next/navigation';
import { setDoc, doc, addDoc, getDoc } from 'firebase/firestore';
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
        createUserWithEmailAndPassword(auth, email, password);
      } else {
        throw new Error("Password does not match");
      }
      const user = auth.currentUser;
      console.log(user)
      console.log(user.uid)
      await sendEmailVerification(user)
      if (user) {
        console.log(user);
        await setDoc(doc(db, "Users", userUID), {
          email: user.email,
          userName: userName,
          firstName: firstName,
          middleName: middleName,
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
    <div>
      <form onSubmit={handleRegister}>
        <label htmlFor='userName'>Enter Username</label>
        <input type='text' value={userName} id='userName' className='text-black bg-pink-900' onChange={(e) => setUserName(e.target.value)}></input>
        <label htmlFor='email'>Enter Email</label>
        <input type='email' value={email} id='email' className='text-black bg-pink-900' onChange={(e) => setEmail(e.target.value)} required></input>
        <label htmlFor='password'>Enter Password</label>
        <input type='password' id='password' className='text-black bg-pink-900' value={password} onChange={(e) => setPassword(e.target.value)} required ></input>
        <label htmlFor='confirmPassword'>Confirm Password</label>
        <input type='password' id='confirmPassword' className='text-black bg-pink-900' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required ></input>
        <input type='submit' name='submit' value={'Register'} />
      </form>
      <button><Link href='/pages/signin'>Already have an account?</Link></button>
      <button onClick={signInWithGoogle} ><AiOutlineGoogle size={30} /></button>
    </div >
  )
}

export default SignUp
