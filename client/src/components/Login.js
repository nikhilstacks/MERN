import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigation = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

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

    if (res.status === 400 || !data) {
      console.log("invalid details");
      window.alert("INvalid details");
    } else {
      console.log("login successfully");
      window.alert("login successfully");

      navigation("/");
    }
  };

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
          Not a member? <a href="/signup">Create Account</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
