import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>404</h1>
      <h1>
        This is an error page and this page is not exist or removed by the
        admin...
      </h1>
      <NavLink to="/">GO TO HOME PAGE</NavLink>
    </>
  );
};

export default ErrorPage;
