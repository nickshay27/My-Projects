import "./App.css";
import { useState } from "react";

function App() {
  const [count, Setcount] = useState(0);

  function change() {
    let color = document.getElementsByClassName(colr);
    if (count + 1 == true) {
      color.style.color = "red";
    }
  }

  return (
    <>
      <h1 className="colr">Counter: {count}</h1>
      <p>This is counter projest</p>
      <button
        className="btn"
        onClick={() => {
          Setcount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        className="btn"
        onClick={() => {
          Setcount(count - 1);
        }}
      >
        Decrement
      </button>
    </>
  );
}

export default App;
