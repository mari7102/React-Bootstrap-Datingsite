import React from "react";
import "../Registrer/Registrer.css";

function Registrer() {
  return (
    <div className="container-fluid bg_registrer ">
      <h3 className="text-center p-3">Opret profil</h3>

      <div className="row justify-content-center p-3">
        <section className="col-lg-5 kontakt_bar_bg py-3 ">
          <div className="col-12 text-center mt-2 mb-2">
            <img
              className="mx-auto d-block"
              src="/Assets/Profiler/Profilbillede.png"
              alt="Profilbillede"
              className="avatar"
            />
            
          </div>
         

          <form>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email.."
                  required
                />
              </div>
              <div className="form-group col-md-6">
                <label for="inputPassword4" className="control-label">
                  Kodeord
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Min 6 tegn"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label for="inputAddress">Address</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="Vibevænget 32.."
                required
              />
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">By</label>

                <input
                  type="text"
                  className="form-control"
                  id="inputCity"
                  required
                />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">Land</label>
                <select id="inputState" className="form-control">
                  <option selected>Vælg...</option>
                  <option>Danmark</option>
                  <option>Norge</option>
                  <option>Sverige</option>
                  <option>Tyskland</option>
                </select>
              </div>

              <div className="form-group col-md-2">
                <label for="inputZip">Postnummer</label>
                <input
                  type="text"
                  className="form-control control-label"
                  id="inputZip"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label for="cc-number" className="control-label mb-1">
                Card number
              </label>
              <input
                id="cc-number"
                name="cc-number"
                type="tel"
                className="form-control cc-number identified visa"
                required
                autocomplete="off"
              />
              <span className="invalid-feedback">
                Enter a valid 12 to 16 digit card number
              </span>
            </div>

            <div className="row">
              <div className="col-6">
                <div className="form-group">
                  <label for="cc-exp" className="control-label mb-1">
                    Udløbsdato
                  </label>
                  <input
                    id="cc-exp"
                    name="cc-exp"
                    type="tel"
                    className="form-control cc-exp"
                    required
                    placeholder="MM / YY"
                    autocomplete="cc-exp"
                  />
                  <span className="invalid-feedback">
                    Enter the expiration date
                  </span>
                </div>
              </div>

              <div className="col-6">
                <label for="x_card_code" className="control-label mb-1">
                  CVV
                </label>
                <div className="input-group">
                  <input
                    id="x_card_code"
                    name="x_card_code"
                    type="tel"
                    className="form-control cc-cvc"
                    required
                    autocomplete="off"
                  />

                  <span className="invalid-feedback order-last">
                    Enter the 3-digit code on back
                  </span>
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span
                        className="fa fa-question-circle fa-lg"
                        data-toggle="popover"
                        data-container="body"
                        data-html="true"
                        data-title="CVV"
                        data-content="<div className='text-center one-card'>The 3 digit code on back of the card..<div className='visa-mc-cvc-preview'></div></div>"
                        data-trigger="hover"
                      ></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="custom-file mb-3">
              <input type="file" className="custom-file-input" id="customFile" />
              <label className="custom-file-label" for="customFile">
                Vælg dit profilbillede
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-outline-dark btn-m btn-block"
            >
              Opret profil
            </button>
          </form>
        </section>
      </div>
    </div>
  );
}

export default Registrer;
