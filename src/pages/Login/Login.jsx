import React, { useEffect } from 'react';
import Submit from '../../components/UI/Submit/Submit';
import { signInWithGoogle } from '../../firebase/firebase-utils';
import {
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  LoginFormStyled,
  LoginInputStyled,
} from './LoginStyles';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {

  const {currentUser} = useSelector(state => state.user)

  const navigate = useNavigate()
  
  useEffect(() => {
    if(currentUser){
      navigate('/')
    }
  },[currentUser, navigate])

  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <LoginFormStyled>
        <LoginInputStyled type='text' placeholder='Email' />
        <LoginInputStyled type='password' placeholder='Password' />
        <p>O podés ingresar con</p>
        <LoginButtonGoogleStyled
          onClick={() => signInWithGoogle()}
        >
          <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png'
            alt=''
          />
          Google
        </LoginButtonGoogleStyled>
        <LoginEmailStyled to='/'>
          <p>Crear una cuenta</p>
        </LoginEmailStyled>
        <Submit value='Ingresar' />
      </LoginFormStyled>
    </LoginContainerStyled>
  );
};

export default Login;
