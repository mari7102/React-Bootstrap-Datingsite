import React from "react";
import "../Login/Login.css";

function Login() {
  return (
    <div className="container-fluid bg_login">
      <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-4 pb-5 m-5">
          <form action="https://formspree.io/FORM_ID" method="POST">
            <div className="card border-dark rounded-5 col-12">
              <div className="card-header p-0  row">
              

                <div className="kontakt_bar_bg text-dark text-center py-2 col-12">
                
                  <h3>
                    <p>Log ind</p>
                  </h3>
                </div>
              </div>
              
              <div className="card-body p-3">
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"></div>
                    </div>
                    <input
                      type="text"
                      className="form-control fas fa-user-circle"
                      id="nombre"
                      name="name"
                      placeholder="Brugernavn"
                      required
                    />
                  </div>
                </div>
                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend">
                      <div className="input-group-text"></div>
                    </div>
                    <input
                      type="password"
                      className="form-control"
                      id="nombre"
                      name="_replyto"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="input-group mb-2">
                    <div className="input-group-prepend"></div>
                  </div>
                </div>

                <div className="text-center">
                  <input
                    type="submit"
                    value="Log ind"
                    className="btn btn-info btn-block rounded-5 py-2 text-dark kontakt_bar_bg"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
