import { React } from "react";
import { useEffect } from "react";
import {  useNavigate } from "react-router-dom";
//import Cookies from "js-cookie";

const ProtectedRoute = (props) => {
  const { Component } = props;
  useEffect(() => {
    getVerify();
  }, []);

  const navigate = useNavigate();
  
  function getVerify() {
    const User = localStorage.getItem("User");
    console.log(User);
    if (!User) {
      navigate("/");
    }
  }
  return <Component />;
};

export default ProtectedRoute;
