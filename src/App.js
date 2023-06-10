import React, { Component, useState } from "react";
import "./App.css";

const App = () => {
  const [repeater, setRepeater] = useState("");

  const handleInput = (event) => {
    setRepeater(event.target.value);
  };
  return (
    <div>
      <h1>Un repetidor</h1>
      <input
        type="text"
        placeholder="Empieza a escribir algo"
        onChange={handleInput}
      />
      <p className="repeater">{repeater}</p>
    </div>
  );
};

export default App;
