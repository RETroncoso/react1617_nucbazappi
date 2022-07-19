import React from 'react';
import CardRecomendacion from './CardRecomendacion';
import { CardsContainer } from './CardsRecomendacionStyled';
import { recomendados } from '../../data/Recomendados';
import { useSelector } from 'react-redux';

const CardsRecomendacion = () => {

  const recommended = useSelector(state => state.recommended.recommended)

  return (
    <CardsContainer gridLength={recommended.length}>
      {recommended.map(recomendado => (
        <CardRecomendacion
          key={recomendado.id} {...recomendado}
        />
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
