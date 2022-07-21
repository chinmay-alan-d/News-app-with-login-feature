import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext"

export const Restrict = ({children}) =>{
    const auth = useAuth();
    if(!auth.name){
        return <Navigate to="/login"/>
    }
    return children
}