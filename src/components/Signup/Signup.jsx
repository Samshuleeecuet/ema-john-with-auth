import React from 'react';
import '../Login/login.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Signup = () => {
    const [err,setErr] = useState("");
    const {createUser} = useContext(AuthContext);
    const handleSignup = (e) =>{
        e.preventDefault();
        setErr("");
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;

        if(password !== confirmPassword){
            setErr("Password Not Matched")
            return
        }else if(password.length<6){
            setErr("Password Must Be 6 Character")
            return
        }
        createUser(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error=> {
            setErr(error.message);
        })
    }
    return (
        <div>
            <div className='form-container'>
            <h2 className='form-title'>Please Sign Up</h2>
            <form onSubmit={handleSignup}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email"placeholder='Your Email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type="password" name="password"  placeholder='Your password' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Confirm Password</label>
                    <input type="password" name="confirmPassword" placeholder='Your password' required/>
                </div>
                <div><h4><small>{err}</small></h4></div>
                <button type="submit">Sign Up</button>
            </form>
            <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
        </div>
        </div>
    );
};

export default Signup;