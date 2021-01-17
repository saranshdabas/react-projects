import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ items, removeItem }) => {
  return (
    <div className="grocery-list">
      {items.map((item) => {
        const { id, title } = item;
        return (
          <div key={id} className="grocery-item">
            <p className="title">{title}</p>
            <div className="button-container">
              <button className="edit-btn">
                <FaEdit />
              </button>
              <button className="delete-btn">
                <FaTrash onClick={() => removeItem(id)} />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default List;
