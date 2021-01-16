import React, { useState } from "react";
import SingleColor from "./SingleColor";

import Values from "values.js";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const values = new Values(color).all(10);
      setList(values);
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  return (
    <>
      <section className="container">
        <h3>Color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            className={`${error ? "error" : null}`}
            id="color"
            name="color"
            value={color}
            placeholder="#f15025"
            onChange={(e) => setColor(e.target.value)}
          ></input>
          <button className="btn">Generate</button>
        </form>
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              {...color}
              hexValue={color.hex}
              key={index}
              index={index}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
