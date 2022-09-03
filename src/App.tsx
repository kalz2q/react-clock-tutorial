import React, { useState } from "react";
import "./App.css";

function App() {
  const [dateString, setDateString] = useState("");

  const tick = () => setDateString(new Date().toLocaleTimeString());

  setInterval(tick, 1000);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <h1>It is {dateString}</h1>
    </div>
  );
}

export default App;
