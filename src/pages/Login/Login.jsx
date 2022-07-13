import Submit from '../../components/UI/Submit/Submit';
import {
  LoginButtonGoogleStyled,
  LoginContainerStyled,
  LoginEmailStyled,
  LoginFormStyled,
  LoginInputStyled,
} from './LoginStyles';

const Login = () => {
  return (
    <LoginContainerStyled>
      <h1>Iniciar Sesión</h1>
      <LoginFormStyled>
        <LoginInputStyled type='text' placeholder='Email' />
        <LoginInputStyled type='password' placeholder='Password' />
        <p>O podés ingresar con</p>
        <LoginButtonGoogleStyled>
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
