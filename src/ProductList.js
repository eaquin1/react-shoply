import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";
import Cart from "./Cart"

function ProductList() {
    const products = useSelector((state) => state.products);

    let productList = Object.keys(products);

    let list = productList.map((id) => (
        <div className="col-md-3 mb-3" key={id}>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title text-center">
                        <Link to={`/products/${id}`}>{products[id].name}</Link>  
                        <CartIcon id={id} />
                    </h2>       
                </div>
            </div>
        </div>
    ));
    
    return <div>
        {list}
        <Cart />
    </div>
}

export default ProductList;
