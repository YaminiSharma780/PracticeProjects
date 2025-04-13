import { useState } from "react";
import { letters } from "./data.js";
import Letter from "./Letter.jsx";

export default function Home() {
  const [totalItems, setTotalItems] = useState(letters);
  const [selectedItems, setSelectedItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  const selectedCount = selectedItems.length;

  function handleToggle(toggledId) {
    if (selectedItems.includes(toggledId)) {
      setSelectedItems(selectedItems.filter((id) => id !== toggledId));
    } else {
      setSelectedItems([...selectedItems, toggledId]);
    }
  }

  function addItem() {
    console.log(newItem);
    if (newItem) {
      setTotalItems([
        ...totalItems,
        {
          id: totalItems.length + 1,
          subject: newItem,
          isStarred: false,
        },
      ]);
    }
  }

  return (
    <>
      <input
        onChange={(e) => setNewItem(e.target.value)}
        type="text"
        placeholder="enter new item ..."
      ></input>
      <button onClick={addItem}>Add Item</button>
      <ul>
        {totalItems.map((letter) => (
          <Letter
            key={letter.id}
            letter={letter}
            isSelected={selectedItems.includes(letter.id)}
            onToggle={handleToggle}
          />
        ))}
        <hr />
        <p>
          <b>You selected {selectedCount} letters</b>
        </p>
      </ul>
    </>
  );
}
