import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import "../../styles/cart.css";


const Cart = () => {

  const { cart, increaseQty, decreaseQty, totalPrice } = useContext(CartContext);

  return (

  <div className="cart-page">

  <h2>Your Cart</h2>

  {cart.length === 0 && <p className="cart-empty">Cart is empty</p>}

  {cart.map((item) => (

    <div key={item.id} className="cart-item">

      <img src={item.image} alt={item.name} />

      <div className="cart-info">

        <h4>{item.name}</h4>
        <p>Price: ₹{item.price}</p>

        <div className="cart-qty">
          <button onClick={() => decreaseQty(item.id)}>-</button>
          <span>{item.quantity}</span>
          <button onClick={() => increaseQty(item.id)}>+</button>
        </div>

        <p className = "Subtotal">Subtotal: ₹{item.price * item.quantity}</p>

      </div>
    </div>

  ))}

  {cart.length > 0 && (

    <div className="cart-total">

      <h3>Total: ₹{totalPrice}</h3>
      <Link to="/checkout">
        <button className="checkout-btn">Proceed to Checkout</button>
      </Link>
    </div>

  )}

</div>

 );
};

export default Cart;
