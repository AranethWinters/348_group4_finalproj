'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth, db } from './../../lib/firebase/clientApp';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';

const SignInPage = () => {
  const [email, setEmail ] = useState(" ");
  const [ password, setPassword] = useState("");
  const [ error, setError ]  = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User logged in successfully");
      toast.success("User logged in successfully!", {position:'top-center'});
      router.push('/pages/dashboard')
    } catch (error) {
      console.log(error.message)
      toast.success(error.message, {position:'bottom-center'});
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
      <form onSubmit={handleLogin}>
        <label htmlFor='email'>Enter Email</label>
        <input type='email' value={email} id='email' className='text-black bg-pink-900' onChange={(e) => setEmail(e.target.value)} required></input>
        <label htmlFor='password'>Enter Password</label>
        <input type='password' id='password' className='text-black bg-pink-900' value={password} onChange={(e) => setPassword(e.target.value)} required ></input>
        <input type='submit' value='Log In'/>
      </form>
      <button><Link href='/pages/signup'>Register</Link></button>
      <button onClick={signInWithGoogle} ><AiOutlineGoogle size={30} /></button>
    </div>
  )
}

export default SignInPage
