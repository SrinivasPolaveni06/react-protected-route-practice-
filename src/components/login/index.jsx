import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
//import Cookies from "js-cookie";

const Index = () => {
  useEffect(() => {
    getVerify();
  }, []);
  const navigate = useNavigate();

  function onLogin() {
    localStorage.setItem("User", "Srinivas");
    navigate("/home");
  }
  //   const User = localStorage.getItem("User");
  //   if (User) {
  //     navigate("/home");
  //   }

  function getVerify() {
    const User = localStorage.getItem("User");
    if (User) {
      navigate("/home");
    }
  }
  return (
    <div className="mt-5 text-center">
      <h2>Login Page</h2>
      <button className="btn btn-primary" onClick={onLogin}>
        Login
      </button>
    </div>
  );
};

export default Index;
