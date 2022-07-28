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
import { FaSearch, FaEdit, FaTrashAlt} from 'react-icons/fa';
import { rootPathNames } from '../config/pathNames';
import Link from '../Link';
import {useState, useEffect} from 'react';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import axios from 'axios';
import Loader from "react-js-loader";
import { useNavigate } from 'react-router-dom';

const Product = ({ setProductId, productId, showLabel}) => {
  const [productData, setProductData] = useState([])
  const [productDataCount, setProductDataCount] = useState(0)
  const [showPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0)
  const [isLoading, setLoading] = useState(false)
  const [productSearchTerm,setProductSearchTerm]=useState("");
  const [displayPagination,setDisplayPagination]=useState(true);
//   const [pagination, setPagination] = useState({
//   start:0,
//   end:showPerPage
// })


const getAllProduct = process.env.REACT_APP_GET_ALL_PRODUCT_WITH_PAGINATION_API;
const deleteProductById = process.env.REACT_APP_DELETE_PRODUCT_API;
const searchProduct=process.env.REACT_APP_SEARCH_PRODUCT;

const sellerId_LOC = localStorage.getItem("LoginData")
const sellerId = JSON.parse(sellerId_LOC).data.userId

const navigate = useNavigate()

  //Get all product by seller id

  const allProductData = async()=>{
    const response = await axios.get(`${getAllProduct}/${sellerId}?pageNo=${currentPage}&pageSize=5`, {
      headers: {
          'Content-Type': 'application/json',
      }})
      console.log(response.data.data.productResponseDtoList)

      setProductDataCount(response.data.data.totalNoOfProduct)

      setProductData(response.data.data.productResponseDtoList)

      setLoading(false)
  }

  //Delete product by product id

  const deleteProductApi = async (productId) => {

		const response = await axios.delete(`${deleteProductById}/${productId}`, {
			headers: {
				'Content-Type': 'application/json'
			}	
		})
     	console.log(response)

       if(response.status === 200){
			console.log("response 200 is running")
        allProductData()
     }	
	}

  useEffect(()=>{
    setLoading(true)
    allProductData()
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>run",currentPage)
  },[currentPage])
   
  const deleteProduct = (productId) =>{
    console.log("delete clicked", productId)
    showConfirmationDialogue(productId)
  }
 
  const editProduct = (product) =>{
    console.log("edit clicked", product)
    setProductId(product)
    navigate(rootPathNames.editProduct)
    
  }

  const showConfirmationDialogue = (productId) => {

		confirmAlert({
		  title: 'confirm Delete!',
		  message: 'Are you sure to delete product?.',
		  buttons: [
			{
			  label: 'Yes',
			  onClick: () => deleteProductApi(productId)
			},
			{
			  label: 'No',
			}
		  ]
		});
	  }
    const search = (value) => setProductSearchTerm(value)


    const searchPro = async () => {
      if (productSearchTerm == "") {

          allProductData();
          setDisplayPagination(true);
     } else {

         const response = await axios.get(`${searchProduct}/${productSearchTerm}`)

          console.log(response.data.data)
           setProductData(response.data.data)
    }
  }
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
          <Input placeholder="Search Product"  w="32%" onChange={(e) => search(e.target.value)} onClick={() => {
                                     setProductData([])
                                    setDisplayPagination(false)}}/>
                                    <Button name="Search" handleOnClick={searchPro}></Button>
        </Flex>
         <TableContainer mt="40px" >
            {!isLoading?<Table variant='striped' colorScheme="gray">
                        <Thead bg={colors.cornflowerBlue} >
                            <Tr>
                        <Th color={colors.white} fontSize="14px">Image</Th>
                        <Th color={colors.white} fontSize="14px">Product</Th>
                        <Th color={colors.white} fontSize="14px">MRP</Th>
                        <Th color={colors.white} fontSize="14px">Sale Price</Th>
                        <Th color={colors.white} fontSize="14px">Offer Price</Th>
                        <Th color={colors.white} fontSize="14px">Edit</Th>
                        <Th color={colors.white} fontSize="14px">Delete</Th>
            
                </Tr>
                </Thead>
                <Tbody fontWeight="500" justifyContent="space-around" letterSpacing="2px">
                        {productData?.reverse().map((currElem, index, productId)=>{
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
                              <Td><Icon as={FaEdit} onClick={()=>editProduct(currElem.productId)}fill="blue" ml="10px" cursor="pointer" height="50px" /></Td>
                               <Td><Icon as={FaTrashAlt} onClick={()=>deleteProduct(currElem.productId)}fill="red" ml="10px" cursor="pointer" height="50px"/></Td> 
                            </Tr>    
                        </>
                     ) } ) } 
                        </Tbody>
                     
                </Table>: <Loader type="spinner-default" bgColor={colors.cornflowerBlue} title={"box-rotate-y"} color={'#FFFFFF'} size={50}/>}
              {  displayPagination && <Pagination
                        showPerPage={showPerPage} 
				                total={productDataCount}
                        currentPage={setCurrentPage}
                        />}
                </TableContainer>
          
      
      </Box>
</Box>
  );
  }

export default Product;
