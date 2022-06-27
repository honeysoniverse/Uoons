import React from 'react'
import {
    Box, Text, HStack, Select, Center, Spacer, Input, Flex, Icon, Button as ChakraButton, Image, VStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure,
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    useBreakpointValue
} from '@chakra-ui/react';
import { rootPathNames } from '../config/pathNames';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaSearch, FaEdit, FaTrashAlt, FaEye} from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Link from '../Link';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Pagination from './Pagination';


const SubCategories =({setCategoryId, categoryId, showLabel}) => {
  

    // const navigate = useNavigate();

    
    const getAllCategories = process.env.REACT_APP_GET_ALL_CATEGORY_WITH_PAGINATION_API;
    const postSubCategory = process.env.REACT_APP_POSTSUBCATEGORY_API;
    
    const sellerId_LOC = localStorage.getItem("LoginData");
    const sellerId = JSON.parse(sellerId_LOC).data.userId;

    const postSubCategoryData = {
        subcategory: ""
    }
  
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [getCategoriesApi, setGetCategoriesApi] = useState([])
    const [showSuccessText, setShowSucessText] = useState(false)
    const [showSubCategoryDialogueBox, setShowSubCategoryDialogueBox] = useState(false)
    const [subCategoryTitle, setSubCategoryTitle] = useState('')
    const [subCategoryImageUpload, setSubCategoryImageUpload] = useState("")
    const [postSubCategoryApi, setPostSubCategoryApi] = useState(postSubCategoryData);
    const [categoryDataCount, setCategoryDataCount] = useState(0)
    const [showPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(0)
    const [pagination, setPagination] = useState({
        start:0,
        end:showPerPage
      })

	const onPaginationChange = (start, end) => {
		setPagination({start : start, end : end});
	}

    const subImageFieldRef = useRef(null);
   
    const getSubCategoryTitle = (e) => {
        setSubCategoryTitle(e)
        setPostSubCategoryApi({ ...postSubCategoryApi, subcategory: e})
    }
    const subCategoryFileUpload = () => {
        subImageFieldRef.current.click();
    }

    const handleSelectedSubCategoryFile = (e) => {
        setSubCategoryImageUpload(e.target.files[0])

    }

// Get all category (get Call)

    const getCategoriesData = async () => {
        const response = await axios.get(`${getAllCategories}/${sellerId}?pageNo=${currentPage}&pageSize=5`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        console.log(response)
        setGetCategoriesApi(response.data.data.categoryResponseList)
        setCategoryDataCount(response.data.data.totalNoOfCategory)
      
    }


    //POST API for sub-category
   
    const saveSubCategory = async () => {

        const formData = new FormData();
        formData.append("image", subCategoryImageUpload)
        formData.append('subcategory', new Blob([JSON.stringify(subCategoryTitle)], {

            type: "application/json"
            
        }));
        console.log(formData)
    
        
        const response = await fetch(`${postSubCategory}/${categoryId}/${sellerId}`,
        {
            method: 'POST',
            body:formData 
        });
        const parsedSubCatData = await response.json()

        if(response.status === 200){
            alert("Sub Category added successfully")
            setShowSubCategoryDialogueBox(false)
        
        }
        console.log(parsedSubCatData)
    }



    const viewOnClick =(cat)=>{
        onOpen()
      setCategoryId(cat)
     
    }

    const editOnClick =()=>{
        console.log("edit on click")
    }

    useEffect(()=>{
        getCategoriesData()
    },[currentPage])


    return (

        <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
            <Box bg={colors.white} borderRadius="lg" height="auto" marginLeft={showLabel?"280px":"100px"} padding='20px' fontFamily='Poppins, sans-serif'>
                <Text fontSize="18px">Categories</Text>
                <hr />
                <HStack justifyContent='flex-start' >
                    <Flex marginTop="25px" >
                        <Box>
                        <Select placeholder="10" w="100%">
                            <option value="10">10</option>
                            <option value="9">9</option>
                            <option value="8">8</option>
                        </Select>
                        </Box>
                    </Flex>
                </HStack>
    {/* /////////////////////////////////////////////////////// */}

                <TableContainer mt="40px" fontSize="16px">
                    <Table variant='striped' colorScheme="gray" >
                        <Thead bg={colors.cornflowerBlue}>
                            <Tr>
                        <Th color={colors.white} fontSize="14px">Image</Th>
                        <Th color={colors.white} fontSize="14px">Category</Th>
                        <Th color={colors.white} fontSize="14px">Add Sub-Category</Th>
                        <Th color={colors.white} fontSize="14px">Edit</Th>
                        <Th color={colors.white} fontSize="14px">Delete</Th>
            
                </Tr>
                </Thead>
                <Tbody fontWeight="500" justifyContent="space-around" letterSpacing="2px">
                {getCategoriesApi.map((currElem, index, arr)=>{
                            return (
                            <>
                            <Tr key={index}>
                              <Td><Image height="70px" width="70px" 
                              src={`http://13.233.1.96:9092/product/category/categoryImage/${currElem.catId}`}
                              boxShadow="xl" borderRadius="10px"/></Td>
                              <Td>{currElem.categoryName}</Td>
                              <Td><Button name='+'  handleOnClick={()=>viewOnClick(currElem.catId)}></Button></Td>
                              <Td><Icon as={FaEdit} fill="blue" ml="10px" cursor="pointer" height="50px"/></Td>
                              <Td><Icon as={FaTrashAlt} fill="red" ml="10px" cursor="pointer" height="50px"/></Td>
                            </Tr>    
                        </>
                      ) } ) }  
                        </Tbody>
                        
                </Table>
           
						<Pagination showPerPage={showPerPage} 
						 currentPage={setCurrentPage}
				          total={categoryDataCount}/>
						
                </TableContainer>


                {/* Modal dialogoue box for sub category */}

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add Sub Category</ModalHeader>
                        <hr />
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Title</Text>
                            <InputField setValue={getSubCategoryTitle} />

                            <HStack justifyContent="space-around">
                                <ChakraButton height="50px" width="100px" fontSize="14px" onClick={subCategoryFileUpload} mt="40px">Upload Image</ChakraButton>
                                <Input type="file" style={{ display: 'none' }} ref={subImageFieldRef} onChange={handleSelectedSubCategoryFile} accept="image/png, image/jpeg" />
                                <Image src ={subCategoryImageUpload}height="200px" width="200px"  objectFit="cover" />
                            </HStack>

                        </ModalBody>
                        <hr />
                        <ModalFooter>
                            <HStack spacing={8} width="100%">
                            <Button name="Save" handleOnClick={saveSubCategory}></Button>
                            <Button name="Close" handleOnClick={onClose}></Button>
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>


    )
}

export default SubCategories