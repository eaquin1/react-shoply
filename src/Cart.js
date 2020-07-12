import React from "react"
import { useSelector } from "react-redux";

function Cart() {
    const cartSum = useSelector(state => state.cartValue)

    return (
        <div>Cart total: {cartSum}</div>
    )
}


export default Cart