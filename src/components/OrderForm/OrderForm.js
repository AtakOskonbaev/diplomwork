import { addDoc } from "firebase/firestore";
import "./OrderForm.css";
import { ordersCollection } from "../../firebase";
import { AppContext } from "../../App";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function OrderForm() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  if(Object.keys(cart).length === 0){
    return "Your cart is empty";
  }
  if(!user) {
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
      <form onSubmit={onFormSubmit}>
        <label>
          Name: <input type="text" name="name" required />
        </label>
        <label>
          Phone: <input type="tel" name="phone" required />
        </label>
        <label>
          Address: <input type="text" name="address" required />
        </label>
        <button>Submit</button>
      </form>
    </div>
  )
}