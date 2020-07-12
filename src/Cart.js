import React from "react"
import { useSelector } from "react-redux";

function Cart() {
    const cartSum = useSelector(state => state.cartValue)
    const cartItems = useSelector(state => state.cartItems)
    const products = useSelector(state => state.products)
console.log("cart items", cartItems)
    let items = Object.keys(cartItems)
    console.log("items", items)
    let list = items.map((id) => 
        (<p key={id}>{products[id].name}</p>)
    )
    
    return (
        
        <div>Cart total: {cartSum}
        {list}
        </div>
    )
}


export default Cart