import { useParams } from "react-router-dom";
import electronicsData from "../../data/electronicsData";
import "../../styles/productDetails.css";

const ProductDetails = () => {

  const { id } = useParams();
  
  const product = electronicsData.find((p) => p.id == id);

  if (!product) return <h2>Product not found</h2>;

  return (

   <div className="product-details">
   <div className="product-card-glass">

   <div className="product-image">
     <img src={product.image} alt={product.name} />
   </div>

    <div className="product-info">

      <h2>{product.name}</h2>
      <p className="price">₹{product.price}</p>
      <p className="rating"><strong>Rating: </strong>{product.rating} ⭐ </p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p className="description"><strong>Description: </strong>{product.description}</p>

    </div>

  </div>

</div>

  );
};

export default ProductDetails;
