import React, { createContext, useReducer } from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import Logout from "./components/Logout";
import { reducer, initialState } from "./reducer/UseReducer";

// implementing usercontext to avoid props drilling-------------------------------------------------------
export const UserContext = createContext();

// ----------------------------Routes---------------------------------------------------------------------
const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="detail" element={<Contact />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Logout />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <UserContext.Provider value={(state, dispatch)}>
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </>
  );
};

export default App;
