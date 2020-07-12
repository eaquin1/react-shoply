import rootReducer from "./rootReducer"
import { APPLY_DISCOUNT, REMOVE_FROM_CART, ADD_TO_CART } from "./actionTypes"
import data from "./data.json"

describe('shoply reducer', () => {
    it("should return the initial state", () => {
        expect(rootReducer(undefined, {})).toEqual(
            {
                products: data.products,
                cartItems: {},
                cartValue: 0.0,
            }
        )
    })

    it("should handle ADD_TO_CART", () => {
        expect(
            rootReducer([], {
                type: ADD_TO_CART,
                id: "47314fa1-ae56-4eae-80be-af6691145951"
            })
        ).toEqual(
            {
            products: data.products,
            cartItems: {"47314fa1-ae56-4eae-80be-af6691145951": 1},
            cartValue: "0.00"
            }
        )
    })
})