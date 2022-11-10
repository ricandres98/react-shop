import React, { useContext} from 'react';
import '../styles/CurrentOrder.scss';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';

const CurrentOrder = ({ closeComponent }) => {
    const { state } = useContext(AppContext);
    const prices = state.cart.length > 0 && state.cart.map(product => product.price);
    const totalBalance = prices && prices.reduce((sum, price) => sum + price, 0);


    return (
      <aside className="CurrentOrder">
        <div className="title-container">
          <img 
            src="./icons/flechita.svg" 
            alt="arrow"
            className='icon'
            onClick={closeComponent}
            />
          <p className="title">My order</p>
        </div>

        <div className="my-order-content">
          <div className="my-order__product-list">
            {state.cart.map(product => (
              <OrderItem product={product} key={`orderItem-${product.id}`} /> 
            ))}
          </div>
          
          <div className='my-order-buttons'>
            <div className="order">
              <p>
                <span>Total</span>
              </p>
              <p>${totalBalance}</p>
            </div>

            <button className="primary-button">Checkout</button>
          </div>
        </div>
      </aside>
    );
}

export default CurrentOrder;