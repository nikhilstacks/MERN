import React from "react";

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
                    Your Name<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="name"
                    name="fname"
                    placeholder="Enter your name"
                  />{" "}
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    email<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />{" "}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Your profession<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="profession"
                    name="profession"
                    placeholder=""
                  />{" "}
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
                    password<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder=""
                  />{" "}
                </div>
              </div>
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Confirm password
                    <span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="password"
                    id="cpassword"
                    name="cpassword"
                    placeholder=""
                  />{" "}
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="form-group col-sm-6">
                  {" "}
                  <button type="button" class="btn btn-primary">
                    Submit
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
