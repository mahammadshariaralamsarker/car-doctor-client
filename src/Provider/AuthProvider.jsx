import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword,signOut , getAuth, onAuthStateChanged, signInWithCredential, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase Config";


export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] =useState(null)
    const [loading, setloading] = useState(true)


const creatUser = (email,password)=>{
    setloading(true)
    createUserWithEmailAndPassword(auth,email,password)
}
const signIn = (email,password)=>{
    setloading(true)
    signInWithEmailAndPassword(auth,email,password)
}
const logout = ()=>{
    return signOut(auth);
}
useEffect(()=>{
const unsubscribe =    onAuthStateChanged(auth,currentUser=>{
        setUser(currentUser)
        console.log('current user', currentUser)
        setloading(false)
    })
    return ()=>{
        return unsubscribe();
    }
},[])

    const allinfo ={
        user,
        loading,
        creatUser,
        signIn,
        logout,
        

    }


    return (
        <AuthContext.Provider  value={allinfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;