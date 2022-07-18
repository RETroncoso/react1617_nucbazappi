import Increase from '../../UI/Increase/Increase';
import Submit from '../../UI/Submit/Submit';
import Count from '../../UI/Count/Count';
import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import {
  CloseButtonContainerStyled,
  ButtonContainerStyled,
  CloseButtonStyled,
  ContainerStyled,
  EnvioStyled,
  PriceContainerStyled,
  PriceStyled,
  ProductContainerStyled,
  SubtotalStyled,
  TitleStyled,
  TotalStyled,
  MainContainerStyled,
  ProductsWrapperStyled
} from './ModalCartStyles';

const ModalCart = ({ closeModal }) => {
  return (
    <ContainerStyled
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ type: 'spring', damping: 27 }}
      key='cart-modal'
    >
      <CloseButtonContainerStyled>
        <CloseButtonStyled
          className='close__modal '
          whileTap={{ scale: 0.95 }}
          onClick={() => closeModal(false)}
        >
          <MdOutlineClose size='24px' />
        </CloseButtonStyled>
      </CloseButtonContainerStyled>
      <MainContainerStyled>
      <TitleStyled>
        <h1>Tus Productos</h1>
        <Increase
            bgColor='#ff005c'
          >
            <IoMdTrash />
          </Increase>
      </TitleStyled>
      <ProductContainerStyled>
        
          <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/Bennazianna_t40kz2.png'
            alt=''
          />
          <div>
            <p>Bennazianna</p>
            <p>La más completa</p>
            <PriceStyled>$3650</PriceStyled>
          </div>
          <div>
            <Increase>-</Increase>
            <Count>1</Count>
            <Increase secondary>+</Increase>
          </div>
      
        </ProductContainerStyled>
        </MainContainerStyled>

        <PriceContainerStyled>
          <SubtotalStyled>
            <p>Subtotal:</p>
            <span>$4890</span>
          </SubtotalStyled>
          <EnvioStyled>
            <p>Envio</p>
            <span>Gratis</span>
          </EnvioStyled>
          <hr />
          <TotalStyled>
            <p>Total:</p>
            <PriceStyled>$4890</PriceStyled>
          </TotalStyled>
          <ButtonContainerStyled>
            <Submit>Iniciar pedido</Submit>
          </ButtonContainerStyled>
        </PriceContainerStyled>
  
    </ContainerStyled>
  );
};

export default ModalCart;
