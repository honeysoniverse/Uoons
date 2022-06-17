import React,{useState, useEffect} from 'react'

import {
    Box, Text, HStack, Select, Center, Spacer, Input, Flex, Icon, Button,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

const ViewProduct = ({categoryId}) => { 
    console.log(categoryId)

    const [viewProductApi, setViewProductApi] = useState([])

    const viewProduct = process.env.REACT_APP_VIEWPRODUCT_API;
    const sellerId_LOC = localStorage.getItem("LoginData");
    const sellerId = JSON.parse(sellerId_LOC).data.userId;

    

    const viewProductData = async () =>{
        const response = await axios.get(`${viewProduct}/${categoryId}/${sellerId}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        setViewProductApi(response.data.data)
    }
 
   useEffect(()=>{
    viewProductData()
   },[])

    return (
        <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
            <Flex color="white" justifyContent="flex-end" mb="16px" >
                <Button name='Add Category'></Button>
            </Flex>

            <Box bg={colors.white} borderRadius="lg" height="auto" ml="280px" padding='20px' fontFamily='Poppins, sans-serif'>
                <Text fontSize="18px">Categories</Text>
                <hr />
                <HStack>
                    <Flex marginTop="25px" ml="20px">
                        <Select placeholder="10" w="20%">
                            <option value="10">10</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                        </Select>
                        <Spacer />
                        <Center><Icon as={FaSearch} mr="10px" /></Center>
                        <Input placeholder="search" w="50%" />
                    </Flex>
                </HStack>
                <TableContainer mt="40px" >
                    <Table variant='striped'>
                        <Thead bg={colors.cornflowerBlue} >
                            <Tr>
                        <Th color={colors.white}>Product</Th>
                        <Th color={colors.white}>Maximum Retail Price</Th>
                        <Th color={colors.white}>Sale Price</Th>
                        <Th color={colors.white}>Offer Price</Th>
            
                </Tr>
                </Thead>
                <Tbody>
                        {viewProductApi?.map((currElem, index, array)=>{
                            return (<>
                           
                            <Tr key={index}>
                                <Td>{currElem.title}</Td>
                                <Td>{currElem.MRP}</Td>
                                <Td>{currElem.salePrice}</Td>
                                <Td>{currElem.offerPrice}</Td>
                             </Tr>
                            
                        </>
                            )
                        })}  
                        </Tbody>
                </Table>
                </TableContainer>
            </Box>
        </Box>

    )
}

export default ViewProduct