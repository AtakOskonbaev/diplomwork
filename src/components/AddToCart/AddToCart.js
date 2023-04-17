import { useContext } from "react";
import "./AddToCart.css";
import { AppContext } from "../../App";

export function AddToCart({ product }) {
  const [cart, setCart] = useContext(AppContext);

  function onAddToCartClick() {
    setCart([]);
  }

  return (
    <div className="AddToCart">
      <button onClick={onAddToCartClick}>Add to cart</button>
    </div>
  )
}