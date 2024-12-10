"use client"
import { useAuth } from '@/app/lib/firebase/AuthContext';
import Link from 'next/link'
import React from 'react'
import { AiOutlineGoogle } from "react-icons/ai";

const SignInPage = () => {
  const {signIn} = useAuth();
  return (
    <div>
        <form>
            <label htmlFor='userEmail'>Enter Email</label>
            <input type='email' id='SignInEmail' className='text-black bg-pink-900'></input>
            <label htmlFor='userPass'>Enter Password</label>
            <input type='text' id='SignInPass' className='text-black bg-pink-900'></input>
            <button><Link href='/pages/dashboard'>SignIn</Link></button>
            <button><Link href='/pages/signup'>Register</Link></button>
            <button onClick={signIn} ><Link href=''><AiOutlineGoogle size={30}/></Link></button>
        </form>
    </div>
  )
}

export default SignInPage