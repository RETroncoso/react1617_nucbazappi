import React, { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link } from 'react-router-dom';

import * as cartActions from '../../Redux/cart/cart-actions'

import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import ModalCart from './ModalCart/ModalCart';
import ModalUser from './ModalUser/ModalUser';
import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  ModalOverlayStyled,
  NavbarContainerStyled,
  UserNavStyled,
} from './NavbarStyles';

function Navbar() {
  const [openUser, setOpenUser] = useState();

  const hiddenCart = useSelector(state => state.cart.hidden)

  const dispatch = useDispatch()

  const totalCartItenms = useSelector(state => state.cart.cartItems).reduce((acc, item) => (acc += item.quantity), 0)

  useEffect(() => {
    if(!hiddenCart) {
      dispatch(cartActions.toggleHiddenCart())
    }
  },[dispatch])

  return (
    <NavbarContainerStyled>
      {
        !hiddenCart && (
          <ModalOverlayStyled
            onClick={() => !hiddenCart && dispatch(cartActions.toggleHiddenCart())}
            isHidden={hiddenCart}
          />
        )
      }
      <AnimatePresence>
         {
      !hiddenCart && <ModalCart/>
    }
      </AnimatePresence>
   

      <AnimatePresence>
        {openUser && <ModalUser closeModal={setOpenUser} />}
      </AnimatePresence>
      <div>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark.png'
            alt=''
          />
        </Link>
      </div>
      <LinksContainerStyled>
        <Link to='/'>
          <LinkContainerStyled home>
            <HiHome />
          </LinkContainerStyled>
          Home
        </Link>

        <CartNavStyled>
          <LinkContainerStyled
          onClick={() => dispatch(cartActions.toggleHiddenCart())}
          >
            <FaShoppingCart />
            <span>{totalCartItenms}</span>
          </LinkContainerStyled>
        </CartNavStyled>

        <UserNavStyled>
          <LinkContainerStyled
            onClick={() => {
              setOpenUser(!openUser);
            }}
          >
            <span>¡Hola Santi!</span>
            <FaUserAlt />
          </LinkContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
