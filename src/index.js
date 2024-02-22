// index.js or App.js (where you render your App component)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import { Navbar } from './components/Navbar';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import Reset from './components/pages/Reset';
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  
        <App />
     ,
    document.getElementById('root')
);
