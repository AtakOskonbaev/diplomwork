import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";
import "./DiscountProd.css";

export default function DiscountProd() {
  const { products } = useContext(AppContext);

  const output = products
    .map(product => (
      <div key={product.id} className="product">
        <Link to={'/products/' + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <hr />
        <Link to={"/products/" + product.slug} className="text">
          {product.name}
        </Link>

        <br />

        <span className="dashed">${product.price}</span>
        <br />
        <span className="newPrice">${product.price - (product.price * 0.3)}</span>
        <AddToCart product={product} />
      </div>
    ))

  return (
    <div className="DiscountProd">
      <h3>
        Today's discount
      </h3>
      {output[3]}
    </div>
  )
}