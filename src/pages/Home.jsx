import React, { useState } from 'react';
import Header from '../components/Header';
import MainContainer from '../containers/MainContainer';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const shoppingCart = {
    items: []
  }
  // localStorage.setItem('shopping_cart', JSON.stringify(shoppingCart));
    return (
        <>
            <MainContainer />
            <a href='/login'>Login</a>
        </>
    );
}

export default Home;