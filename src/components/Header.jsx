import React, { useState, useContext, useEffect } from 'react';
import '@styles/Header.scss';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import AppContext from '../context/AppContext';
import Checkout from '../containers/Checkout';
import DesktopMenu from './DesktopMenu';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const [toggleOrders, setToggleOrders] = useState(false);
  const { state } = useContext(AppContext);

  const handleToggle = () => {
    setToggle(!toggle);
    if (toggleOrders) setToggleOrders(false);
  }
  const handleToggleOrders = () => {
    setToggleOrders(!toggleOrders);
    if (toggle) setToggle(false);
  }
  
  
  return (
    <header className="Header">
      <nav>
        <img src={menu} alt="menu" className="menu" />

        <div className="navbar-left">
          <a href="/">
            <img src={logo} alt="logo" className="logo" />
          </a>

          <ul>
            <li>
              <a href="/">All</a>
            </li>
            <li>
              <a href="/">Clothes</a>
            </li>
            <li>
              <a href="/">Electronics</a>
            </li>
            <li>
              <a href="/">Furnitures</a>
            </li>
            <li>
              <a href="/">Toys</a>
            </li>
            <li>
              <a href="/">Others</a>
            </li>
          </ul>
        </div>

        <div className="navbar-right">
          <ul>
            <li className="navbar-email" onClick={handleToggle}>
              platzi@example.com
            </li>
            <li 
              className="navbar-shopping-cart" 
              onClick={handleToggleOrders}
            >
              <img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
              {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
            </li>
          </ul>
          {toggle && <DesktopMenu />}
          {toggleOrders && <Checkout />}
        </div>
      </nav>
    </header>
  );
};

export default Header;