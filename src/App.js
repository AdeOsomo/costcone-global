import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Button from './components/Buttons';
import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Technologies from './Pages/Technologies';
import Partners from './Pages/Partners';
import Company from './Pages/Company';

function App() {
  const history = useNavigate();

  //function to handle site navigation
  const siteNav = (path) => {
    history.push(path);
  };

  return (
    

            <div className="App">
              <h1>Welcome to Costcone Global Services Portals</h1>
           </div>
  );
}

export default App;
