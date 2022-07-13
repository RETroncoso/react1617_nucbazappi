import React from 'react';
import { ProductosContainer } from './CardsProductosStyles';
import CardProducto from './CardProducto';
import { products } from '../../data/Products';

const CardsProductos = () => {
  return (
    <ProductosContainer>
      {products.map(product => (
        <CardProducto
          key={product.id}
          title={product.title}
          imgSource={product.img}
          desc={product.desc}
          price={product.price}
        />
      ))}
    </ProductosContainer>
  );
};

export default CardsProductos;
