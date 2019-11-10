export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
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
