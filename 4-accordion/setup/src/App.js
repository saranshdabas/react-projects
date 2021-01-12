import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <main>
      <div className="container">
        <h4>Questions</h4>
        <section className="info">
          {data.map((ques) => {
            return <SingleQuestion id={ques.id} {...ques} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
