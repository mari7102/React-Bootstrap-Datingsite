import React from "react";

function Kontakt_bar() {
  return (
    <div className="container">
      <div className="row py-3">        

        <div className="col-sm-12 col-md-12 col-lg-6 py-4">
          <form
            action="https://formspree.io/mari7102@videndjurs.net"
            method="POST"
          >
            <div className="card col-12 rounded-5">
                <div className="kontakt_bar_bg text-dark text-center">
                  <h3>
                    <p>Kontakt os</p>
                  </h3>
                  <p className="">Hvad kan vi hjælpe dig med? </p>
                </div>
              
              <div className="card-body">
                <div className="form-group">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-user text-info"></i>
                      </div>
                    </div>
                    <input
                      type="text"
                      className="form-control fas fa-user-circle"
                      id="nombre"
                      name="name"
                      placeholder="Fulde navn"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-envelope text-info"></i>
                      </div>
                    </div>
                    <input
                      type="email"
                      className="form-control"
                      id="nombre"
                      name="_replyto"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text">
                        <i className="fa fa-comment text-info"></i>
                      </div>
                    </div>
                    <textarea
                      className="form-control"
                      placeholder="Besked"
                      required
                    ></textarea>
                  </div>
                </div>

                <div className="text-center">
                  <input
                    type="submit"
                    value="Send"
                    className="btn btn-block rounded-5 py-2 btn btn-outline-dark "
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="col-lg-6 py-4">
        <iframe className="col-12 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2250.519988185545!2d12.568911615824698!3d55.66255738052922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46525368da60adb5%3A0x36cb39594d74de78!2sIslands%20Brygge%2C%20K%C3%B8benhavn!5e0!3m2!1sda!2sdk!4v1579688153067!5m2!1sda!2sdk"></iframe>
        </div>
      </div>
    </div>
  );
}

export default Kontakt_bar;
