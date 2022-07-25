import React from "react";
import { MenuItem } from "./MenuItem";
import './NavBar.css';
import { Link } from 'react-router-dom'

const NavBar = () => {
   

    return (
    <nav className="navbarItem">
        <h1 className="navbar-logo">
            WildRP
            <i class="fa-brands fa-react"></i>
        </h1>

        <div className="menu-icon">
        </div>
        
        <ul className="nav-menu">
            {MenuItem.map((item, index) => {
                return(
            <li key={index}>
                <a className={item.cName} href={item.url}>
                    {item.title}
                </a>
            </li>
            )
            })}
        </ul>
    </nav>
    );
}

export default NavBar;