import React from 'react'
import { Input, Icon, HStack } from '@chakra-ui/react'
import { colors } from '../resources/colors'

const InputField = ({ placeholder, setValue, icon }) => {
    const handleSetValue = (e) => {
        setValue(e.target.value)
    }
  return (
      <HStack>
         <Icon as={icon} color={colors.iconGray} />
       <Input onChange={handleSetValue} placeholder={placeholder}/>   
      </HStack>
    
  )
}

export default InputField