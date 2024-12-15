'use client'
import { useAuth } from '@/app/lib/firebase/AuthContext';
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth, db } from '@/app/lib/firebase/clientApp';
import { doc, setDoc, getDoc } from 'firebase/firestore';

const SignInPage = () => {
  const { email, setEmail } = useState(" ");
  const { password, setPassword } = useState("");
  const { error, setError } = useState < String | null > (null);
  const router = useRouter();
  const { signInWithGoogle } = useAuth();

  //Login function
  const handleLogin = async (event) => {
    event.preventDefault;
    setError(null);

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      if (user.emailVerified) {
        const registrationData = localStorage.getItem("registrationData")
        const {
          userName = '',
          firstName = '',
          middleName = '',
          lastName = '',
        } = registrationData ? JSON.parse(registrationData) : {};

        const userDoc = await getDoc(doc(db, "Users", user.uid));
        if (!userDoc.exists()) {
          await setDoc(doc(db, "Users", user.uid), {
            userName,
            firstName,
            middleName,
            lastName,
            email: user.email,
          });
        }
        router.push('/dashboard');
      } else {
        setError("Please verify your login credentials.")
      }
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unknown error occured")
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <label htmlFor='userEmail'>Enter Email</label>
        <input type='email' value={email} id='email' className='text-black bg-pink-900' onChange={(e) => setEmail(e.target.value)} required></input>
        <label htmlFor='userPass'>Enter Password</label>
        <input type='password' id='password' className='text-black bg-pink-900' value={password} onChange={(e) => setPassword(e.target.value)} required ></input>
        <input type='submit' value='Log In'/>
      </form>
      <button><Link href='/pages/signup'>Register</Link></button>
      <button onClick={signInWithGoogle} ><AiOutlineGoogle size={30} /></button>
    </div>
  )
}

export default SignInPage
