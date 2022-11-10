import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '../styles/ShoppingCart.scss';

const OrderItem = ({ product }) => {
  const { removeItem } = useContext(AppContext);
  return (
    <div className="shopping-cart">
      <figure>
        <img src={product.images[0]} alt={product.title} />
      </figure>
      <p>{product.title}</p>
      <p>${product.price}</p>
      <img 
        src="./icons/icon_close.png" 
        alt="close" 
        className='icon'
        onClick={() => removeItem(product.id)}
      />
    </div>
  );
};

export default OrderItem;