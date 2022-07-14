import React from 'react';
import { ProductosContainer } from './CardsProductosStyles';
import CardProducto from './CardProducto';
import {useSelector} from 'react-redux'

const CardsProductos = ({limit}) => {

  let products = useSelector(state => state.products.products);

  const selectedCategory = useSelector(state => state.categories.selectedCategory)

  if (selectedCategory) {
    products = { [selectedCategory]: products[selectedCategory] }
  }

  return (
    <ProductosContainer>

      {Object.entries(products).map(([ , foods]) =>
      foods.map(
        food =>
        {
          if (limit >= food.id || selectedCategory) {
            return (
              <CardProducto
          key={food.id}
          title={food.title}
          imgSource={food.img}
          desc={food.desc}
          price={food.price}
        />
            )
          }return null
        }
      )
      )
      }
    </ProductosContainer>
  );
};

export default CardsProductos;
