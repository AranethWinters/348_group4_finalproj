'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/app/lib/firebase/clientApp';
import { useAuth } from '@/app/lib/firebase/AuthContext';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signInWithGoogle} = useAuth();
  return (
    <div>
      <form>
        <label htmlFor='userEmail'>Enter Email</label>
        <input type='email' value={email} id='SignUpEmail' className='text-black bg-pink-900' onChange={(e) => setEmail(e.target.value)} required></input>
        <label htmlFor='userPass'>Enter Password</label>
        <input type='text' id='SignUpPass' className='text-black bg-pink-900' value={password} onChange={(e) => setPassword(e.target.value)} required ></input>
        <button><Link href='/pages/dashboard'>SignUp</Link></button>
      <button><Link href='/pages/dashboard'>Already have an account?</Link></button>
    </form>
    <button onClick={signInWithGoogle} ><Link href=''><AiOutlineGoogle size={30}/></Link></button>
    </div >
  )
}

export default SignUp