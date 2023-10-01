import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";

function App() {
  const [navText, setnavText] = useState("light");
  const [mode, setmode] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const changeMode = () => {
    if (mode.color === "black") {
      setmode({
        color: "white",
        backgroundColor: "black",
      });

      setnavText("dark");
    } else if (mode.color === "white") {
      setmode({
        color: "black",
        backgroundColor: "white",
      });
      setnavText("light");
    }
  };

  return (
    <>
      <Navbar toggleMode={changeMode} navMode={navText} />
      <Textarea />
    </>
  );
}

export default App;
