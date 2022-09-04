import React from "react";

export default function About(props) {
  let myStyle = {
    backgroundColor: props.mode === "light" ? "white" : "black",
    color: props.mode === "light" ? "black" : "white",
    border: "1px solid",
    borderColor: props.mode === "light" ? "black" : "white",
  };

  return (
    <div className="container">
      <h1
        className="mb-4"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        About
      </h1>
      <div className="accordion-body my-4" style={myStyle}>
        ✅ changeMyText is a React ⚛️ project that can be used for playing with
        your text 🐱!
      </div>
      <div className="accordion-body my-4" style={myStyle}>
        ✅ You can use this app for writing Word documents 📖, Blog posts 📝,
        Excel sheets 📚, PDF files 📕 and much more 🌱!
      </div>
      <div className="accordion-body my-4" style={myStyle}>
        ✅ Works in any web browsers such as Chrome 🟠, Firefox 🦊, Internet
        Explorer 🐢, Safari 🌐, Opera ⭕!
      </div>
      <div className="accordion-body my-4" style={myStyle}>
        ✅ Made with ❤️ by Adokshaj Bhandarkar 🔥!
      </div>
    </div>
  );
}
