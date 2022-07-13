import React from 'react';

import { Link } from 'react-router-dom';
import {
  HrStyled,
  ModalContainerStyled,
  UsernameStyled,
} from './ModelUserStyles';

const ModalUser = ({closeModal}) => {
  return (
    <ModalContainerStyled
      initial={{ translateX: 600 }}
      animate={{ translateX: 0 }}
      exit={{ translateX: 600 }}
      transition={{ duration: 0.5 }}
      key='cart-user'
    >
      <UsernameStyled>Hola Santiago Fernandez</UsernameStyled>
      <HrStyled />
      <Link onClick={()=>closeModal(false)} to='/mis-ordenes'>Mis Ordenes</Link>
      <p>Cerrar Sesion</p>
    </ModalContainerStyled>
  );
};

export default ModalUser;
