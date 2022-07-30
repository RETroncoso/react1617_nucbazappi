import React from 'react';

import {
  checkoutInitialValues,
  checkoutValidationSchema,
} from '../../../formik';
import Loader from '../../UI/Loader/Loader'

import Input from '../../UI/Input/Input';
import Submit from '../../UI/Submit/Submit';

import { CheckoutDatosStyled, Formik, Form } from './CheckoutFormStyles';
import { useDispatch } from 'react-redux';
import * as orderActions from '../../../Redux/orders/order-actions'
import * as cartActions from '../../../Redux/cart/cart-actions'
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({cartItems, price, shippingCost}) => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  return (
    <CheckoutDatosStyled>
      <h2>Ingresá tus datos</h2>
      <Formik
        initialValues={checkoutInitialValues}
        validationSchema={checkoutValidationSchema}
        onSubmit={ async values => {
          const orderData = {
            cartItems,
            price,
            shippingCost,
            total: price + shippingCost,
            shippingDetails: {...values},
          };
          try {
            await dispatch(orderActions.createOrder(orderData));
            navigate('/felicitaciones');
            dispatch(cartActions.clearCart());
          } catch (error) {
            alert('Error al crear la orden');
          }
        }}
      >
        {({ isSubmitting }) => (
        <Form>
          <Input
            name='name'
            htmlFor='nombre'
            type='text'
            id='nombre'
            placeholder='Tu nombre'
          >
            Nombre
          </Input>
          <Input
          name='cellphone'
            htmlFor='celular'
            type='text'
            id='celular'
            placeholder='Tu celular'
          >
            Celular
          </Input>
          <Input
          name='location'
            htmlFor='localidad'
            type='text'
            id='localidad'
            placeholder='Tu localidad'
          >
            Localidad
          </Input>
          <Input
          name='address'
            htmlFor='direccion'
            type='text'
            id='dirección'
            placeholder='Tu dirección'
          >
            Dirección
          </Input>
        
        <div>
        <Submit>
                {isSubmitting ? <Loader /> : 'Iniciar Pedido'}
              </Submit>
        </div>
        </Form>
        )}
      </Formik>
    </CheckoutDatosStyled>
  );
};

export default CheckoutForm;
