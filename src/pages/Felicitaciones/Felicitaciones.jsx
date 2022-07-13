import Link from '../../components/UI/Link/Link';
import {
  ContainerInfoStyled,
  PatternStyled,
  TextStyled,
} from './FelicitacionesStyled';

const Felicitaciones = () => {
  return (
    <div>
      <TextStyled>
        <img
          src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648433/coding/NucbaZappi/Assets/Success-illustration_sbucqm.png'
          alt=''
        />
        <ContainerInfoStyled>
          <h1>¡!</h1>
          <p>Tu pedido fué realizado</p>
        </ContainerInfoStyled>
        <Link to='/resumen'></Link>
      </TextStyled>
      <PatternStyled
        src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648434/coding/NucbaZappi/Assets/Pattern_lt5uru.png'
        alt=''
        className='pattern'
      />
    </div>
  );
};

export default Felicitaciones;
