import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Technologies from './Pages/Technologies';
import Partners from './Pages/Partners';
import Company from './Pages/Company';
import Careers from './Pages/Careers';
import Contact from './Pages/ContactUs';


const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contactus" element={<Contact />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
