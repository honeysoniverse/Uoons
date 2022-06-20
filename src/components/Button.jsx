import React from 'react'
import { Button as ButtonComp, color } from '@chakra-ui/react'
import { colors } from '../resources/colors'

const Button = ({ name, handleOnClick }) => {
  return (
    <ButtonComp value={name} onClick={handleOnClick} width={{ base: '8', md: '12', xl: '12', xxl: '14' }} bg={colors.cornflowerBlue} color={colors.white}
      _hover={{ bg: colors.white, color: colors.black }}
      _focus={{ outline: 'none', color: colors.white }}>
      {name}
    </ButtonComp>
  )
}

export default Button 