import React from 'react';
import { formatPrice } from '../../utils/formatPrice';
import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
} from './CardResumenStyles';

const CardResumen = ({title, desc, quantity, img, price}) => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src={img}
          alt={title}
        />
        <div>
          <h3>{title}</h3>
          <p>{desc}</p>
        </div>
      </ProductLeftStyled>
      <div>
        <p>{quantity}U</p>
        <ProductPriceStyled> {formatPrice(price * quantity)} </ProductPriceStyled>
      </div>
    </ProductStyled>
  );
};

export default CardResumen;
