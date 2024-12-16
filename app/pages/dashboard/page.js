'use client'
import React, {useState, useEffect} from 'react';
import { useRouter } from 'next/navigation';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../lib/firebase/clientApp';

const Dashboard = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);

  const fetchUserData = async() => {
    try {
      auth.onAuthStateChanged(async(user)=>{    
        console.log(user);
        const docRef = doc(db, "Users", user.uid);
        const snapshot = await getDoc(docRef);
        if (snapshot.exists){
          setUserDetails(snapshot.data);
        } else {
          console.log('User is not logged in')
        }
      }
    )
    } catch (error) {
      console.log(error.message)
    }
  };

  useEffect(() => {
    fetchUserData();
  },[])

  async function handleLogout() {
    try {
      await auth.signOut()
      console.log("User signed out successfully")
      router.push('/pages/home')
    } catch (error) {
      
    }
  }

  return (
    <div>
      {userDetails? (
        <>
        <h3>
          Welcome, {userDetails.userName}!
        </h3>
        <div>
          <button onClick={handleLogout}>LogOut</button>
        </div>
        </>
      ):(
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Dashboard