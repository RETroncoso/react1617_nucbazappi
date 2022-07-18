import React from 'react';
import { useSelector } from 'react-redux';

import CardProducto from './CardProducto';

import { ProductosContainer } from './CardsProductosStyles';

const CardsProductos = ({ limit }) => {
  let products = useSelector(state => state.products.products);
  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  );

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] };
  }

  return (
    <ProductosContainer>
      {Object.entries(products).map(([, foods]) =>
        foods.map(food => {
          if (limit >= food.id || selectedCategory) {
            return <CardProducto key={food.id} {...food} />;
          }
          return null;
        })
      )}
    </ProductosContainer>
  );
};

export default CardsProductos;