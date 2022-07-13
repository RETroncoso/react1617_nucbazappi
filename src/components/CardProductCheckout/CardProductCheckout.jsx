import Count from '../UI/Count/Count';
import Increase from '../UI/Increase/Increase';
import {
  CheckoutContainerStyled,
  CheckoutInfoStyled,
  CheckoutProductInfoStyled,
  PriceStyled,
  ProductTitleStyled,
} from './CardProductCheckoutStyles';

const CardProductCheckout = () => {
  return (
    <CheckoutContainerStyled>
      <CheckoutProductInfoStyled>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/Bennazianna_t40kz2.png'
          alt=''
        />
        <CheckoutInfoStyled>
          <ProductTitleStyled>Bennazianna</ProductTitleStyled>
          <p>Para todo el dia</p>
          <PriceStyled>$870</PriceStyled>
        </CheckoutInfoStyled>
      </CheckoutProductInfoStyled>
      <div>
        <Increase>-</Increase>
        <Count>1</Count>
        <Increase secondary>+</Increase>
      </div>
    </CheckoutContainerStyled>
  );
};

export default CardProductCheckout;
