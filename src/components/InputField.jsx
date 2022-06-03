import React from 'react'
import { Input, Icon, HStack } from '@chakra-ui/react'
import { colors } from '../resources/colors'

const InputField = ({ placeholder, setValue, icon, type, mb, width, boxShadow}) => {
    const handleSetValue = (e) => {
        setValue(e.target.value)
    }
  return (
      <HStack mb={mb} width={width}>
         <Icon as={icon} color={colors.iconGray} />
       <Input onChange={handleSetValue} placeholder={placeholder} type={type} boxShadow={boxShadow}/>   
      </HStack>
    
  )
}

export default InputField