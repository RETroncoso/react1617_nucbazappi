import React from 'react';
import Button from '../UI/Button/Button';

import {
  Card,
  CardImg,
  CardPrice,
  CardText,
  CardTitle,
  InfoCard,
} from './CardsRecomendacionStyled';

const CardRecomendacion = ({ title, imageSource, price, desc }) => {
  return (
    <Card>
      <CardImg src={imageSource} alt={title} />
      <CardText>
        <CardTitle>{title}</CardTitle>
        <InfoCard>{desc}</InfoCard>
        <CardPrice>${price}</CardPrice>
      </CardText>
      <Button>Agregar</Button>
    </Card>
  );
};

export default CardRecomendacion;
