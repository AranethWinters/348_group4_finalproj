'use client'
import { createContext, useContext, useEffect, useState } from "react"
import { onAuthStateChanged, signInWithPopup, GoogleAuthProvider, signOut, signInWithCredential, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './clientApp.js';
import { redirect } from 'next/navigation.js'

const AuthContext = createContext();

export function AuthProvider({children}) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
        });
        return () => unsubscribe();
    }, []);
    
    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        const userCred = signInWithPopup(auth, provider);
        return redirect('/pages/dashboard');
    };

    const signIn = (auth, email, password) => {
        return signInWithEmailAndPassword(auth, email, password).then(result);
    }

    const logOut = () => {
        return signOut(auth)
    };

    return (
        <AuthContext.Provider value={{user, signIn, signInWithGoogle, logOut}}>
            {children}
        </AuthContext.Provider>
    );
};

export function useAuth() {
    return useContext(AuthContext);
}