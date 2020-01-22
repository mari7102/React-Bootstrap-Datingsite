import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import Profil from "./components/Profil/Profil";
import Kontakt from "./components/Kontakt/Kontakt";
import Login from "./components/Login/Login";
import AboutProfil from './components/About_profil/About_profil';
import Registrer from './components/Registrer/Registrer';


function App() {
  return (
    <BrowserRouter>
      
        <Navbar />

        <Route exact path="/" component={Home} />
        <Route path="/Profil/Profil" component={Profil} />
        <Route path="/Kontakt/Kontakt" component={Kontakt} />
        <Route path="/Login/Login" component={Login} />
        <Route path="/About_profil/:profilid" component={AboutProfil} />
        <Route path="/Registrer" component={Registrer} />


        <Footer />
      
    </BrowserRouter>
  );
}

export default App;
