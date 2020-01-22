import React from "react";
import "../Footer/Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="page-footer font-small pt-2 footer_bg text-white Footer-main">
        <div className="col-12 text-md-left text-center">
          <div className="row">
            <div className="col-lg-4 col-md-12 col-sm-12 text-center">
              <h5 className="text-uppercase ">Kontakt</h5>
              <p>Tlf. +45 40 40 44 45</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-3" />

            <div className="col-lg-4 col-md-12  col-sm-12 mb-md-0 mb-3 text-center">
              <ul className="ul">
                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/Registrer/Registrer">
                    Tilmeld dig her
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/Login/Login">
                    Log ind
                  </NavLink>
                </li>

                <li className="nav-item">
                  <NavLink className="nav-link text-white" to="/Profil/Profil">
                    Profiler
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-4 justify-content-center">
            
              <form className="input-group mt-3 ">
                <input
                  type="text"
                  className="form-control form-control "
                  placeholder="Email@hotmail.com"
                  aria-label="Your email"
                  aria-describedby="basic-addon2"
                />
                <div className="input-group-append footer_tilmeld">
                  <button
                    className="btn text-center text-light"
                    type="button"
                  >
                    Tilmeld
                  </button>
                </div>
              </form>
              
            </div>
          </div>
        </div>

        <hr className="clearfix w-100 d-md-none pb-3" />

        <div className="footer-copyright text-center text-dark py-3">
          © 2019 Copyright:
          <p>True Match</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
