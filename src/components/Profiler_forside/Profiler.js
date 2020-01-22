import React, { useState } from "react";
import "./Profiler.css";

const Profil = () => {
  const [profiler] = useState([
    {
      imgProfil: "Poul.jpg",
      id: 1,
      titel: "Poul",
      fyldetxt: "42 år, København"
    },
    {
      imgProfil: "Christina.jpg",
      id: 2,
      titel: "Christina",
      fyldetxt: "28 år, Odense"
    },
    { imgProfil: "Anne.jpg", id: 3, titel: "Anne", fyldetxt: "42 år, Esbjerg" },
    { imgProfil: "Casper.jpg", id: 4, titel: "Casper", fyldetxt: "38 år Århus" }
  ]);

  const alleProfiler = profiler.map(p => {
    return (
      <section className="col-lg-3 col-12 mt-3" key={p.id}>
        <img
          className="img-fluid"
          src={"/Assets/Profiler/" + p.imgProfil}
          alt="Profiler"
        />
        <br />
        <h3 className="profil__h3">{p.titel}</h3>
        <p className="profil__p">{p.fyldetxt}</p>
      </section>
    );
  });

  return (
    <div className="col-sm-12 col-lg-12 col-md-12 profiler_bg">
      <div className="row">
        <section className="col-12">
          <h2 className="text-center pt-5">Vores nyeste medlemmer</h2>
        </section>
      </div>

      <div className="row justify-content-center text-center">
        <section className="col-lg-8 col-md-6 col-sm-12 bg-white m-4">
          <div className="row">{alleProfiler}</div>
        </section>
      </div>
    </div>
  );
};

export default Profil;
