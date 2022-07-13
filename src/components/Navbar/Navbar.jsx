import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import { Link } from 'react-router-dom';

import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import ModalCart from './ModalCart/ModalCart';
import ModalUser from './ModalUser/ModalUser';
import {
  CartNavStyled,
  LinkContainerStyled,
  LinksContainerStyled,
  NavbarContainerStyled,
  UserNavStyled,
} from './NavbarStyles';

function Navbar() {
  const [openModal, setOpenModal] = useState();
  const [openUser, setOpenUser] = useState();

  return (
    <NavbarContainerStyled>
      <AnimatePresence>
        {openModal && <ModalCart closeModal={setOpenModal} />}
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
            onClick={() => {
              setOpenModal(true);
            }}
          >
            <FaShoppingCart />
            <span>1</span>
          </LinkContainerStyled>
        </CartNavStyled>

        <UserNavStyled
        closeModal={setOpenModal}
        >
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
