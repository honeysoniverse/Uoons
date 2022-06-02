import React from 'react'
import { Text, VStack, SimpleGrid, Box} from '@chakra-ui/react';
import { colors } from '../resources/colors';

const Body = () => {
  return (
      <>
    <VStack marginRight="32%">
    <Text fontSize='2xl' fontFamily="Poppins, sans-serif">Welcome, Darren</Text>
    <Text fontFamily="Poppins, sans-serif" color="rgb(148, 163, 175)" fontSize='sm'>Let's get your business started in view steps</Text>
    </VStack>
    <SimpleGrid
      bg={colors.backgroundGray}
      columns={{ sm: 2, md: 4 }}
      spacing='8'
      p='10'
      textAlign='center'
      rounded='lg'>
  <Box boxShadow='base' p='20' rounded='md' bg='white'></Box>
  <Box boxShadow='base' p='20' rounded='md' bg='white'></Box>
  <Box boxShadow='base' p='20' rounded='md' bg='white'></Box>
  <Box boxShadow='base' p='20' rounded='md' bg='white'></Box>
  <Box boxShadow='base' p='20' rounded='md' bg='white'></Box>
  <Box boxShadow='base' p='20' rounded='md' bg='white'></Box>
  <Box boxShadow='base' p='20' rounded='md' bg='white'></Box>
  <Box boxShadow='base' p='20' rounded='md' bg='white'></Box>
</SimpleGrid>
    </>
  )
}

export default Body