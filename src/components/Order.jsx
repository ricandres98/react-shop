import React from 'react'

const Order = ({ children }) => {
    return (
      <>
        <div className="order">
          <p>
            <span>03.25.21</span>
            <span>6 articles</span>
          </p>
          <p>$560.00</p>
        </div>
        {children}
      </>
    );
}

export default Order;