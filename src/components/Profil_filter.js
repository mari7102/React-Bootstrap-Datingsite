import React, { useState, useEffect } from "react";
import "../components/Profil_filter/Profil_filter.css"
import { NavLink } from "react-router-dom";


// Denne lavet om til hooks: https://github.com/lyhd/reactjs/blob/react-dropdown-filter/src/index.js

function Profil_filter() {
  // ----- STATE ---------------------------------------------------------

  const [profiles, setProfiles] = useState([]);
  // const [gender, setGender] = useState("");
  // const [city, setCity] = useState("");

  const [searchkey, setSearchkey] = useState({
    gender: "",
    city: ""
  });

  // Fyld state med courses fra fil
  useEffect(() => {
    const p = require("./Profil_filter/profilerne.json");
    setProfiles(p);
  }, []);

  // ----- Events ---------------------------------------------------------

  // const handleSubmitCourse = event => {
  //   event.preventDefault();
  //   alert("Your selected value is: " + course);
  // };

  // Søg gender
  const handleChangeGender = event => {
    //console.log(event.target.value);
    setSearchkey({ ...searchkey, gender: event.target.value });
  };

  // Søg city
  const handleChangeCity = event => {
    //console.log(event.target.value);
    setSearchkey({ ...searchkey, city: event.target.value });
  };

  // ----- Funktion til at udtrække unikke i et array --------------------------------------

  const getUnique = (arr, comp) => {
    // OBS! Dette er den oprindelige - virker fint - men lidt for kompliceret:
    // const unique = arr.map(e => e[comp]) //store the comparison values in array
    //   // store the keys of the unique objects
    //   .map((e, i, final) => final.indexOf(e) === i && i)
    //   // eliminate the dead keys & store unique objects
    //   .filter(e => arr[e])
    //   .map(e => arr[e]);

    // OBS! Denne er noget mere simpel - udnytter javascripts filter-metode (men gør det samme som den udkomm. herover):
    const unique = arr.filter(
      (arr, index, slf) => index === slf.findIndex(t => t[comp] === arr[comp])
    );

    return unique;
  };

  // ----- Alt det andet ----------------------------------------------------------------------------

  // courses hentes fra state (som igen kommer fra en fil)
  // Udtræk unikke gender
  const uniqueGender = getUnique(profiles, "gender");
  const uniqueCities = getUnique(profiles, "city");

  // Når der er valgt noget i dropdown så udtræk/vis kun profiler som matcher valget

  const filterDropdown = profiles.filter(function(item) {

    // Denne er true eller false - hvis der i if-helvedet ikke er et match så ender den med false
    let resultat = true;

    // Looper 2 gange ... først gender ... så cityt
    for (var key in searchkey) {

      // HVIS der er udfyldt en searchkey ... først gender ... bagefter city ... så tjekker vi om city/gender matcher
      if (searchkey[key]) {

        if (item[key] === searchkey[key] && resultat) {
          resultat = true;
        } else {
          resultat = false;
        }

      }
    }
    return resultat; // returnerer true (personen er med i hulen) eller false (personen bliver ikke vist)
  });

  return (
    <div className="App">
      <div>
        {/* <form className="p-3" onSubmit={handleSubmitCourse}> */}

        <label>
          Vælg køn <br />
          <select className="dropdown_bg"  onChange={handleChangeGender}>
            {uniqueGender.map(p => (
              <option key={p.id} value={p.gender}>
                {p.gender}
              </option>
            ))}
          </select>
        </label>

        <label className="text-center p-lg-4 p-md-3">
          Vælg by <br />
          <select className="dropdown_bg" onChange={handleChangeCity}>
            {uniqueCities.map(p => (
              <option key={p.id} value={p.city}>
                {p.city}
              </option>
            ))}
          </select>
        </label>

        <div>
          <div className="row justify-content-center">
            {filterDropdown.map(p => (
              <div key={p.id} style={{ margin: "10px" }}>
                <section className="col-12">
                <NavLink className="nav-link" to={"/About_profil/" + p.id}>
                  <img
                    className="img-fluid"
                    src={"/Assets/Profiler/" + p.imgProfil}
                    alt="Profiler"
                  />
                </NavLink>
                  <h3>{p.name}</h3>
                  <p>
                    {p.age}, {p.city}{" "}
                  </p>
                  
                </section>
              </div>
            ))}
          </div>
        </div>
        {/* </form> */}
      </div>
    </div>
  );
}

export default Profil_filter;
