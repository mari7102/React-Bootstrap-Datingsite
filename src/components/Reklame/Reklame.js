import React from "react";
import "../Reklame/Reklame.css";

const Reklame = () => {
  return (
    <div className="container-fluid cover_row">
    
      <div className="row align-items-center h-50">
        <div className="col-4 mr-auto">
          <section className="card mb-3">
            <h1 className="text-center" >
              6575 <br></br> Medlemmer
            </h1>
          </section>
        </div>
      </div>

      
      <div className="row align-items-center h-30">
        <div className="col-4 mr-auto">
          <section className="card mb-3">
            <h1 className="text-center h-30">
              85% <br></br> Finder kærligheden <br></br>
              på True Match
            </h1>
          </section>
          
        </div>
       
      </div>
    </div>
    
  );
};

export default Reklame;
