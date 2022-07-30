import React, { useEffect, useState } from 'react';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';



import * as cartActions from '../../Redux/cart/cart-actions'
import * as userActions from '../../Redux/user/user-actions'

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
  SpanStyled,
  UserNavStyled,
} from './NavbarStyles';

function Navbar() {
  const [openUser, setOpenUser] = useState();

  const hiddenCart = useSelector(state => state.cart.hidden)
  const { hiddenMenu, currentUser } = useSelector(state => state.user);

  const dispatch = useDispatch()

  const navigate = useNavigate()

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
      <AnimatePresence>{!hiddenCart && <ModalCart/>}</AnimatePresence>
      <AnimatePresence>{!hiddenMenu && <ModalUser />}</AnimatePresence>
      <div>
        <Link to='/'>
          <img
            src='https://res.cloudinary.com/dcatzxqqf/image/upload/v1658797659/coding/NucbaZappi/Assets/nucba-zappi-icon_oe3ark_xmvab5.png'
            alt=''
          />
        </Link>
      </div>
      <LinksContainerStyled>
<motion.div whileTap={{ scale: 0.97 }}>
        <Link to='/'>
          <LinkContainerStyled home>
            <HiHome />
          </LinkContainerStyled>
          Home
        </Link>
</motion.div>

        <CartNavStyled>
          <LinkContainerStyled
          onClick={() => {dispatch(cartActions.toggleHiddenCart());
            !hiddenMenu && dispatch(userActions.toggleMenuHidden())}
          }
          >
            <FaShoppingCart />
            <span>{totalCartItenms}</span>
          </LinkContainerStyled>
        </CartNavStyled>

        <UserNavStyled>
          <LinkContainerStyled
            onClick={() =>
              currentUser
              ? dispatch(userActions.toggleMenuHidden())
              : navigate('/register')
                
            }
          >
            <SpanStyled> {
                currentUser ? `${currentUser.displayName}` : 'Inicia sesión'
              } </SpanStyled>
            <FaUserAlt />
          </LinkContainerStyled>
        </UserNavStyled>
      </LinksContainerStyled>
    </NavbarContainerStyled>
  );
}

export default Navbar;
