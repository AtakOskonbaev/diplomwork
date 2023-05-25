import { useContext } from "react";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";
import "./DiscountProd.css";

export default function DiscountProd() {
  const { products } = useContext(AppContext);

  const output = products
    .map(product => (
      <div key={product.id} className="product">
      <div className="discount">-30%</div>
        <Link to={'/products/' + product.slug}>
          <img src={product.picture} alt={product.name} />
        </Link>
        <hr />
        <Link to={"/products/" + product.slug} className="text">
          {product.name}
        </Link>

        <br />

        <span className="newPrice">${product.price}</span>
        <span className="dashed">${Math.floor(product.price + (product.price * 1.3)) }</span>
      </div>
    ))

  return (
    <div className="DiscountProd">
      <h3>
        Today's discount
      </h3>
      {output[34]}
    </div>
  )
}