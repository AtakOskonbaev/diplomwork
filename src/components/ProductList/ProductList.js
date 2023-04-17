import { useContext } from "react";
import "./ProductList.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";

export default function ProductList({ category }) {
  const { products } = useContext(AppContext);

  const output = products.filter(product => product.category === category.id)
    .map(product => (
      <div key={product.id} className="Product">
        <img src={product.picture} alt={product.name} />
        <hr />
        <NavLink to={"/products/" + product.slug}>
          {product.name}
        </NavLink>

        <br />

        <span>{product.price}</span>
        <AddToCart product={product} />
      </div>
    ));

  return (
    <div className="ProductList">
      {output}
    </div>
  )
}