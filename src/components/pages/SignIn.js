
import React from 'react';
import './style/login.css' ;
//import './style/signin.css' 
import { Link } from 'react-router-dom';
import { FaUser, FaLock } from "react-icons/fa";
import { Navbar } from '../Navbar';
export const SignIn = () => {
      return (
            <>
             <div className='wrapper'>
             {/* <div className='wrapper' style={{backgroundImage: "src\components\pages\pic.avif"}} >
             */}
                <form action="">
                <h2>Login</h2> 
                    
                    <div className='input-box'>
                        <input type='text' placeholder='Username' required/>
                        <FaUser className='icon' />
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required/>
                        <FaLock className='icon'/>
                    </div>
                    <div className='remember-forgot'>
                        <label>
                            <input type="checkbox"/>
                            Remember me
                        </label>
                       
                    </div>
                    <b><Link to="/reset" id="forget">Forgot password</Link></b>
                    <button type="submit"> <Link to="/serv"><b id="login-btn">Login</b></Link></button>
                    <div className="register-link">
                        <p>Don't have an account? <Link to="/signup">Register</Link></p>
                    </div>
                </form>
            </div>
          
            </>
        );
        
    };
    export default  SignIn;