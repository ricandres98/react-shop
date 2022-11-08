import React, { useContext } from 'react';
import ProductInfo from './ProductInfo';
import AppContext from '../context/AppContext';
import '../styles/ProductCard.scss';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(AppContext);

  const handleClick = (item) => {
    addToCart(item);
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
          <img src="../icons/bt_add_to_cart.svg" alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductCard;