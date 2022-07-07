import React from 'react'
import { InputSubmitStyled } from './SubmitStyles'

const Submit = ({value= 'Ingresar'}) => {
  return (
    <InputSubmitStyled
        whileTap={{scale: 0.95}}
        type='submit'
        value={value}
    ></InputSubmitStyled>
  )
}

export default Submit