import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "react-clock-tutorial";
  });

  const [dateString, setDateString] = useState("");
  const [time, setTime] = useState(0);

  // requestAnimationFrame(() => setTime(new Date().getTime()));

  const tick = () => setDateString(new Date().toLocaleTimeString());
  // requestAnimationFrame(() => tick());
  requestAnimationFrame(() => setDateString(new Date().toLocaleTimeString()));

  // setInterval(tick, 1);

  return (
    <div className="App">
      <h1>Hello, world!</h1>
      <h1>It is {dateString}</h1>
      <p>timer (ms): {time}</p>
    </div>
  );
}

export default App;
