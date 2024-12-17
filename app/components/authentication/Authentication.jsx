'use client'
import React, {useState, useEffect} from 'react';
import {auth} from '../../lib/firebase/clientApp'
import { onAuthStateChanged } from 'firebase/auth';
import Link from 'next/link';

const Authentication = () => {
    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    useEffect(()=> {
        const listenAuth = onAuthStateChanged(auth, (user)=>{
            if (user) {
                setAuthenticatedUser(user)
            } else{
                setAuthenticatedUser(null)
            }
        })
        return() =>{
            listenAuth();
        }
    },[])

  return (
    <>
        {authenticatedUser ? (
            <>
                <li><Link href="/pages/dashboard">Dashboard</Link></li>
            </>
        )
         :(
            <>
                <li><Link href="/pages/signin">Sign In</Link></li>
                <li><Link href="/pages/signup">Register</Link></li>
            </>
        )
        }
    </>
  )
}

export default Authentication
