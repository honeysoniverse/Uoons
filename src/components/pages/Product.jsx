import {
  Switch,
  Flex,
  Box,
  Text,
  HStack,
  Icon,
  Center,
  Select,
  Spacer,
  Input,
} from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import Button from '../Button';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';

const Product = () => {
  return (
    <Box bg={colors.backgroundGray} w="auto" p={4} ml="300px">
      <Flex color="white" justifyContent="flex-end" mb="16px">
        <Button name="Add Product"></Button>
      </Flex>
      <Box bg={colors.white} borderRadius="lg">
        <Text fontSize="lg" color="black" ml="20px">
          Products (55)
        </Text>
        <Flex  ml="20px" mt="20px">
          <Button name="All Products"></Button>
          <Text fontSize="2xl" color="black" ml="1%">
            Out of Stocks Products
          </Text>
        </Flex>
        <Flex marginTop="25px" ml="20px">
          <Select placeholder="Select option" w="20%">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Spacer />
         <Center> <Icon as={FaSearch} mr="10px" /></Center>
          <Input placeholder="Basic usage"  w="32%" />
        </Flex>
        <HStack
          w="96%"
          color={colors.white}
          bg={colors.cornflowerBlue}
          marginTop="16px"
          p="1%"
          ml="20px"
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
            <Center>Seasoning</Center>
          </Center>
          <Box w="20%" p="3%">
          <Icon as={FaEdit} ml="40px" />
          <Icon as={FaTrash} ml="10px" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Product;
