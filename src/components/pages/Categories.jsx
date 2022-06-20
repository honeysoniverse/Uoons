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
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Link from '../Link';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Pagination from './Pagination';



const Categories = ({setCategoryId, categoryId}) => {
  

    const navigate = useNavigate();

    const postCategory = process.env.REACT_APP_POSTCATEGORY_API;
    const getAllCategory = process.env.REACT_APP_GETALLCATEGORY_API;
    const postSubCategory = process.env.REACT_APP_POSTSUBCATEGORY_API;
    
    const sellerId_LOC = localStorage.getItem("LoginData");
    const sellerId = JSON.parse(sellerId_LOC).data.userId;

    const imageFieldRef = useRef(null);
    const subImageFieldRef = useRef(null);

    const postCategoryData = {

        category: ""
    }

    const postSubCategoryData = {
        subcategory: ""
    }
    
    const isMdBreakpoint = useBreakpointValue({ base: false, md: true });
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [getCategoryApi, setGetCategoryApi] = useState([])
    const [categoryTitle, setCategoryTitle] = useState("")
    const [categoryImageUpload, setCategoryImageUpload] = useState("")
    const [postCategoryApi, setPostCategoryApi] = useState(postCategoryData)
    const [showSuccessText, setShowSucessText] = useState(false)
    const [showCategoryDialogueBox, setShowCategoryDialogueBox] = useState(false)
    const [showSubCategoryDialogueBox, setShowSubCategoryDialogueBox] = useState(false)
    const [subCategoryTitle, setSubCategoryTitle] = useState('')
    const [subCategoryImageUpload, setSubCategoryImageUpload] = useState("")
    const [postSubCategoryApi, setPostSubCategoryApi] = useState(postSubCategoryData);
    const [showPerPage] = useState(10);
    const [pagination, setPagination] = useState({
		start:0,
		end:showPerPage
	})

	const onPaginationChange = (start, end) => {
		setPagination({start : start, end : end});
	}

// Get all category (get Call)
    const getCategoryData = async () => {
        const response = await axios.get(`${getAllCategory}/${sellerId}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        setGetCategoryApi(response.data.data)
    }

    //Get all category image by category id (get call)

    // const getCategoryImageData = async()=>{
    //     const response =await axios.get(`${getCategoryImage}/${categoryId}`)
    // }

    const getCategoryTitle = (e) => {
        setCategoryTitle(e)
        setPostCategoryApi({ ...postCategoryApi, category: e})
    }


    const categoryFileUpload = () => {
        imageFieldRef.current.click();
    }

    const handleSelectedCategoryFile = (e) => {
        setCategoryImageUpload(e.target.files[0])

    }

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


     
    //POST API for category

    const saveCategory = async () => {

        console.log(postCategoryApi)

        const formData = new FormData();
        formData.append("image", categoryImageUpload)
        formData.append('category', new Blob([JSON.stringify(categoryTitle)], {

            type: "application/json"
            
        }));
        console.log(formData)
    
        
        const response = await fetch(`${postCategory}/${sellerId}`,
        {
            method: 'POST',
            body:formData 
        });
        const parsedData = await response.json()
       

        if(response.status===200){
            
            setShowSucessText(true)
            
            setShowSubCategoryDialogueBox(true)
            console.log(parsedData)
            setCategoryId(parsedData.data.catId)
            setCategoryImageUpload("")
        }
    
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
        console.log("view on click")
      setCategoryId(cat)
      navigate(rootPathNames.viewProduct)
    }

    useEffect(()=>{
        getCategoryData()
    },[])

  
    return (

        <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
            <Flex color="white" justifyContent="flex-end" mb="16px" >
                <Button name='Add Category' handleOnClick={onOpen}></Button>
            </Flex>

            <Box bg={colors.white} borderRadius="lg" height="auto" marginLeft="280px" padding='20px' fontFamily='Poppins, sans-serif'>
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
                        {/* <Box ml="100px">
                            <Icon as={FaSearch} mr="10px" />
                        <Input placeholder="search"  width="100%"/>
                       </Box> */}
                    </Flex>
                </HStack>
    {/* /////////////////////////////////////////////////////// */}

                <TableContainer mt="40px" >
                    <Table variant='striped' colorScheme="gray">
                        <Thead bg={colors.cornflowerBlue} >
                            <Tr>
                        <Th color={colors.white}>Image</Th>
                        <Th color={colors.white}>Title</Th>
                        <Th color={colors.white}>Product</Th>
                        <Th color={colors.white}>Edit</Th>
                        <Th color={colors.white}>Delete</Th>
            
                </Tr>
                </Thead>
                <Tbody>
                {getCategoryApi.reverse().slice(pagination.start, pagination.end).map((currElem, index, arr)=>{
                            return (
                            <>
                            <Tr key={index}>
                              <Td><img height="50px" width="50px" src={`http://13.233.1.96:9092/product/category/categoryImage/${currElem.catId}`}/></Td>
                              <Td>{currElem.categoryName}</Td>
                              <Td> <Button handleOnClick={()=>viewOnClick(currElem.catId)} name='View Product'></Button></Td>
                              <Td><Icon as={FaEdit} ml="40px" cursor="pointer" /></Td>
                              <Td><Icon as={FaTrash} ml="10px" cursor="pointer" /></Td>
                            </Tr>    
                        </>
                     ) } ) } 
                        </Tbody>
                        
                </Table>
           
						<Pagination showPerPage={showPerPage} 
						onPaginationChange={onPaginationChange} 
				        total={getCategoryApi.length}/>
                </TableContainer>

                {/* modal dialogie box for category*/}

                <Modal isOpen={isOpen} onClose={onClose}>
                    <ModalOverlay />
                    <ModalContent>
                        <ModalHeader>Add Category</ModalHeader>
                        <hr />
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Title</Text>
                            <InputField setValue={getCategoryTitle} value={categoryTitle} />

                            <HStack justifyContent="space-around">
                                <ChakraButton height="50px" width="100px" fontSize="14px" onClick={categoryFileUpload} mt="40px">Upload Image</ChakraButton>
                                <Input type="file" style={{ display: 'none' }} ref={imageFieldRef} onChange={handleSelectedCategoryFile} accept="image/png, image/jpeg" />
                                {categoryImageUpload !== "" && <Image src={URL.createObjectURL(categoryImageUpload)} height="200px" width="200px" objectFit="cover" />}
                            </HStack>

                        </ModalBody>
                        <hr />
                        <ModalFooter>
                            <HStack spacing={8} width="100%">
                            {showSuccessText && <Text color={colors.green}>Category saved succesfully</Text>}

                            <Button name="Save" handleOnClick={saveCategory}></Button>
                            <Button name="Close" handleOnClick={onClose}></Button>
                            </HStack>
                        </ModalFooter>
                    </ModalContent>
                </Modal>

                {/* Modal dialogoue box for sub category */}

               {showSubCategoryDialogueBox && <Modal isOpen={isOpen} onClose={onClose}>
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
                </Modal>}
            </Box>
        </Box>


    )
}

export default Categories