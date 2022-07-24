import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from '../../../utils/formatPrice';

import CardProductCheckout from '../../CardProductCheckout/CardProductCheckout';
import Link from '../../UI/Link/Link';

import {
  ProductosContainerStyled,
  ProductsTitleStyled,
  CardsWrapperStyled,
  PriceContainerStyled,
  SubtotalStyled,
  EnvioStyled,
  HrStyled,
  TotalStyled,
  PriceTotalStyled,
} from './ProductsCheckoutStyles';

const ProductsCheckout = () => {

  const {cartItems, shippingCost} = useSelector(state => state.cart)

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);
 
  return (
    <ProductosContainerStyled>
      <ProductsTitleStyled>Tu pedido</ProductsTitleStyled>
      <CardsWrapperStyled>
       {
        cartItems.length ? (
          cartItems.map(item => <CardProductCheckout key={item.id} {...item} />)
          ): ( 
            <>
            <p>No seas amarrete, compra algo.</p>
            <Link/>
            </>
          )
        
       }
      </CardsWrapperStyled>
      <PriceContainerStyled>
        <SubtotalStyled>
          <p>Subtotal</p>
          <span>{formatPrice(totalPrice)}</span>
                  </SubtotalStyled>
        <EnvioStyled>
          <p>Envío:</p>
          <span>{formatPrice(shippingCost)}</span>
        </EnvioStyled>
        <HrStyled />
        <TotalStyled>
          <p>Total:</p>
          <PriceTotalStyled>
            {formatPrice(totalPrice + shippingCost)}
          </PriceTotalStyled>
        </TotalStyled>
      </PriceContainerStyled>
    </ProductosContainerStyled>
  );
};

export default ProductsCheckout;