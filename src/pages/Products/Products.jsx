import electronicsData from "../../data/electronicsData";
import ProductCard from "../../components/products/ProductCard";
import { useState } from "react";
import "../../styles/products.css";

const Products = () => {

  const [category, setCategory] = useState("All Products");

  const filteredProducts =
    category === "All Products" ? electronicsData : electronicsData.filter((p) => p.category === category);

  return (

    <div className="products-page">

      <h2>Explore Our Products</h2>

      <select onChange={(e) => setCategory(e.target.value)}>

        <option>All Products</option>
        <option>Mobile</option>
        <option>Laptop</option>
        <option>Television</option>
        <option>Headphones</option>
        <option>Earbuds</option>
        <option>Speaker</option>  

      </select>

      <div className="products-grid">

        {filteredProducts.map((item) => (

          <ProductCard key={item.id} product={item} />
        ))}

      </div>

    </div>
    
  );
};

export default Products;


