import React from 'react';
import '@styles/MobileMenu.scss';


const MobileMenu = ({ closeComponent }) => {
    return (
      <div className="MobileMenu">
        <img 
          src="./icons/icon_close.png" 
          alt="close"
          onClick={closeComponent}
        />
        <ul>
          <li>
            <a href="/">CATEGORIES</a>
          </li>
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
            <a href="/">Other</a>
          </li>
        </ul>

        <ul>
          <li>
            <a 
              href="./#/orders"
              onClick={closeComponent}
            >
                My orders
            </a>
          </li>
          <li>
            <a 
              href="./#/account"
              onClick={closeComponent}
            >
                My account
            </a>
          </li>
        </ul>

        <ul>
          <li>
            <a href="/" className="email">
              platzi@example.com
            </a>
          </li>
          <li>
            <a href="./" className="sign-out">
              Sign out
            </a>
          </li>
        </ul>
      </div>
    );
}

export default MobileMenu;