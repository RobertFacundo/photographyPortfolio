import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SplashScreen } from "./views/SplashScreen"
import { Home } from "./views/Home";
import { Contact } from "./views/Contact";
import { Portraits } from "./views/Portraits";
import { Places } from "./views/Places";
import NavBar from "./components/NavBar";
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path="/Home" element={<React.Fragment><NavBar /><Home /></React.Fragment>} />
        <Route path="/Portraits" element={<React.Fragment><NavBar /><Portraits /></React.Fragment>} />
        <Route path="/Places" element={<React.Fragment><NavBar /><Places /></React.Fragment>} />
        <Route path="/Contact" element={<React.Fragment><NavBar /><Contact /></React.Fragment>} />
      </Routes>
    </Router>
  );
}

export default App
