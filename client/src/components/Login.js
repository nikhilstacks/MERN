import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { UserContext } from "../App";

const Login = () => {
  const { dispatch } = useContext(UserContext);
  const navigation = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //sending email and password to the backend to check user exist in the database or not-------------------
  const check = async (e) => {
    e.preventDefault();

    const { email, password } = user;
    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      console.log("invalid details");
      window.alert("INvalid details");
    } else {
      dispatch({ type: "USER", payload: true });
      console.log("login successfully");
      window.alert("login successfully");

      navigation("/");
    }
  };

  // setting state of the user input email and password------------------------------------------------
  let name, value;
  const handleDetails = (e) => {
    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  return (
    <div id="login-form-wrap">
      <h2>Login</h2>
      <form method="POST" id="login-form">
        <p>
          <input
            type="email"
            id="username"
            name="email"
            placeholder="Username/email"
            value={user.email}
            onChange={handleDetails}
            required
          />
          <i className="validation">
            <span></span>
            <span></span>
          </i>
        </p>
        <p>
          <input
            type="password"
            id="password"
            onChange={handleDetails}
            name="password"
            value={user.password}
            placeholder="password"
            required
          />
          <i className="validation">
            <span></span>
            <span></span>
          </i>
        </p>
        <p>
          <input type="submit" id="login" value="Login" onClick={check} />
        </p>
      </form>
      <div id="create-account-wrap">
        <p>
          Not a member? <NavLink to="/signup">Create Account</NavLink>
        </p>
      </div>
    </div>
  );
};

export default Login;
