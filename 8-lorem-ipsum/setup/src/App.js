import React, { useState } from "react";
import data from "./data";
function App() {
  const [count, setCount] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleGenerate = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) {
      amount = 1;
    }
    if (amount > data.length) {
      amount = data.length;
    }
    //Slice takes starting index and ending index not including ending
    setParagraphs(data.slice(0, amount));
  };

  return (
    <section className="section-center">
      <h3>Tired of boring lorem ipsum ?</h3>
      <form className="lorem-form">
        <label htmlFor="count">Paragraph : </label>
        <input
          type="text"
          id="count"
          name="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        ></input>
        <button className="btn" onClick={handleGenerate}>
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {paragraphs.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </article>
    </section>
  );
}

export default App;
