import {
  Switch,
  Flex,
  Box,
  Text,
Image,
  Icon,
  Center,
  Select,
  Spacer,
  Input,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer
} from '@chakra-ui/react';
import Pagination from './Pagination';
import { colors } from '../../resources/colors';
import Button from '../Button';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import { rootPathNames } from '../config/pathNames';
import Link from '../Link';
import {useState, useEffect} from 'react';
import axios from 'axios';

const Product = ({showLabel}) => {
  const [productData, setProductData] = useState([])

  const getAllProduct = process.env.REACT_APP_GETALLPRODUCT_API;
  const sellerId_LOC = localStorage.getItem("LoginData")
  const sellerId = JSON.parse(sellerId_LOC).data.userId
  const [showPerPage] = useState(5);
  const [pagination, setPagination] = useState({
  start:0,
  end:showPerPage
})

const onPaginationChange = (start, end) => {
  setPagination({start : start, end : end});
}

  //Get all product by seller id

  const allProductData = async()=>{
    const response = await axios.get(`${getAllProduct}/${sellerId}?pageNo=0&pageSize=10`, {
      headers: {
          'Content-Type': 'application/json',
      }})
      console.log(response.data.data)
      setProductData(response.data.data)

  }
  
  useEffect(()=>{
    allProductData()
  },[])

  return (
    <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
      <Flex color="white" justifyContent="flex-end" mb="16px">
        <Link pathName={rootPathNames.addProduct} name='Add Product' />
      </Flex>
      <Box bg={colors.white} borderRadius="lg" height="auto" marginLeft={showLabel?"280px":"100px"} padding='20px' fontFamily='Poppins, sans-serif'>
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
           <TableContainer mt="40px" >
                    <Table variant='striped' colorScheme="gray">
                        <Thead bg={colors.cornflowerBlue} >
                            <Tr>
                        <Th color={colors.white} fontSize="14px">Image</Th>
                        <Th color={colors.white} fontSize="14px">Product</Th>
                        <Th color={colors.white} fontSize="14px">Maximum Retail Price</Th>
                        <Th color={colors.white} fontSize="14px">Sale Price</Th>
                        <Th color={colors.white} fontSize="14px">Offer Price</Th>
            
                </Tr>
                </Thead>
                <Tbody fontWeight="500" justifyContent="space-around" letterSpacing="2px">
                        {productData?.reverse().slice(pagination.start, pagination.end).map((currElem, index, array)=>{
                            return (
                            <>
                            <Tr key={index}>
                              <Td><Image width='70px' height="70px" 
                              src={`http://13.233.1.96:9092/product/item/productmainImage/${currElem.productId}`}
                              boxShadow="xl" borderRadius="10px"/></Td>
                              <Td>{currElem.title}</Td>
                              <Td>{currElem.MRP}</Td>
                              <Td>{currElem.salePrice}</Td>
                              <Td>{currElem.offerPrice}</Td>
                            </Tr>    
                        </>
                     ) } ) } 
                        </Tbody>
                        <Pagination showPerPage={showPerPage} 
					            	onPaginationChange={onPaginationChange} 
				                total={productData.length}/>
                </Table>
                
                </TableContainer>
      
      </Box>
</Box>
  );
  }

export default Product;
