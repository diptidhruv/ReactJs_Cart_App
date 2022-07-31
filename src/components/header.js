import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return <div>{this.displayHeader()}</div>;
  }

  displayHeader() {
    return (
      <div>
        <header className="p-3 bg-dark text-white">
          <div className="container">
            <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
              <a
                href="/"
                className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
              >
                <svg
                  className="bi me-2"
                  width="40"
                  height="32"
                  role="img"
                  aria-label="Bootstrap"
                >
                  {/* <use xlink:href="#bootstrap"></use> */}
                </svg>
                Shopping cart App
              </a>

              <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                {/*  <li>
                  <a href="#" className="nav-link px-2 text-secondary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-white">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="nav-link px-2 text-white">
                    About
                  </a>
                </li> */}
              </ul>

              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control form-control-dark"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>

              <div className="text-end">
                <button className="btn btn-danger mx-2">Search</button>

                <button
                  className="btn btn-danger mx-2"
                  data-bs-toggle="modal"
                  data-bs-target="#loginModal"
                >
                  Login
                </button>
                <button
                  className="btn btn-danger"
                  data-bs-toggle="modal"
                  data-bs-target="#signUpModal"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </header>
        {/* //-----------Sign up modal--------------// */}
        <div
          className="modal"
          id="signUpModal"
          tabIndex="-1"
          aria-labelledby="signUpModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="signUpModalLabel">
                  Sign Up
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label forhtml="exampleInputEmail1" className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                    />
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                  <div className="mb-3">
                    <label
                      forhtml="exampleInputPassword1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="exampleInputPassword1"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      forhtml="cexampleInputPassword1"
                      className="form-label"
                    >
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="cexampleInputPassword1"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
