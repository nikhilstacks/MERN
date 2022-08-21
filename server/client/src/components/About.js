import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./about.module.css";

const About = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({});

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
      setUserData(data);

      if (res.status === 401) {
        navigate("/login");
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log("not logged in currently...");
    }
  };

  useEffect(() => {
    callAboutPage();
  }, []);

  return (
    <div className="pt-5">
      <p>Welcome</p>
      <h1>This is my about page..</h1>
      <h1>
        name of the user: <span>{userData.name}</span>
      </h1>
      <h1>
        phone number of the user : <span>{userData.phone}</span>
      </h1>
      <h1>
        work of the user: <span>{userData.work}</span>
      </h1>
      <h1>
        email of the user: <span>{userData.email}</span>
      </h1>
    </div>
  );
};

export default About;
