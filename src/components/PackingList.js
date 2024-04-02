import React from "react";

export const PackingList = ({ items, onDeleteitem, onToggleItem }) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            deleteitem={onDeleteitem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>
    </div>
  );
};

function Item({ item, deleteitem, onToggleItem }) {
  return (
    <>
      <li>
        <input
          type="checkbox"
          value={item.packed}
          onChange={() => onToggleItem(item.id)}
        />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>
          {item.quantity} {item.description}
        </span>
        <button onClick={() => deleteitem(item.id)}>❌</button>
      </li>
    </>
  );
}
