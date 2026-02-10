import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {

    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(cart.map((item) => item.id === product.id ? 
      { ...item, quantity: item.quantity + 1 } : item));
    }  
    else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }

  };

  const increaseQty = (id) => {
    setCart(cart.map((item) =>item.id === id? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item)
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity,0);

  return (

    <CartContext.Provider

      value={{ cart, addToCart, increaseQty, decreaseQty, totalPrice }}>

      {children}

    </CartContext.Provider>
  );

};

export default CartProvider;
