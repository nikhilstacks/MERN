import { useState, useEffect } from "react";
import React from "react";

const Home = () => {
  const [userData, setUserData] = useState({});
  const [userLogged, setUserLogged] = useState(false);

  const callHomePage = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res);

      const data = await res.json();
      console.log(data); //here we will get all details from database of authenticated user
      setUserData(data);

      if (res.status !== 401) {
        setUserLogged(true);
      }

      if (res.status === 401) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callHomePage();
  }, []);

  return (
    <div className="pt-5">
      <p>Welcome</p>
      <h1>
        {userLogged
          ? `welcome back ${userData.name}`
          : "This is my home page.."}
      </h1>
    </div>
  );
};

export default Home;
