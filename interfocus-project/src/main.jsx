import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 

import UserRegister from './containers/user/user_register';
import Login from './containers/user/login'; // Importando o componente de Login
import Packages from './containers/packages'; // Ensure this path is correct


import SubscriptionStatus from './containers/subscription/subscription_status'; 
import SubscriptionUpdate from './containers/subscription/subscription_update'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import Home from './containers/home'; // Importando o componente Home
import Header from './components/header';
import LoggedHeader from './components/loggedHeader'; // Ensure correct casing

import Footer from './components/footer';
import { containerStyle } from './styles/globalStyles';

const App = () => {
  return (
    <Router>
        <Header />
        {/* <LoggedHeader />  */}
        <div style={containerStyle}>
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/user-register" element={<UserRegister />} />
          <Route path="/login" element={<Login />} /> 
          <Route path="/packages" element={<Packages />} />
          <Route path="/status" element={<SubscriptionStatus />} />
          <Route path="/subscription-update" element={<SubscriptionUpdate />} />
        </Routes>
        </div>
        <Footer />
    </Router>
  );
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
