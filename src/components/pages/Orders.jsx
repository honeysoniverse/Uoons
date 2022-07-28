import React from 'react'
import { Box, Text, Link, Flex, Center, Icon, Input } from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaSearch } from 'react-icons/fa';


const Orders = () => {


  return (
    <Box bg={colors.backgroundGray} p={6} m="auto">
      <Flex color="white" justifyContent="flex-end" mb="16px" >
        <Link name='Add Product' />
      </Flex>
      <Box bg={colors.white} borderRadius="lg" height="auto" padding='20px' fontFamily='Poppins, sans-serif' ml="300px">
        <Text fontSize="lg" color="black" ml="20px">
          Orders
        </Text>

        <Flex marginTop="25px" ml="20px">


          <Center><Icon as={FaSearch} mr="10px" /></Center>
          <Input placeholder="Search..." w="32%" />
          <Button name="Search"></Button>
        </Flex>



      </Box>
    </Box>
  )
}

export default React.memo(Orders);