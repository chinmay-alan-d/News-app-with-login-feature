import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null);

export const AuthProvider = ({children}) =>{
    const [name, setName] = useState(null);
    const [userName,setUserName] = useState(null);
    const [email, setEmail] = useState(null);

    const Namelogin = (name) =>{
        setName(name);
    }

    const  Usernamelogin = (userName) =>{
        setUserName(userName);
    }

    const  Emaillogin = (email) =>{
        setEmail(email);
    }

    const logout = () => {
        setName(null);
        setEmail(null);
        setUserName(null);
    }

    return(
        <AuthContext.Provider value={{userName,name,email,Namelogin,Usernamelogin,Emaillogin,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext);
}