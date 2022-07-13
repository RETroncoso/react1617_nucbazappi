import React from 'react';

import { BorderDecoration, CardCategoria } from './CategoriasStyles';

export const Categoria = ({ imgSource, title }) => {
  return (
    <CardCategoria whileTap={{ scale: 0.95 }}>
      <img src={imgSource} alt='' />
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
