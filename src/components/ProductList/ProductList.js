import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";

export default function ProductList() {
  const { products } = useContext(AppContext);

  const output = products.map(product => (
    <div>
      <img src={product.picture} alt={product.name} />
      <NavLink to={"/product/" + product.slug}>
        {product.name}
      </NavLink>

      <br />
      
      <span>{product.price}</span>
    </div>
  ));

  return (
    <div className="ProductList">
      {output}
    </div>
  )
}