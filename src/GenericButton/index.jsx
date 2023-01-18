
import React from 'react'
import { ButtonPosition } from './style'

const Button = ({ text, onClick }) => (
  <ButtonPosition onClick={onClick}>
    {text}
  </ButtonPosition>
)

export default Button
