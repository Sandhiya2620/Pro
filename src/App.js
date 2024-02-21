
import { Route, Routes } from 'react-router-dom';
import './App.css';

// App.js
import {Navbar} from './components/Navbar';
import { SignIn } from './components/pages/SignIn';
import { Home } from './components/pages/Home';
import { SignUp } from './components/pages/SignUp';


function App() {
  return 
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>} />

      </Routes>
     
    </div>
  
}

export default App;
