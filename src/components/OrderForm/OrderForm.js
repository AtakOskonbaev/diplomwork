import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { AppContext } from "../../App";
import { useContext } from "react";
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
      <Link to="#darkness">Order</Link>

      <div id="darkness">
        <form onSubmit={onFormSubmit} id="window">
          <Link to="#" class="close">Закрыть окно</Link>
          <label>
            Name: <input type="text" name="name" placeholder="John" required />
          </label>
          <label>
            Phone: <input type="tel" name="phone" placeholder="+123 (123) 234 345" required />
          </label>
          <label>
            Address: <input type="text" name="address" placeholder="Country, city, street" required />
          </label>
          <button>Submit</button>
        </form>
      </div>
    </div>
  )
}