// index.js or App.js (where you render your App component)
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import App from './App';
import { Navbar } from './components/Navbar';

ReactDOM.render(
    <BrowserRouter>
        <App />
        <Navbar />
    </BrowserRouter>,
    document.getElementById('root')
);
