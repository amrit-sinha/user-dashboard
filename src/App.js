// src/App.js
import React from "react";
import Homepage from "./components/Homepage";
import Login from "./components/Login";
import Register from "./components/Register";
import Protected from "./components/Protected";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/protected" element={<Protected />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
