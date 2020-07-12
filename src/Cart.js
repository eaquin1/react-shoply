import React, {useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import CartIcon from "./CartIcon";
import {applyDiscount} from "./actions"

function Cart() {
    const {
        cartItems,
        cartValue,
        discountAmount,
        discountApplied,
        products
      } = useSelector(st => st);
    const dispatch = useDispatch();

    const reduction = () => dispatch(applyDiscount(discount))
    const [discount, setDiscount] = useState("")
    
    

    function handleChange(e) {
        setDiscount(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault();
        reduction(discount);
        setDiscount("");
    }
    
    const renderTable = () => {
    let items = Object.keys(cartItems);
    let list = items.map((id) => (
        <tr key={id}>
            <td className="text-center align-middle">{products[id].name}</td>
            <td className="text-center align-middle">
                {products[id].price.toFixed(2)}
            </td>
            <td className="text-center align-middle">{cartItems[id]}</td>
            <td>
                <CartIcon id={id} />
            </td>
        </tr>
    ));
    

    return (
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Item Price</th>
                        <th>Item Quantity</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>{list}</tbody>
            </table>
            );
        }

        return cartItems.length === 0 ? (
            <h2>No items in cart yet!</h2>
        ) : (
            <div>
            {renderTable()}
            <p>
            Cart total: ${cartValue}
            {discountApplied ? (
                <span className="text-success"> ~ You saved {(discountAmount * 100).toFixed(0)}%!</span>
            ) : null }
            </p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="discount">Discount</label>
                <input 
                    name="discount"
                    id="discount"
                    onChange={handleChange}
                    value={discount}
                />
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
    
        }

export default Cart;
