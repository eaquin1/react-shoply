import {addToCart, removeFromCart} from "./actions"
import { APPLY_DISCOUNT, REMOVE_FROM_CART, ADD_TO_CART } from "./actionTypes"

describe('actions', () => {
    it("should create an action to add to cart", () => {
        const id="123"
        const expectedAction = {
            type: ADD_TO_CART,
            id
        }
        expect(addToCart(id)).toEqual(expectedAction)
    })

    it("should create an action to remove from cart", () => {
        const id="890";
        const expectedAction = {
            type: REMOVE_FROM_CART,
            id
        }
        expect(removeFromCart(id)).toEqual(expectedAction)
    })
})
