'use client'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineGoogle } from "react-icons/ai";
import { signInWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from './../../lib/firebase/clientApp';
import { toast } from 'react-toastify';

const SignInPage = () => {
  const [email, setEmail ] = useState(" ");
  const [ password, setPassword] = useState("");
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
    <div className='flex content-center justify-center align-center pt-[12%]'>
      <div className='flex flex-col items-center justify-center content-center border-[3px] border-gray-500 shadow-md w-auto p-5 rounded-lg'>
      <form onSubmit={handleLogin} className='flex flex-col border-1 border-gray-100 h-full w-full justify-center items-center align-center content-center'>
        <div className=' h-full flex-col justify-center content-center align-center items-center'>
            <label htmlFor='email'>Email: </label>
            <input type='email' value={email} id='email' className='text-black bg-pink-900' onChange={(e) => setEmail(e.target.value)} required></input>
            </div>
        <div>
            <label htmlFor='password'>Password: </label>
            <input type='password' id='password' className='text-black bg-pink-900' value={password} onChange={(e) => setPassword(e.target.value)} required ></input>
        </div>
          <input type='submit' value='Log In' className='self-center'/>
      </form>
      <div className='flex flex-col justify-center content-center items-center'>
        <button><Link href='/pages/signup' className='font-bold underline'>Register here</Link></button>
        <button onClick={signInWithGoogle} ><AiOutlineGoogle size={30} /></button>
      </div>
    </div>
    </div>
  )
}

export default SignInPage
