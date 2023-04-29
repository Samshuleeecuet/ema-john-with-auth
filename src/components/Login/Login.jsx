import React, { useContext, useState } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
const Login = () => {
    const [show,setShow] = useState(false);
    const {signIn}= useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || '/';

    const handleLogin= (e) =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email,password)
        .then(result=>{
            const loggedUser = result.user;
            console.log(loggedUser);
            form.reset();
            navigate(from ,{replace:true})
        })
        .catch(err=>{
            console.log(err);
        })

    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Login</h2>
            <form onSubmit={handleLogin}>
                <div className="form-control">
                    <label htmlFor="">Email</label>
                    <input type="email" name="email" placeholder='Your Email' required/>
                </div>
                <div className="form-control">
                    <label htmlFor="">Password</label>
                    <input type={show? "text" : "password"} name="password" placeholder='Your password' required/>
                    <p onClick={()=>setShow(!show)}>
                        <small>
                            {
                                show? <h5>Hide</h5>:<h5>Show</h5>
                            }
                        </small>
                    </p>
                </div>
                <button type="submit">Login</button>
            </form>
            <p><small>New to Ema-John? <Link to="/signup">Create account</Link></small></p>
        </div>
    );
};

export default Login;