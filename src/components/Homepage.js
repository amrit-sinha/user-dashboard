import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  const handleClick = (loc) => {
    if (loc) window.location.href = `${loc}`;
  };
  return (
    <div className="d-flex flex-column vh-100 justify-content-center align-items-center">
      <button
        className="btn btn-outline-success btn-lg"
        onClick={() => handleClick("/login")}
      >
        Login
      </button>
      <button
        className="btn btn-outline-info btn-lg mt-3"
        onClick={() => handleClick("/register")}
      >
        Sign Up
      </button>
      <button
        className="btn btn-outline-warning btn-lg mt-3"
        onClick={() => handleClick("/protected")}
      >
        Protected page
      </button>
    </div>
  );
};

export default Homepage;
