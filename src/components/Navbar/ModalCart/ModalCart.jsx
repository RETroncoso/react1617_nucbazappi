import Increase from '../../UI/Increase/Increase';
import Submit from '../../UI/Submit/Submit';
import Count from '../../UI/Count/Count';
import { MdOutlineClose } from 'react-icons/md';
import { IoMdTrash } from 'react-icons/io';
import * as cartActions from '../../../Redux/cart/cart-actions'
import { useDispatch } from 'react-redux/es/exports';
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
import { useSelector } from 'react-redux';
import ModalCartCard from './ModalCartCard';
import { formatPrice } from '../../../utils/formatPrice';
import { useNavigate } from 'react-router-dom';


const ModalCart = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {cartItems, shippingCost} = useSelector(state => state.cart);

  const totalPrice = cartItems.reduce((acc, item) => {
    return (acc += item.price * item.quantity);
  }, 0);

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
          onClick={() => dispatch(cartActions.toggleHiddenCart())}
        >
          <MdOutlineClose size='24px' />
        </CloseButtonStyled>
      </CloseButtonContainerStyled>
      <MainContainerStyled>
      <TitleStyled>
        <h1>Tus Productos</h1>
        <Increase
            bgColor='#ff005c'
            disabled={cartItems.length === 0}
            onClick={() => dispatch(cartActions.clearCart())}
          >
            <IoMdTrash />
          </Increase>
      </TitleStyled>

      <ProductsWrapperStyled>

      {cartItems.length ? (
        cartItems.map(item => <ModalCartCard key={item.id} {...item}/> )
      ) : (
        <p>No seas amarrete, compra algo</p>
      )}

      </ProductsWrapperStyled>

        </MainContainerStyled>

        <PriceContainerStyled>
          <SubtotalStyled>
            <p>Subtotal:</p>
            <span>{formatPrice(totalPrice)}</span>
          </SubtotalStyled>
          <EnvioStyled>
            <p>Envio</p>
            <span>{formatPrice(shippingCost)}</span>
          </EnvioStyled>
          <hr />
          <TotalStyled>
            <p>Total:</p>
            <PriceStyled>{formatPrice(totalPrice + shippingCost)}</PriceStyled>
          </TotalStyled>
          <ButtonContainerStyled>
            <Submit
            disabled={cartItems.length === 0}
            onClick={() => {
              navigate('/checkout');
              dispatch(cartActions.toggleHiddenCart())
            }}
            >Iniciar pedido</Submit>
          </ButtonContainerStyled>
        </PriceContainerStyled>
  
    </ContainerStyled>
  );
};

export default ModalCart;
