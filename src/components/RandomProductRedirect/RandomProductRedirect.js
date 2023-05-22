import { useContext } from "react";
import "./RandomProductRedirect.css";
import { AppContext } from "../../App";

export default function RandomProductRedirect() {
  const { products } = useContext(AppContext);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * products.length);
    const randomProduct = products[randomIndex];
    window.location.href = "/products/" + randomProduct.slug;
  }

    return (
      <div className="RandomProductRedirect">
        <button onClick={handleClick}>
          <span>

          Random product
          </span>
        </button>
      </div>
    )
}