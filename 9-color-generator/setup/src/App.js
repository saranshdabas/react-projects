import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Btn working");
  };

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            id="color"
            name="color"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          ></input>
          <button className="btn">Generate</button>
        </form>
      </section>
      <section className="colors">Color section</section>
    </>
  );
}

export default App;
