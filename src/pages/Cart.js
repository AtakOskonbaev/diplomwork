import { useState } from "react";
import CartList from "../components/CartList/CartList";
import OrderForm from "../components/OrderForm/OrderForm";

export function Cart() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="Cart" >
      <h1>Cart</h1>
      <CartList />
      <button className="order" onClick={() => setModalActive(true)}>order</button>
      <OrderForm active={modalActive} setActive={setModalActive} />
    </div>
  )
}