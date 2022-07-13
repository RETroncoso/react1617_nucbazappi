import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import Button from '../UI/Button/Button';
import {
  HeroContainerStyled,
  HeroFormStyled,
  HeroSearchBarStyled,
  IconWrapperStyled,
} from './HeroStyles';

const Hero = () => {
  return (
    <HeroContainerStyled>
      <div>
        <h1 className='title'>¿Qué estás buscando?</h1>
        <HeroFormStyled>
          <HeroSearchBarStyled type='text' placeholder='Ej. Pizza Napolitana' />
          <IconWrapperStyled>
            <AiOutlineSearch />
          </IconWrapperStyled>
          <Button radius='10'>Buscar</Button>
        </HeroFormStyled>
      </div>
      <div>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648434/coding/NucbaZappi/Assets/pizza-hero_enjaeg.png'
          alt=''
        />
      </div>
    </HeroContainerStyled>
  );
};

export default Hero;
