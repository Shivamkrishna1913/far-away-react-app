import React, { useState } from "react";
import { Form } from "./components/Form.js";
import { Stats } from "./components/Stats.js";
import { Logo } from "./components/Logo.js";
import { PackingList } from "./components/PackingList.js";
const iniialitems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];
export default function App() {
  const [items, setItems] = useState(iniialitems);
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }
  function handleDeleteitem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  const handleClearList = () => {
    const confirmation = window.confirm(
      "Are you sure you want to clear the list ?"
    );
    if (confirmation) setItems([]);
  };
  return (
    <>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteitem={handleDeleteitem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </>
  );
}
