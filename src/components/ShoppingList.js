import React, { useState } from "react";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {

  const [cat, setCat] = useState("All");

  function callback(e) {
    setCat(e.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    if (cat === "All") return true;

  return item.category === cat})

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <Filter onCategoryChange={callback} />
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
