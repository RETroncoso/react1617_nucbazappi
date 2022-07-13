import React from 'react';

import CardProductCheckout from '../../CardProductCheckout/CardProductCheckout';
import {
  CheckoutContainerPriceStyled,
  CheckoutContainerProductosStyled,
  CheckoutEnvioStyled,
  CheckoutHrStyled,
  CheckoutPriceTotalStyled,
  CheckoutSubtotalStyled,
  CheckoutTotalStyled,
} from './ProductsCheckoutStyles';

const ProductsCheckout = () => {
  return (
    <CheckoutContainerProductosStyled>
      <CardProductCheckout />
      <CardProductCheckout />
      <CheckoutContainerPriceStyled>
        <CheckoutSubtotalStyled>
          <p>Subtotal</p>
          <span>$4890</span>
        </CheckoutSubtotalStyled>
        <CheckoutEnvioStyled>
          <p>Envío:</p>
          <span>Gratis</span>
        </CheckoutEnvioStyled>
        <CheckoutHrStyled />
        <CheckoutTotalStyled>
          <p>Total:</p>
          <CheckoutPriceTotalStyled>$4890</CheckoutPriceTotalStyled>
        </CheckoutTotalStyled>
      </CheckoutContainerPriceStyled>
    </CheckoutContainerProductosStyled>
  );
};

export default ProductsCheckout;
