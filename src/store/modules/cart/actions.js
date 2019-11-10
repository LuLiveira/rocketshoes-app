export function addToCart(products) {
  return {
    type: '@cart/ADD',
    products,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function decrementItem(id) {
  return {
    type: '@cart/DECREMENT',
    id,
  };
}

export function incrementItem(id) {
  return {
    type: '@cart/INCREMENT',
    id,
  };
}
