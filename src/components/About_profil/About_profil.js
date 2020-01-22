import React, { useState, useEffect } from "react";
import "../About_profil/About_profil.css";
import { NavLink } from "react-router-dom";

const AboutProfil = props => {
  // ----- STATE ---------------------------------------------------------

  const [p, setP] = useState([]);

  // Fyld state med courses fra fil
  useEffect(() => {
    //console.log(props.match.params.profilid);

    const p = require("../Profil_filter/profilerne.json");
    setP(...p.filter(p => p.id === parseInt(props.match.params.profilid))); //props.match.params.profilid
  }, []);

  return (
    <div className=" container-fluid about_bg pt-4 pb-4 ">
      <section className="col-lg-6 offset-lg-3 bg-white ">
        <div className="row">
          <section className="col-lg-12 mt-3 text-center">
            <img
              className="img-fluid rounded"
              src={"/Assets/Profiler/" + p.imgProfil}
              alt="Profiler"
            />
          </section>
        </div>
        <div className="row justify-content-center">
          <div className="btn"><i className="far fa-comment-dots fa-lg"></i></div>
          <div className="btn"><i className=" far fa-heart fa-lg"></i></div>
        </div>

        <div className="row">
          <section className="col-lg-12 col-md-12 mt-3">
            <br />
            <p className="profil__h3">Navn: {p.name}</p>
            <p className="profil__p"> Alder: {p.age}</p>
            <p className="profil__p"> By: {p.city}</p>
            <section className="row">
              <section className="col-lg-12">
                <p className="profil__p">
                
                  Personbeskrivelse: <br></br> {p.text}
                </p>
              </section>
            </section>
          </section>
        </div>
      </section>
    </div>
  );
};

export default AboutProfil;
