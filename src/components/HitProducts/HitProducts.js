import { useContext } from "react";
import "./HitProducts.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import { AddToCart } from "../AddToCart/AddToCart";

export default function HitProducts({ category }) {
  const { products } = useContext(AppContext);

  const random1 = Math.floor(Math.random() * products.length);
  const random2 = Math.floor(Math.random() * products.length);
  const random3 = Math.floor(Math.random() * products.length);
  const random4 = Math.floor(Math.random() * products.length);

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
        {output[random1]}
        {output[random2]}
        {output[random3]}
        {output[random4]}
      </div>
    </div>
  )
}