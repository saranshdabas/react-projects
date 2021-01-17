import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", class: "" });
  const [editId, setEditId] = useState("");
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Hello");
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && <Alert />}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="e.g Eggs"
            value={name}
            id="name"
            className="grocery"
          />
          <button className="submit-btn">{editing ? "Edit" : "Submit"}</button>
        </div>
      </form>
      <div className="grocery-container">
        <List />
        <button className="clear-btn">Clear items</button>
      </div>
    </section>
  );
}

export default App;
