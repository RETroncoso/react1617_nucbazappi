import React from 'react';

import { Formik } from 'formik';
import { registerInitialValues, registerValidationSchema } from '../../formik';


import Submit from '../../components/UI/Submit/Submit';
import LoginInput from '../../components/UI/LoginInput/LoginInput';

import {
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  Form,
} from './RegisterStyles';
import { createUser, signInWithGoogle } from '../../firebase/firebase-utils';
import useRedirect from '../../hooks/useRedirect';


const Register = () => {

useRedirect('/')

  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      
      <Formik
        initialValues={registerInitialValues}
        validationSchema={registerValidationSchema}
        onSubmit={async (values, actions) => {
          try {
            await createUser(values.email, values.password, values.name);
          } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
              alert('Mail en uso');
            }
          }
          actions.resetForm();
        }}
      >
        <Form>
          <LoginInput name='name' type='text' placeholder='Nombre' />
          <LoginInput name='email' type='text' placeholder='Email' />
          <LoginInput name='password' type='password' placeholder='Password' />
          <p>O podés ingresar con</p>
          <LoginButtonGoogleStyled
            type='button'
            onClick={() => signInWithGoogle()}
         
          >
            <img
              src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
              alt=''
            />
            Google
          </LoginButtonGoogleStyled>
          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>Registrarte</Submit>
        </Form>
      </Formik>


    </LoginContainerStyled>
  );
};

export default Register;
