import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let navigate = useNavigate();

  let [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInput = (e) => {
    name = e.target.name; //taking name of the input field
    value = e.target.value; //taking every value of that field

    setUser({ ...user, [name]: value }); //using rest operator to open object and overwriting existing  value
  };

  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        phone: phone,
        work: work,
        password: password,
        cpassword: cpassword,
      }),
    });

    const data = res.json();

    if (res.status === 422 || !data) {
      window.alert("INvalid registration");
      console.log("INvalid registration");
    } else {
      window.alert("registration successfull");
      console.log("registration successfull");

      navigate("/");
    }
  };

  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <div className="row d-flex justify-content-center">
        <div className="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <div className="card">
            <form method="POST" className="form-card">
              <div className="row justify-content-between text-left">
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Your Name<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={user.name}
                    onChange={(e) => handleInput(e)}
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
                    value={user.email}
                    onChange={(e) => handleInput(e)}
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
                    name="work"
                    value={user.work}
                    onChange={(e) => handleInput(e)}
                    placeholder=""
                  />{" "}
                </div>
                <div className="form-group col-sm-6 flex-column d-flex">
                  {" "}
                  <label className="form-control-label px-3">
                    Phone number<span className="text-danger"> *</span>
                  </label>{" "}
                  <input
                    type="text"
                    id="mob"
                    onChange={(e) => handleInput(e)}
                    value={user.phone}
                    name="phone"
                    placeholder=""
                  />{" "}
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
                    value={user.password}
                    onChange={(e) => handleInput(e)}
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
                    onChange={(e) => handleInput(e)}
                    value={user.cpassword}
                    name="cpassword"
                    placeholder=""
                  />{" "}
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="form-group col-sm-6">
                  {" "}
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={PostData}
                  >
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
