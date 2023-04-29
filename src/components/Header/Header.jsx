import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    const handleLogout = () =>{
        logOut()
        .then(result=>{})
        .catch(err=>console.log(err))
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/login">Log in</Link>
                {user && <span>Welcome {user.email} <button onClick={handleLogout}>Log Out</button></span>}
            </div>
        </nav>
    );
};

export default Header;