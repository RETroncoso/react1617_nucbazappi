import React from 'react';
import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';
import {
  CheckoutDatosStyled,
  CheckoutFormContainerStyled,
  CheckoutFormStyled,
} from './CheckoutFormStyles';

const CheckoutForm = () => {
  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <CheckoutFormContainerStyled>
        <CheckoutFormStyled>
          <Input
            htmlFor='nombre'
            type='text'
            id='nombre'
            placeholder='Tu nombre'
          >
            Nombre
          </Input>
          <Input
            htmlFor='celular'
            type='text'
            id='celular'
            placeholder='Tu celular'
          >
            Celular
          </Input>
          <Input
            htmlFor='localidad'
            type='text'
            id='localidad'
            placeholder='Tu localidad'
          >
            Localidad
          </Input>
          <Input
            htmlFor='direccion'
            type='text'
            id='dirección'
            placeholder='Tu dirección'
          >
            Dirección
          </Input>
        </CheckoutFormStyled>
        <div>
          <Submit value='Iniciar pedido' />
        </div>
      </CheckoutFormContainerStyled>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
