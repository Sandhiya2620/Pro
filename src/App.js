
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// App.js
import {Navbar} from './components/Navbar';
import { SignIn } from './components/pages/SignIn';
import { Home } from './components/pages/Home';
import { SignUp } from './components/pages/SignUp';
import ResetPasswordForm from './components/pages/Reset';
import LogIn from './components/pages/LogIn';
// import ServiceWorker from './components/pages/Service';
import Services from './components/pages/Service';

function App() {
  return (
     <>
    
      <BrowserRouter>
      <Navbar/>
       <Routes>
        <Route path="/home" element={<Home />} />
       <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/reset" element={<ResetPasswordForm/>} />
       {/* <Route path="/service" element={<ServiceWorker/>} /> */}
       <Route path="/serv" element={<Services />} />
      

       </Routes>
     </BrowserRouter>
     </>
  )
  
}

export default App;
