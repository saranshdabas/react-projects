import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

//Getting value from loca storage on refresh
const getListFromLocal = () => {
  const list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
};

function App() {
  const [list, setList] = useState(getListFromLocal());
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const [editId, setEditId] = useState(null);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      displayAlert(true, "Please enter a value", "danger");
    } else if (editing) {
      setList(
        list.map((item) => {
          if (item.id === editId) {
            return { ...item, title: name };
          }
          return item;
        })
      );
      displayAlert(true, "Edit was successfull", "success");
      setName("");
      setEditId("");
      setEditing(false);
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

  const editItem = (id) => {
    const specificItem = list.find((item) => item.id === id);
    setEditId(id);
    setEditing(true);
    setName(specificItem.title);
  };

  //Setting local storage every time list changes
  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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
          <List items={list} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            Clear items
          </button>
        </div>
      )}
    </section>
  );
}

export default App;
