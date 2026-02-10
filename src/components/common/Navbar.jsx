import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "../../styles/navbar.css";

const Navbar = () => {

  const { cart } = useContext(CartContext);

  return (

    <nav className="navbar">

      <h2>ElectroMart</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart" className="cart-link">
          Cart
          {
            cart.length > 0 && <span className="cart-count">{cart.length}</span>
          }
        </Link>
        <Link to="/contact">Contact</Link>

      </div>
      
    </nav>

  );
};

export default Navbar;
