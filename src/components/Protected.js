// src/components/Protected.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Protected = (email) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/api/auth/protected`,
          { withCredentials: true }
        );
        if (res.status === 200) {
          setIsAuthenticated(true);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    };
    checkAuth();
  }, []);

  return isAuthenticated ? (
    <>
      <h1> protected page access granted</h1>
    </>
  ) : (
    <h1>You need to login to access this page</h1>
  );
};

export default Protected;
