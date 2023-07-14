import { createContext, useContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.init"
import axios from "axios";

const AppAuthContext = createContext()

const AppAuthContextProvider = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    const auth = getAuth(app)

    // create user with email and password
  const createUser = (email, pass) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  // sing in with email and password
  const signin = (email, pass) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  // logout function
 const logOut = () => {
    return signOut(auth);
  };

  // observe auth state change
  useEffect(() => {
    // setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log('auth state change', currentUser);
      if(currentUser){
        // console.log(currentUser)
        axios.post('https://pinak-server.vercel.app/api/jwt', {email: currentUser.email})
        .then(data =>{
            // console.log(data.data.token)
            localStorage.setItem('access-token', data.data.token)
            setLoading(false);
        })
    }
    else{
      // if user not found the token will remove
        localStorage.removeItem('access-token')
    }
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);


    return (
        <AppAuthContext.Provider value={{
            createUser,
            loading,
            setLoading,
            logOut,
            user,
            signin
        }}>
            {children}
        </AppAuthContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppAuthContext)
}

export { AppAuthContext, AppAuthContextProvider }