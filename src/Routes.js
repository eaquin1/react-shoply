import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Cart from "./Cart";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

function Routes() {
    return (
        <Switch>
            <Route exact path="/products/:id">
                <ProductDetails />
            </Route>
            <Route exact path="/cart">
                <Cart />
            </Route>
            <Route exact path="/">
                <ProductList />
            </Route>
            <Redirect to="/" />
        </Switch>
    );
}

export default Routes;
