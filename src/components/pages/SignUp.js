import HCaptcha from '@hcaptcha/react-hcaptcha';

import './style/register.css' 

import React, { useState } from 'react';

 export const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [state, setState] = useState('');
    const [zipCode, setZipCode] = useState('');

    function onVerifyCaptcha(token) {
        if (token) {
            console.log('Token:', token);
            return true;
        } else {
            console.log('Captcha verification failed');
            return false;
        }
    }
    function formAction(e) {
        e.preventDefault();
        return onVerifyCaptcha(e)===true ? handleSubmit() : "Login failed";
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', { name, email, username, password, confirmPassword, state, zipCode });
        
    };

    return (
        <div className='form'>
            <form onSubmit={formAction}>
                    <table className='form-1'>
                        <thead>
                            <tr>
                                <th>
                                    <h2>Sign Up</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <label>Name:</label>
                                </td>
                                <td>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Email:</label>
                                </td>
                                <td>
                                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Username:</label>
                                </td>
                                <td>
                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Password:</label>
                                </td>
                                <td>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Confirm Password:</label>
                                </td>
                                <td>
                                    <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>State:</label>
                                </td>
                                <td>
                                    <input type="text" value={state} onChange={(e) => setState(e.target.value)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>ZIP Code:</label>
                                </td>
                                <td>
                                    <input type="text" value={zipCode} onChange={(e) => setZipCode(e.target.value)} required />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <HCaptcha
                                        sitekey="9e5af64f-dc1c-42fd-98de-d9c18d404a6e"
                                        onVerify={onVerifyCaptcha}
                                    />
                                </td>   
                            </tr>
                        </tbody>
                        <input class="btn btn-primary" type="submit" value="Submit"></input>

                    </table>
               
            </form>
            
        </div>
    );
};

export default SignUp;
                    
                    