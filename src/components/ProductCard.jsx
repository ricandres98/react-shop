import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ProductCard.scss';

const ProductCard = ({ product }) => {
  const { addToCart, removeItem, state } = useContext(AppContext);
  
  const isInCart = state.cart.some(cartItem => (
    cartItem.id === product.id
  ));
  
  const handleClick = (item) => {
    isInCart ?
    removeItem(item.id):
    addToCart(item) 
  };

  return (
    <div className="product-card">
      <img src={product.images[0]} alt="" />
      <div className="product-info">
        <div>
          <p>${product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img 
            src={
              isInCart 
                ? './icons/remove_from_cart.svg' 
                : "./icons/bt_add_to_cart.svg"
            } 
            alt={
              isInCart 
              ? 'remove item from cart'
              : 'add item to cart'
            } 
          />
        </figure>
      </div>
    </div>
  );
};

export default ProductCard;