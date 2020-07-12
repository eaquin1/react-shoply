import { APPLY_DISCOUNT, REMOVE_FROM_CART, ADD_TO_CART } from "./actionTypes"

export function addToCart(id) {
    return {
        type: ADD_TO_CART,
        id
    }
}

export function removeFromCart(id) {
    return {
        type: REMOVE_FROM_CART,
        id
    }
}

export function applyDiscount(discount) {
    return {
        type: APPLY_DISCOUNT,
        discount
    }
}

