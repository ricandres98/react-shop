import React, { useState, useEffect } from 'react';
import '../styles/MainContainer.scss';
import ProductCard from '../components/ProductCard';
import useGetProducts from '../hooks/useGetProducts';

const API = 'https://api.escuelajs.co/api/v1/products'

const MainContainer = () => {
  // cards() {
  //     const data = [
  //         {
  //             product: 'Bike',
  //             price: 120
  //         },
  //         {
  //             product:'Car',
  //             price: 1000
  //         },
  //         {
  //             product: 'Skateboard',
  //             price: 100,
  //         },
  //         {
  //             product: 'Scooter',
  //             price: 500,
  //         },
  //         {
  //             product: 'Teddy bear',
  //             price: 20,
  //         },
  //         {
  //             product: 'laptop',
  //             price: 800
  //         }
  //     ];

  //     const ImgTestUrl = 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

  //     const test = data.map((item) => {
  //         return (
  //         <ProductCard
  //             product={item.product}
  //             price={item.price}
  //             ImgSrc={ImgTestUrl}
  //         />
  //         )
  //     });

  //     console.log(test);
  //     retur
  const products = useGetProducts(API);

  return (
    <section className="main-container">
      <div className="cards-container">
        {products.map((product) => (
          <ProductCard 
            product= {product}
            key={product.id}
          />
        ))}
      </div>
    </section>
  );
};

export default MainContainer;