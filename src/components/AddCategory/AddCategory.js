import { useState } from "react";
import "./AddCategory.css";

export default function AddCategory() {
  const [category, setCategory] = useState("");

  function onChangeCategory(event) {
    setCategory(event.target.value)
  }

  function onAddCategory() {
    
  }

  <div className="AddCategory">
    <input type="text" value={category} placeholder="Category name" onChange={onChangeCategory} />
    <button onClick={onAddCategory}>+</button>
  </div>
}