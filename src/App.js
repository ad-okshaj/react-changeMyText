import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Link, useRouteMatch, useParams
import { ToastContainer, toast } from "react-toastify";

function App() {
  //
  // these are for darkMode.
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      toast.success("DarkMode has been enabled!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      document.title = "changeMyText - Home - DarkMode";
    } else {
      setMode("light");
      toast.success("LightMode has been enabled!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      document.body.style.backgroundColor = "white";
      document.title = "changeMyText - Home - LightMode";
    } // mode === "light" ? setMode("dark") : setMode("light");
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Navbar
          title="changeMyText"
          aboutText="Psst, click here!"
          mode={mode}
          toggleMode={toggleMode}
        />

        <div className="container my-5">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  heading="changeMyText - text changer tool!"
                  mode={mode}
                  toggleMode={toggleMode}
                />
              }
            ></Route>
            <Route exact path="/about" element={<About mode={mode} />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
