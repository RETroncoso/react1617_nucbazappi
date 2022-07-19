import React from 'react';
import Button from '../UI/Button/Button';
import {useDispatch} from 'react-redux/es/exports'
import { formatPrice } from '../../utils/formatPrice';
import * as cartActions from '../../Redux/cart/cart-actions'

import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from './CardsRecomendacionStyled';

const CardRecomendacion = ({ title, img, price, desc, id }) => {

  const dispatch = useDispatch();

  return (
    <Card>
      <CardImg src={img} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>{formatPrice(price)}</CardPrice>
      </CardText>
      <Button
        onClick={() => dispatch(cartActions.addToCart({img, title, desc, price, id}))}
      >Agregar</Button>
    </Card>
  );
};

export default CardRecomendacion;
