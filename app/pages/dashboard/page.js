'use client'
import React, {useState, useEffect} from "react";
import { auth, db} from './../../lib/firebase/clientApp'
import {doc, getDoc,  updateDoc } from 'firebase/firestore'
import { useRouter } from "next/navigation";
import style from './../../styles/dashboard.module.css'

const UserProfile = () => {
  const router = useRouter();
  const [userDetails, setUserDetails] = useState(null);
  const [userName, setUserName] = useState('');
  const user = auth.currentUser;

  const fetchUserData = async() => {
    try {
      auth.onAuthStateChanged(async(user)=>{    
        console.log(user);
        console.log(user.uid)
        const docRef = doc(db, "Users", user.uid);
        const snapshot = await getDoc(docRef);
        console.log(snapshot)
        if (snapshot.exists){
          setUserDetails(snapshot.data());
          console.log(userDetails)
        } else {
          console.log('User is not logged in')
        }
      }
    )
    } catch (error) {
    }
  };

  const handleEdit = async() => {
    try {
      const docRef = doc(db, "Users", user.uid);
      console.log(user.uid)
      await updateDoc(docRef, {
        userName: userName,
      })
      router.push('/')
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    fetchUserData();
  },[])

  async function handleLogout() {
    try {
      await auth.signOut()
      console.log("User signed out successfully")
      router.push('/pages/home')
    } catch (error) {
      console.log(error.message)
    }
  }
  return (
      <main className={`${style.user_profile}`}>
        {userDetails ? (<div>
        <div className={`${style.profile_header}`}>
          <img
            src="https://images.unsplash.com/photo-1693287728941-2e0125a67f90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="User"
            className={`${style.profile_image}`}
          />
          <div className={`${style.user_info}`}>
            <h2 className={`${style.username}`}>{userDetails.firstName} {userDetails.lastName}</h2>
            <p className={`${style.user_tag}`}>{userDetails.userName}</p>
          </div>
          <button onClick={handleEdit} className={`${style.edit_button}`}>Edit</button>
        </div>

        <div className={`${style.user_form}`}>
          <div className={`${style.form_group}`}>
            <label>Username: </label>
            <input type="text" placeholder="Username" onChange={(e) => setUserName(e.target.value)}/>
          </div>
        </div>

        <div>
          <input type="button" onClick={handleLogout} value="Log Out" className={`${style.edit_button}`}></input>
        </div>
          <br></br>
        <div className="shipping-details">
          <h3>Shipping Details</h3>
          <hr></hr>
          <div className="address">
            <span>⭐ Address 1</span>
            <p>4456, Lorem Ipsum Street, Capiz</p>
          </div>
          <div className="address">
            <span>⭐ Address 2</span>
            <p>6621, 4th Street, New York</p>
          </div>
        </div>
        </div>): (<p>Loading...</p>)}
        
      </main>
  );
};

export default UserProfile;
