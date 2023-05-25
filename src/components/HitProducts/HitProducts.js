import { useContext } from "react";
import "./HitProducts.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";

export default function HitProducts({ category }) {
  const { products } = useContext(AppContext);

  const output = products
    .map(product => (
      <div key={product.id} className="product">
        <div className="hit">Bestseller</div>
        <Link to={'/products/' + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <hr />
        <Link to={"/products/" + product.slug} className="text">
          {product.name}
        </Link>

        <br />

        <span>${product.price}</span>
        <AddToCart product={product} />
      </div>
    ))

  return (
    <div className="HitProducts">
      <div className="header">
        <i class="fa-solid fa-star" /> <span>Bestsellers</span> <hr color="#b1cc19" />
      </div>
      <div className="hits">
        {output[0]}
        {output[23]}
        {output[56]}
        {output[35]}
      </div>
    </div>
  )
}