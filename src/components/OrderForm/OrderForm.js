import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { AppContext } from "../../App";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if (Object.keys(cart).length === 0) {
    return "Your cart is empty";
  }
  if (!user) {
    return "You are not logged in, please log in";
  }


  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get('name'),
      phone: formData.get('phone'),
      user: user.uid,
      address: formData.get('address'),
      cart: cart,
    })
      .then(doc => {
        setCart({});
        navigate("/thank-you");
      })
  }


  return (
    <div className="OrderForm" >

      <div className="button">
        <Link hrefLang="#" id="open-popup">Order</Link>
      </div>

      <div className="popup">
        <div className="popup-container">
          <div className="popup-body">
            <form onSubmit={onFormSubmit} id="window">
              <label>
                <input type="text" name="name" placeholder="Name" required />
              </label>
              <label>
                <input type="tel" name="phone" placeholder="Phone" required />
              </label>
              <label>
                <input type="text" name="address" placeholder="Country, city, street" required />
              </label>
              <div>
                <button>Submit</button>
              </div>
            </form>
            <div id="close"><i class="fa-solid fa-xmark fa-2xl" /></div>
          </div>
        </div>
      </div>

    </div>
  )
}