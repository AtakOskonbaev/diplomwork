import "CartList.css";
import { AppContext } from "../../App";
import { Link } from "react-router-dom";

export default function CartList() {
  const { products ,cart, setCart } = useState(AppContext);

  const producIds = Object.keys(cart);

  const output = products
    .filter(product => producIds.includes(product.id))
    .map(product => {
      <div className="CartItem" key={product.id}>
        <Link to={"/product" + product.slug}>{product.name}</Link>
        {cart[product.id]}
      </div>
    });

  return (
    <div className="CartList" >
      {output}
    </div>
  )
}