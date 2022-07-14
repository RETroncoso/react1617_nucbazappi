import {useRef, useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import { INITIAL_LIMIT } from '../../utils';

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
  const [limit, setLimit] = useState(INITIAL_LIMIT)
  const [element, setElement] = useState(null)
  const productsRef = useRef();

  const selectedCategory = useSelector(
    state => state.categories.selectedCategory
  )

  const totalProducts = useSelector(state => state.products.totalProducts)

    useEffect(() => setElement(productsRef.current), [])

    useEffect(() => setLimit(INITIAL_LIMIT), [selectedCategory])

  return (
    <HomeWrapper>
      {/* Hero Section */}

      <Hero elementRef={element} />

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
      <ProductosWrapper ref={productsRef} >
        <h2>Nuestros productos</h2>
        <CardsProductos
          limit={limit}
        />
        {
          !selectedCategory &&
          <ButtonContainerStyled>
          <Button
           onClick={() => setLimit(
            prevLimit => prevLimit - INITIAL_LIMIT
           )}
            secondary 
            disabled={INITIAL_LIMIT === limit}
          >
            <span>Ver menos</span>
          </Button>
          <Button
            onClick={() => setLimit(
              prevLimit => prevLimit + INITIAL_LIMIT
            )}
           disabled={totalProducts <= limit}
          >
            Ver más
          </Button>
        </ButtonContainerStyled>
        }
        
      </ProductosWrapper>
    </HomeWrapper>
  );
}

export default Home;
