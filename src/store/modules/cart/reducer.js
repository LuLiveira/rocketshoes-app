import produce from 'immer';

export default function cart(state = [], action) {
  switch (action.type) {
    case '@cart/ADD':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.products.id);

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.products,
            amount: 1,
          });
        }
      });

    case '@cart/REMOVE':
      return produce(state, draft => {
        const productIndex = draft.findIndex(p => p.id === action.id);

        if (productIndex >= 0) {
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/DECREMENT':
      return produce(state, draft => {
        const product = draft.find(p => p.id === action.id);

        product.amount -= 1;

        if (product.amount === 0) {
          const productIndex = draft.findIndex(p => p.id === action.id);
          draft.splice(productIndex, 1);
        }
      });

    case '@cart/INCREMENT':
      return produce(state, draft => {
        console.tron.log('aqui');
        const product = draft.find(p => p.id === action.id);
        product.amount += 1;
      });
    default:
      return state;
  }
}
