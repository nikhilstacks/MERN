import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const Signup = () => {
  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <div className="card">
            <form className="form-card">
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    First name<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="fname"
                    name="fname"
                    placeholder="Enter your first name"
                  />{" "}
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Last name<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="lname"
                    name="lname"
                    placeholder="Enter your last name"
                  />{" "}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Business email<span className="text-danger"> *</span>
                  </label>{" "}
                  <input type="text" id="email" name="email" placeholder="" />{" "}
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Phone number<span className="text-danger"> *</span>
                  </label>{" "}
                  <input type="text" id="mob" name="mob" placeholder="" />{" "}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Job title<span className="text-danger"> *</span>
                  </label>{" "}
                  <input type="text" id="job" name="job" placeholder="" />{" "}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-12 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    What would you be using Flinks for?
                    <span className="text-danger"> *</span>
                  </label>{" "}
                  <input type="text" id="ans" name="ans" placeholder="" />{" "}
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="form-group col-sm-6">
                  {" "}
                  <button type="submit" className="btn-block btn-primary">
                    Request a demo
                  </button>{" "}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
