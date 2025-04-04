import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Login.css';
import { FaGoogle, FaGooglePay, FaGooglePlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

function Login() {
    const {login} = useAuth();
    const { googleSignIn } = useAuth();

    const [email,setEmail]= useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
     const navigate=useNavigate();
    const handleSubmit = async()=>{
        await googleSignIn();
        navigate('/');
        
    };
    return (
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            {/* {error && <p className="error-message">{error}</p>} */}
            <form className="login-form" onSubmit={handleSubmit}>
                {/* <input
                    className="login-input"
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                />
                <input
                    className="login-input"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                />
                <button className="login-button" type="submit">Login</button> */}
                <button className="google-signin-button" onClick={handleSubmit}>
                    <FaGoogle/>    Sign in with Google</button>

            </form>
        </div>

    )
}
export default Login;
