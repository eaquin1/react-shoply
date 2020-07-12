import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CartIcon from "./CartIcon";

function ProductDetails() {
    const { id } = useParams();
    const products = useSelector((state) => state.products);

    return (
        <div className="card">
            <div className="card-body">
                <h2 className="card-title text-center">{products[id].name}</h2>
                <img
                    src={products[id].image_url}
                    alt="product"
                    style={{
                        width: "100%",
                        height: "20vw",
                        objectFit: "contain",
                    }}
                />
                <p>{products[id].description}</p>
                <p>Price: ${products[id].price}</p>
            </div>
            <CartIcon id={id} />
            <Link to="/" className="btn btn-block btn-link">Go back</Link>
        </div>
    );
}

export default ProductDetails;
