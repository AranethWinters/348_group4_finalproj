'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './lib/firebase/clientApp.js'
import { doc, getDoc, setDoc } from "firebase/firestore"

const Home = () => {
  const router = useRouter();
  return (
    <div onLoad={router.push("/pages/home")}>
    </div>
  )
}

export default Home;
