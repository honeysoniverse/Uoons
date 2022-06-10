import React, { useEffect, useRef } from 'react'
import { Box, Text, HStack, Select, Image, FormLabel, VStack, Textarea, Button as ChakraButton, Input, Flex, Link } from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaRupeeSign } from 'react-icons/fa';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actioncreator } from '../../state/action-creators/combinactioncreator';
import { bindActionCreators } from "redux";
import axios from 'axios';

const Categories = () => {
  return (
    
      <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
      <Flex color="white" justifyContent="flex-end" mb="16px" >
        <Button name='Add Category'></Button>
      </Flex>
         <Box bg={colors.white} borderRadius="lg" height="auto" ml="280px" padding='20px' fontFamily='Poppins, sans-serif'>
        <Text fontSize="18px">Categories</Text>
        <hr />
        <HStack>
            <Select>
                <option >10</option>
                <option >9</option>
                <option >8</option>
                <option >7</option>
            </Select>
            <InputField/>
        </HStack>
        </Box>
        </Box>
    )
}

export default Categories