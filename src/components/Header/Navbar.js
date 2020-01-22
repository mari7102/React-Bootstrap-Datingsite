import React from "react";
import { NavLink, useHistory } from 'react-router-dom';
import "../Header/Navbar.css";
import Logo from "../../img/Logo_ny.png";


const Navbar = () => {

  let history = useHistory();

  return (
    <nav className="navbar navbar-expand-lg navbar-light navbar_bg shadow">
      <a className="navbar-brand" href="/#">
        <img className="img-fluid offset-2" src={Logo} alt="ALT" />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto offset-8">
          <li className="nav-item">
            <NavLink className="nav-link h4" to="/">
              Forside <span className="sr-only">(current)</span>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link  h4" to="/Profil/Profil">
              Profiler
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink className="nav-link h4" to="/Kontakt/Kontakt">
              Kontakt
            </NavLink>
          </li>

          <form className="form-inline ml-4 mb-2">

          <li>
          <button className=" btn btn-m btn-outline-dark" onClick={() => { history.push('/Login/Login') }}>Log ind</button>
          </li>
          
          </form>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
