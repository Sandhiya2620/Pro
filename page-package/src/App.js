
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';

const App = () => {
  return (
    
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          </Routes>
      </div>
    
  );
}

export default App;
