/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firease/firease.config";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null) 
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [autoUpdate, setAutoUpdate] = useState(false)
    const provider = new GoogleAuthProvider();



    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const  userLogin =(email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }


    
    const googleLogin = () =>{
        return signInWithPopup(auth, provider)
    }



    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }


    // github
    const gitHubProvider = new GithubAuthProvider();
    // gitHubProvider.addScope('user:email')
    const gitHubLogin = () =>{
        setLoading(true)
        return signInWithPopup(auth, gitHubProvider)
    }




    useEffect(()=>{
        
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            console.log('user in tha state changed', currentUser);
            setUser(currentUser);
            setLoading(false);
            
        })
        return () =>{
            unSubscribe();
        }
    },[autoUpdate])


    
    // update user profile
    const updateUserProfile = (name, image) =>{
        return updateProfile(auth.currentUser, {
            displayName: name, 
            photoURL: image
          })
    }


    
    const info = {
        user,
        createUser,
        userLogin,
        googleLogin,
        logOut,
        loading,
        setAutoUpdate,
        updateUserProfile,
        gitHubLogin
        

    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );

};

export default AuthProvider;