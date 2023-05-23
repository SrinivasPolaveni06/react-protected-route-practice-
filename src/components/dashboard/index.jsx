import React from "react";
import { useNavigate } from "react-router-dom";
//import Cookies from "js-cookie";

const Index = () => {
  const navigate = useNavigate();

  function Logout() {
    localStorage.removeItem("User");

    navigate("/");
  }
  return (
    <div className="mt-5 text-center">
      <h2>Dashboard Page</h2>
      <button className="btn btn-primary" onClick={Logout}>
        Logout
      </button>
    </div>
  );
};

export default Index;
