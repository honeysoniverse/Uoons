import React, { useState } from 'react';
import {
  Switch,
  Flex,
  Box,
  Text,
  Image,
  HStack,
  Link,
  Icon,
  VStack,
  Checkbox,
  FormLabel,
  color,
  Center,
  Square,
  Select,
  Spacer,
  Input,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaUser,
  FaKey,
  FaBars,
} from 'react-icons/fa';
import axios from 'axios';
import PagesWrapper from './PagesWrapper';
import { colors } from '../resources/colors';
import Button from './Button';
import InputField from './InputField';
import { FaSearch } from 'react-icons/fa';

const Product = () => {
  return (
    <Box bg={colors.backgroundGray} w="80%" p={4} ml="20%">
      <Flex color="white" justifyContent="flex-end" mb="16px">
        <Button name="Add Product"></Button>
      </Flex>

      <Box bg={colors.white} borderRadius="lg">
        {/* <Button colorScheme="blue" ml="80%">
        <Text fontSize="2xl" color="black">Add Product</Text>
      </Button> */}
       
        <Text fontSize="2xl" color="black">
          Products
        </Text>
        <Flex>
          <Button name="All Products"></Button>
          <Text fontSize="2xl" color="black">
            Out of Stocks Products
          </Text>
        </Flex>
        <Flex marginTop="25px">
          <Select placeholder="Select option" w="5%">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Spacer />
         <Center> <Icon as={FaSearch} mr="10px" /></Center>
          <Input placeholder="Basic usage"  w="40%"/>
        </Flex>
        <HStack
          w="100%"
          colors={colors.white}
          bg={colors.cornflowerBlue}
          marginTop="16px"
          p="1%"
        >
          <Box w="23%">
            <Center>Image</Center>
          </Box>
          <Box w="23%">
            <Center>Title</Center>
          </Box>
          <Box w="23%">
            <Center>Unit Price</Center>
          </Box>
          <Box w="23%">
            <Center>In Stock</Center>
          </Box>
          <Box w="23%">
            <Center>Category</Center>
          </Box>
          <Box w="23%">
            <Center>Action</Center>
          </Box>
        </HStack>
        <Flex>
          <Box w="20%" p="2%">
            <Center>
              {' '}
              <Box w="30%" h="30px" boxShadow="xl" bg={colors.white}>
                Box
              </Box>
            </Center>
          </Box>
          <Box w="20%" p="2%" color="black">
            <Center>Ras El Hanout</Center>
          </Box>
          <Box w="20%" p="2%" color="black">
            <Center>10.00 Gram -₹ 7.90</Center>
          </Box>
          <Box w="20%" p="2%">
            <Center>
              {' '}
              <Switch size="lg" />
            </Center>
          </Box>
          <Center w="20%" p="2%" color="black">
            <Center>10.00 Gram -₹ 7.90</Center>
          </Center>
          <Box w="20%" p="2%">
            <Box w="30%" h="30px" boxShadow="xl" bg={colors.white}></Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Product;
