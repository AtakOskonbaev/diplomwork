import { NavLink } from "react-router-dom";
import "./CategoryList.css";
import { getDocs } from "firebase/firestore/lite";
import { categories } from "../../firebase";
import { useEffect, useState } from "react";

export default function CategoryList() {
  const [categoryList, setCategoryList] = useState([]);

  useEffect(() => {

    getDocs(categories)
      .then(snapshot => {
        const newCategoryList = [];
        snapshot.docs.forEach(doc => {
          const category = doc.data();
          category.id = doc.id;
  
          newCategoryList.push(category);
        })
  
        setCategoryList(newCategoryList);
      })

  }, []);


  const output = categoryList.map((category) => (
    <li key={category.id}>
      <NavLink to={"/categories/" + category.slug}>
        {category.name}
      </NavLink>
    </li>
  ))

  return (
    <div className="CategoryList">
      <button className="dropBtn"> Categories ˅</button>
      <ul id="dropdown" className="dropdownContent">{output}</ul>
    </div>
  )
}