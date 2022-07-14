import React from 'react';

import {useDispatch, useSelector} from 'react-redux'

import * as categoriesActions from '../../Redux/categories/categories-actions'

import { BorderDecoration, CardCategoria } from './CategoriasStyles';

export const Categoria = ({ imgSource, title, category }) => {

  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  )

  const dispatch = useDispatch()


  const handlerFilter = category => {
    dispatch(categoriesActions.selectCategory(category))
  }

  return (
    <CardCategoria
      selected={category === selectedCategory}
      onClick={() => handlerFilter(category)}
    whileTap={{ scale: 0.95 }}>
      <img src={imgSource} alt='' />
      <h2>{title}</h2>
      <BorderDecoration></BorderDecoration>
    </CardCategoria>
  );
};

export default Categoria;
