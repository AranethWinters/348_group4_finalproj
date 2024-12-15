'use client'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '@/app/lib/firebase/clientApp'
import { doc, getDoc, setDoc } from "firebase/firestore"
import { User } from 'firebase/auth';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        if (user.emailVerified) {
          const userDoc = await getDoc(doc(db, "users", user.uid));
          if (!userDoc.exists()) {
            const registrationData = localStorage.getItem('registrationData')
            const {
              firstName = '',
              lastName = '',
              middleName = '',
            } = registrationData ? JSON.parse(registrationData) : {};

            await setDoc(doc(db, users, user.uid), {
              firstName,
              lastName,
              middleName,
              email: user.email,
            })

            localStorage.removeItem('registrationData');
          }
          setUser(user);
          router.push('/pages/dashboard')
        } else {
          setUser(null);
          router.push('/pages/home')
        }
      } else {
        setUser(null);
        router.push('/pages/home')
      }
      setLoading(false)
    }
    )
    return () =>
      unsubscribe()

  }, [router]);
  if (loading) {
    return <p>Loading</p>
  }
  return (
    <div>
      {user ? "Redirecting to dashboard..." : "Redirecting to home page..."}
    </div>
  )
}

export default Home;
