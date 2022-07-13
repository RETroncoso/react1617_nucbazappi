import React from 'react';
import CardRecomendacion from './CardRecomendacion';
import { CardsContainer } from './CardsRecomendacionStyled';
import { recomendados } from '../../data/Recomendados';

const CardsRecomendacion = () => {
  return (
    <CardsContainer gridLength={recomendados.length}>
      {recomendados.map(recomendado => (
        <CardRecomendacion
          key={recomendado.id}
          title={recomendado.title}
          imageSource={recomendado.img}
          desc={recomendado.desc}
          price={recomendado.price}
        />
      ))}
    </CardsContainer>
  );
};

export default CardsRecomendacion;
