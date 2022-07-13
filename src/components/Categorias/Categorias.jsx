import React from 'react';
import Categoria from './Categoria';
import { CategoriasContainer } from './CategoriasStyles';
import { Categories } from '../../data/Categories';

const Categorias = () => {
  return (
    <CategoriasContainer>
      {Categories.map(categoria => (
        <Categoria
          imgSource={categoria.img}
          title={categoria.title}
          key={categoria.id}
        />
      ))}
    </CategoriasContainer>
  );
};

export default Categorias;
