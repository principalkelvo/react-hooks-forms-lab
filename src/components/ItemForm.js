import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");
  
  function submit(event){
    event.preventDefault();
    const newItem = {
      id: uuid(), // the `uuid` library can be used to generate a unique id
      name,
      category,
    };
    onItemFormSubmit(newItem)
  console.log(newItem);

  }
  function handleName(event){
    const itemName = event.target.value
    setName(itemName)
    console.log(itemName)
  }
  function selectedCategory(event){
    const itemCategory= event.target.value
    setCategory(itemCategory)
    console.log(itemCategory)
  }

  return (
    <form className="NewItem" onSubmit={submit}>
      <label>
        Name:
        <input type="text" name="name" onChange= {handleName}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={selectedCategory}>
          <option name="Produce" value="Produce">Produce</option>
          <option name="Dairy" value="Dairy">Dairy</option>
          <option name="Dessert" value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
