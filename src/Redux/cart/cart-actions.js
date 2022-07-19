export const TOGGLE_HIDDEN_CART = 'TOGGLE_HIDDEN_CART';
export const ADD_TO_CART = 'ADD_TO_CART';

export const toggleHiddenCart = () => ({ type: TOGGLE_HIDDEN_CART });
export const addToCart = product => ({ type: ADD_TO_CART, payload: product });
