export function sumCartItems(cart){
    let totalQuantity = 0;
    for(let id in cart) {
        totalQuantity += cart[id]
    }
    return totalQuantity;
}

export function calculateCartTotal(products, cart, discount=0){
    let total = 0;
    for (let id in products) {
        const {price} = products[id];
        const quantity = cart[id] || 0;
        total += price * quantity;
    }
    let totalWithDiscount = total * (1 - discount)
    return totalWithDiscount.toFixed(2)
}

