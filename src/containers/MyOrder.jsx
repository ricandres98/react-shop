import React, { useContext } from 'react';
import '../styles/MyOrder.scss';
import Order from '../components/Order';
import OrderItem from '../components/OrderItem';
import AppContext from '../context/AppContext';
import Header from '../components/Header';

const MyOrder = () => {
    const { state } = useContext(AppContext);

    return (
      <>
      
      <div className="my-order">
        <div className="my-order-container">
          <h1 className="title">My order</h1>

          <div className="my-order-content">
            <Order>
              {state.cart.map(product => (
                <OrderItem 
                  product={product} 
                  key={`orderItem-${product.id}`}
                />
              ))}
            </Order>
            <Order>
              {/* <OrderItem/> */}
            </Order>
            <Order></Order>
          </div>
        </div>
      </div>
      
      </>
    );
}

export default MyOrder;