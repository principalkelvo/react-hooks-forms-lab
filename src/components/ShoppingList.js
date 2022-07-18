import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
 

  function onSearch(event) {
    console.log("search");
    let value = event.target.value;
    setSearch(value);
    console.log(search);
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const searchedItems = itemsToDisplay.filter((item) => {
    const itemName = item.name;
    if (itemName === "") return true;
    return itemName.toLowerCase().includes(search);
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit= {onItemFormSubmit}/>
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={onSearch}
      />
      <ul className="Items">
        {searchedItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
