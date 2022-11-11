// Context is the environment that we use to store state that we want to use globally
    // import
    // initialize
    // provide
    // export

//import
import React, { createContext, useContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, 
    onAuthStateChanged,
    signOut, 
signInWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase"

//initialize
const UserContext = createContext()

//provide
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})
    
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        console.log(currentUser)
        setUser(currentUser)
      })
      return () => {
        unsubscribe()
      }
    }, [])
    

    //pass functions for context
    return (
        <UserContext.Provider value={{createUser, user, signIn, logOut}}>
            {children}
        </UserContext.Provider>
    )
}

//export
export const UserAuth = () => {
    return useContext(UserContext)
}