import axios from "axios";
import { redirect } from "react-router-dom";

export const isUserLoged = () => {
    const token = localStorage.getItem("token");
    return token
}

export const authLoader = () => {
    const token = isUserLoged()
    if(!token){
        redirect("/")
    }
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
    return token
}