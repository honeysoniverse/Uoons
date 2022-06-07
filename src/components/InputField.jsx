import React from 'react'
import { Input, Icon, HStack, color } from '@chakra-ui/react'
import { colors } from '../resources/colors'


const InputField = ({ placeholder, setValue, icon, type, mb, width, boxShadow}) => {


  
    const handleSetValue = (e) => {
        setValue(e.target.value)
    }
    
  return (
      <HStack mb={mb} width={width}>
         {icon && <Icon as={icon} color={colors.iconGray} />}
       <Input onChange={handleSetValue} placeholder={placeholder} type={type} boxShadow={boxShadow} bg={colors.backgroundGray}/>   
      </HStack>
    
  )
}

export default InputField