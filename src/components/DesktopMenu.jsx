import React from 'react';
import '../styles/DesktopMenu.scss';

const DesktopMenu = () => {
    return (
        <div className="desktop-menu">
            <ul>
                <li>
                    <a href="/orders" className="title">My orders</a>
                </li>

                <li>
                    <a href="/account">My account</a>
                </li>

                <li>
                    <a href="/">Sign out</a>
                </li>
            </ul>
        </div>
    );
}

export default DesktopMenu;