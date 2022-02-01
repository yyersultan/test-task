import { Button } from "@mui/material";
import   TextField  from "@mui/material/TextField";
import { useEffect } from "react";
import { useForm } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../store/actions/auth";

export const Login = () => {
    const dispatch = useDispatch();
    const {isLoading,isAuth,error} = useSelector(state => state.auth);
    const navigate = useNavigate();

    const {register,handleSubmit,formState:{errors}} = useForm();
    const onSubmit = (form) => {
        console.log(form);
        dispatch(login(form.username,form.password));
    }
    
    useEffect(() => {
        const user = localStorage.getItem('isAuth');
        console.log(user);
        if(isAuth || user){
            return navigate('/profile')
        }
    },[isAuth]);
    const validation = {required:true,maxLength:30,minLength:3}
    return (
        <div className="Login">
            <form className="LoginForm" onSubmit={handleSubmit(onSubmit)}>
                <TextField  label='Username' {...register('username',{...validation})}/>
                <div className="error-message"> {errors.username && 'Please Check Username '}</div>

                <div className="marginBlock"/>

                <TextField  label='Password' type={'password'} {...register('password',{...validation})}/>
                <div className="error-message"> {errors.password && 'Please Check Password '}</div>
                
                <div className="error-message">{error && error}</div>
                <div className="marginBlock"/>
                <Button disabled={isLoading} variant="contained" type="submit">Log in</Button>
                
            </form>
        </div>
    )
}