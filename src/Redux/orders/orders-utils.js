export const createOrderSuccess = (orders, newOrder) => {
  const repeatedOrder = orders.map(order => order.id).includes(newOrder.id);

  if (repeatedOrder) {
    return orders.filter(order =>
      order !== newOrder.id ? order : { ...newOrder }
    );
  }

  return [...orders, { ...newOrder }];
};
