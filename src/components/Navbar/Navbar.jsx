import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AnimatePresence} from 'framer-motion'
import { CartNavStyled, LinkContainerStyled, LinksContainerStyled, NavbarContainerStyled, UserNavStyled } from './NavbarStyles'
import {HiHome} from 'react-icons/hi'
import {FaShoppingCart, FaUserAlt} from 'react-icons/fa'
import ModalCart from './ModalCart/ModalCart'

const Navbar = () => {

    const [openModal, setOpenModal] = useState()

  return (
    <NavbarContainerStyled>
    <AnimatePresence>
       {openModal && <ModalCart closeModal={setOpenModal} />}  
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
                <LinkContainerStyled home >
                    <HiHome/>
                </LinkContainerStyled>
                Home
            </Link>
            <CartNavStyled>
                <LinkContainerStyled
                    onClick={
                        () => {
                            setOpenModal(true)
                        }
                    }
                >
                    <FaShoppingCart/>
                    <span>1</span>
                </LinkContainerStyled>
            </CartNavStyled>
            <UserNavStyled>
                <LinkContainerStyled>
                    <span>¡Hola Guille!</span>
                    <FaUserAlt/>
                </LinkContainerStyled>
            </UserNavStyled>
        </LinksContainerStyled>
    </NavbarContainerStyled>
  )
}

export default Navbar