'use client'
import { useState, useEffect } from 'react';
import { redirect, useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from './lib/firebase/clientApp.js'
import { doc, getDoc, setDoc } from "firebase/firestore"

const Home = () => {
  return (
    <div onLoad={redirect("/pages/home")}>
    </div>
  )
}

export default Home;
