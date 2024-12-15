'use client'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { User } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '@/app/lib/firebase/clientApp'

const Dashboard = () => {
  const [user, setUser] = useState('null');
  const [userName, setUserName] = useState('null');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user)=> {
      if (user) {
        setUser(user);
        const userDoc = await getDoc(doc(db, "Users", user.uid));
        if (!userDoc.exists){
          const userData = userDoc.data();
          setUserName(`${userData.userName}`);
        } else {
          router.push('/pages/home')          
        }
        setLoading(false);
      }
    })
    return () => unsubscribe();
  },[router]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/pages/home")
    } catch (error) {
      console.error("Logout error:", error)
    }
  };

  return (
    <div>
      Dashboard
      <div>
        <p>Welcome, {userName}!</p></div>
    </div>
  );
}

export default Dashboard