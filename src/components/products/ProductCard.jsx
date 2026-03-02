import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import imageMetadata from "../../assets/imageMetadata";
import "../../styles/productCard.css";

const ProductCard = ({ product }) => {

  const { addToCart } = useContext(CartContext);

  return (

    <div className="product-card">

      <img
        src={product.image}
        loading="lazy"
        {...(imageMetadata[product.image.split('/').pop()] || {})}
      />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <Link to={`/product/${product.id}`}>View</Link>
      <button onClick={() => addToCart(product)}>Add to Cart</button>

    </div>
    
  );
}; 

export default ProductCard;
