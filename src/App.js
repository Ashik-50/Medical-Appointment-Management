//App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import SecondaryNavbar from './components/SecondaryNavbar';
import Footer from './components/Footer';
import DoctorAppointmentsContainer from './Pages/DoctorAppointmentsContainer';
import DoctorList from './Pages/DoctorList';
import Results from './Pages/Results';
import About from './Pages/About';
import LandingPage from './Pages/Landingpage';
import Login from './Pages/Login.js';
import Signup from './Pages/Signup.js';
import AdminLogin from './Pages/Admin/AdminLogin.js';
import AdminDashboard from './Pages/Admin/AdminDashBoard.js';
import AdminManageDoctors from './Pages/Admin/AdminManageDoctors';
import AdminListUsers from './Pages/Admin/AdminListUsers';
const App = () => {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <SecondaryNavbar />
        <div style={{ flex: 1, padding: '20px' }}>
          <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/signup" element={<Signup />} />
            <Route path="/landing" element={<LandingPage />} />
            <Route path="/doctors" element={<DoctorList />} />
            <Route path="/results" element={<Results />} />
            <Route path="/appointments" element={<DoctorAppointmentsContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/manage-doctors" element={<AdminManageDoctors />} />
            <Route path="/admin/list-users" element={<AdminListUsers />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};
export default App;