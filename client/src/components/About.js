import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const callAboutPage = async () => {
    try {
      const res = await fetch("/aboutme", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      console.log(data);

      if (res.status === 401) {
        navigate("/login");
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="pt-5">
      <p>Welcome</p>
      <h1>This is my about page..</h1>
    </div>
  );
};

export default About;
