import React from 'react'
import { Link as LinkComp, color } from '@chakra-ui/react'
import { colors } from '../resources/colors'
import { pathNames } from './config/pathNames'
import { NavLink } from 'react-router-dom'

const Link = ({ name, pathName}) => {
  return (
    <LinkComp
    width={{base: '8', md: '12', xl: '12', xxl: '14'}} 
    bg={colors.cornflowerBlue}
    as={NavLink}
    color={colors.white} 
    borderRadius='8px'
    padding='8px 12px'
    to={pathName}
   
    >
        {name}
        </LinkComp>
  )
}

export default Link