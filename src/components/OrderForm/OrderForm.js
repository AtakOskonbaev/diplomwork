import "./OrderForm.css";

export default function OrderForm() {
  return (
    <div className="OrderForm" >
      <form>
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
      </form>
    </div>
  )
}