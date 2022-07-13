import React from 'react';
import {
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
} from './CardResumenStyles';

const CardResumen = () => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/Bennazianna_t40kz2.png'
          alt=''
        />
        <div>
          <h3>Pizza Bennazianna</h3>
          <p>Casera a la piedra, muzarella, jamón, morrón asado, huevo.</p>
        </div>
      </ProductLeftStyled>
      <div>
        <p>3U</p>
        <p>#0002617</p>
        <ProductPriceStyled>$3500</ProductPriceStyled>
      </div>
    </ProductStyled>
  );
};

export default CardResumen;
