import React, { useEffect } from "react";
import { useNavigate } from "react-router";

const Logout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    fetch("/logout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        navigate("/login");
        const answer = new Promise((resolve, reject) => {
          const check = res.json();
          if (check) {
            resolve(check);
          }
        });
        answer.then((response) => {
          console.log(response);
        });
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return <div>this is our logout Page</div>;
};

export default Logout;
