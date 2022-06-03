import React from 'react'
import { Text, VStack, SimpleGrid, Box, Container} from '@chakra-ui/react';
import { colors } from '../resources/colors';

const Body = () => {
  return (
      <div style={{marginLeft:"21%"}}>
    <VStack bg={colors.backgroundGray} alignItems="flex-start" paddingLeft='40px'>
    <Text fontSize='2xl' fontFamily="Poppins, sans-serif" mt="20px">Welcome, Darren</Text>
    <Text fontFamily="Poppins, sans-serif" color="rgb(148, 163, 175)" fontSize='sm'>Let's get your business started in view steps</Text>
    </VStack>
    <SimpleGrid
      bg={colors.backgroundGray}
      columns={{ md: 4 }}
      spacing='8'
      p='10'
      rounded='lg'>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
  <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
</SimpleGrid>
    </div>
  )
}

export default Body