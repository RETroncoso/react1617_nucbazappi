import CardsRecomendacion from '../../components/Recomendados/CardsRecomendacion';

import Categorias from '../../components/Categorias/Categorias';
import CardsProductos from '../../components/Productos/CardsProductos';
import {
  ButtonContainerStyled,
  CategoriasWrapper,
  HomeWrapper,
  ProductosWrapper,
  RecomendadosWrapper,
} from './HomeStyles';

import Button from '../../components/UI/Button/Button';

import Hero from '../../components/Hero/Hero';

function Home() {
  return (
    <HomeWrapper>
      {/* Hero Section */}

      <Hero />

      {/* Recomendados Section */}
      <RecomendadosWrapper>
        <h2>Hoy te recomendamos</h2>
        <CardsRecomendacion />
      </RecomendadosWrapper>

      {/* Categorias Section */}
      <CategoriasWrapper>
        <h2>Categorias</h2>
        <Categorias />
      </CategoriasWrapper>

      {/* Populares Section*/}
      <ProductosWrapper>
        <h2>Nuestros productos</h2>
        <CardsProductos />
        <ButtonContainerStyled>
          <Button
            /* onClick={} */
            secondary 
            /*  disabled={} */
          >
            <span>Ver menos</span>
          </Button>
          <Button
            /* onClick={} */
            /*  disabled={} */
          >
            Ver más
          </Button>
        </ButtonContainerStyled>
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;
