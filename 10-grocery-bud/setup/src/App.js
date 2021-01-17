import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [editId, setEditId] = useState("");
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      displayAlert(true, "Please enter a value", "danger");
    } else if (editing) {
      // Edit fn
    } else {
      const newItem = { title: name, id: new Date().getTime().toString() };
      setList([...list, newItem]);
      setName("");
      displayAlert(true, "Item added to the list", "success");
    }
  };

  const displayAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    setList([]);
    displayAlert(true, "All items deleted", "danger");
  };

  const removeItem = (id) => {
    setList(list.filter((item) => item.id !== id));
    displayAlert(true, "Item deleted", "danger");
  };

  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.show && (
          <Alert {...alert} removeAlert={displayAlert} list={list} />
        )}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            type="text"
            placeholder="e.g Eggs"
            value={name}
            id="name"
            className="grocery"
            onChange={(e) => setName(e.target.value)}
          />
          <button className="submit-btn">{editing ? "Edit" : "Submit"}</button>
        </div>
      </form>
      {list.length > 0 && (
        <div className="grocery-container">
          <List items={list} removeItem={removeItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
