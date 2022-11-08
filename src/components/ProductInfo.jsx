import React from 'react';
import '../styles/ProductInfo.scss';

// class ProductInfo extends React.Component {
//   render() {
//     return (
//       <div className="product-info">
//         <div>
//           <p>${this.props.price}</p>
//           <p>{this.props.product}</p>
//         </div>
//         <figure onClick={this.props.callback}>
//           <img src="../icons/bt_add_to_cart.svg" alt="" />
//         </figure>
//       </div>
//     );
//   }
// }

const ProductInfo = ({ price, productName, callback }) => {
  return (
    <div className="product-info">
      <div>
        <p>${price}</p>
        <p>{productName}</p>
      </div>
      <figure onClick={callback}>
        <img src="../icons/bt_add_to_cart.svg" alt="" />
      </figure>
    </div>
  );
}

export default ProductInfo;