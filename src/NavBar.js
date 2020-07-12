import React from "react";
import { NavLink } from "react-router-dom";
import { sumCartItems } from "./helper/helpers";
import { useSelector } from "react-redux";

function NavBar() {
    const itemCount = useSelector((state) =>
        sumCartItems(state.cartItems)
    );
    const cartValue = useSelector((state) => state.cartValue);
    const itemUnit = itemCount === 1 ? "item" : "items";

    return (
        <nav className="navbar navbar-light bg-info pb-3 mb-3">
            <NavLink className="text-light" to="/">Shoply</NavLink>
            <NavLink className="text-light" to="/cart">Cart</NavLink>
            <ul className="navbar-nav flex-row">
                <li className="nav-item pr-3">
                <span className="navbar-text text-light">
                    {itemCount} {itemUnit} (${cartValue})
                </span>
                </li>
            </ul>
        </nav>
    );
}

export default NavBar;
