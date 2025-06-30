import React from "react"
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import { SplashScreen } from "./views/SplashScreen"
import { Home } from "./views/Home";
import { Contact } from "./views/Contact";
import { Portraits } from "./views/Portraits";
import { Places } from "./views/Places";
import { Footer } from "./components/Footer";
import NavBar from "./components/NavBar";
import './App.css';


const AppContent = () => {
  const location = useLocation()
  return (
    <>
      <Routes>
        {/*
          These routes will include the NavBar directly within their element prop.
          If NavBar should always appear with these, this is fine.
          If NavBar should be part of a larger layout, consider a Layout component.
        */}
        <Route path='/Home' element={<React.Fragment><NavBar /><Home /></React.Fragment>} />
        <Route path='/Portraits' element={<React.Fragment><NavBar /><Portraits /></React.Fragment>} />
        <Route path='/Places' element={<React.Fragment><NavBar /><Places /></React.Fragment>} />
        <Route path='/Contact' element={<React.Fragment><NavBar /><Contact /></React.Fragment>} />
      </Routes>
      {/* Conditionally render the Footer based on the current path */}
      {location.pathname !== '/' && <Footer />}</>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<SplashScreen />} />
        <Route path='/*' element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App
