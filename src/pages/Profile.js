import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logout } from "../store/actions/auth";

export const Profile = () => {
    const navigate = useNavigate();
    const {username,isAuth} = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const[user] = useState(() => {
        if(username){
            return username;
        }else{
            return localStorage.getItem('username');
        }
    });

    const onLogout = () => {
        dispatch(logout())
    }

    useEffect(() => {
        const isUser = localStorage.getItem('isAuth');
        
        if(!isUser){
            return navigate('/login')
        }
    },[isAuth]);
    return (
        <div>
            <h1>Welcome to Profile page</h1>
            <h2>{user} </h2>
            <Button onClick = {onLogout}>Logout</Button>
        </div>
    )
}