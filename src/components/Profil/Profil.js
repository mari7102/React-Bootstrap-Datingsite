import React from "react";
import "../Profiler_forside/Profiler.css";
import Number_list from "../Number_list/Number_list";
import Profil_filter from "../Profil_filter";

const Profil = () => {
  return (
    <div className="container col-12 col-lg-12 col-md-12 profiler_bg">
      <div className="row">
        <section className="col-12">
          <h1 className="text-center p-3">Profiler</h1>
        </section>
      </div>

      <div className=" row justify-content-center p-3">
        <section className="col-lg-8 col-md-6 col-6 bg-white ">

          <Profil_filter />

          <Number_list />
        </section>
      </div>
    </div>
  );
};

export default Profil;
