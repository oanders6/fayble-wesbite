import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//used for the routes of the pages within a website note that is no longer uses switch, but instead uses routes

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          // routing direclty to home page
          <Route path="/" exact />
        </Routes>
      </Router>
    </>
  );
}

export default App;
