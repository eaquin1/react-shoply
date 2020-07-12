import React from "react";
import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "./actions";
import "./CartIcon.css"


function CartIcon({ id }) {
    const dispatch = useDispatch();

    const increase = () => dispatch(addToCart(id));
    const decrease = () => dispatch(removeFromCart(id));

    return (
        <div className="d-flex justify-content-between">
            <i
                className="CartIcon fas fa-cart-plus fa-2x text-success"
                onClick={increase}
            />
            <i className="CartIcon fas fa-trash fa-2x text-danger" onClick={decrease} />
        
        </div>
    );
}

export default CartIcon;
