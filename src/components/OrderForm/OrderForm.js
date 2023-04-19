import { addDoc } from "firebase/firestore/lite";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { AppContext } from "../../App";
import { useContext } from "react";

export default function OrderForm() {
  const { cart, setCart } = useContext(AppContext);

  function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    addDoc(ordersCollection, {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      address: formData.get('address'),
      cart: cart,
    })
    .then(doc => {
      setCart({});
    })
  }

  return (
    <div className="OrderForm" >
      <form onSubmit={onFormSubmit}>
        <label>
          Name: <input type="text" name="name" required />
        </label>
        <label>
          Phone: <input type="tel" name="phone" required />
        </label>
        <label>
          E-mail: <input type="email" name="email" required />
        </label>
        <label>
          Address: <input type="text" name="address" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}