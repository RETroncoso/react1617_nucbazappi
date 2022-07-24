import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as userActions from '../../../Redux/user/user-actions'

import { auth } from '../../../firebase/firebase-utils';
import { Link } from 'react-router-dom';
import {
  HrStyled,
  ModalContainerStyled,
  UsernameStyled,
} from './ModelUserStyles';

const ModalUser = () => {
  const { currentUser } = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <ModalContainerStyled
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ duration: 0.5 }}
      key='cart-user'
    >
      <UsernameStyled>{`Hola ${currentUser?.displayName}`}</UsernameStyled>
      <HrStyled />
      <Link to='/mis-ordenes'>Mis Ordenes</Link>

      <span
      onClick={() => auth.signOut().then(() => dispatch(userActions.toggleMenuHidden())) }
      >Cerrar Sesion</span>

    </ModalContainerStyled>
  );
};

export default ModalUser;
