export const addItemToCart = (cartItems, product) => {
  const productInCart = cartItems.find(item => item.id === product.id);

  if (productInCart) {
    return cartItems.map(item =>
      item.id === productInCart.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...product, quantity: 1 }];
};
