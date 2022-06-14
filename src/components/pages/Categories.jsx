import React from 'react'
import {
    Box, Text, HStack, Select, Center, Spacer, Input, Flex, Icon, Button as ChakraButton, Image, VStack,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton, useDisclosure
} from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaSearch, FaEdit, FaTrash } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useRef } from 'react';

import axios from 'axios';


const Categories = () => {

    const postCategory = process.env.REACT_APP_POSTCATEGORY_API;
    const getAllCategory = process.env.REACT_APP_GETALLCATEGORY_API;
    const sellerId_LOC = localStorage.getItem("LoginData");
    const sellerId = JSON.parse(sellerId_LOC).data.userId;

    const imageFieldRef = useRef(null);

    const postCategoryData = {

        category: ""
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [getCategoryApi, setGetCategoryApi] = useState([])
    const [categoryTitle, setCategoryTitle] = useState("")
    const [categoryImageUpload, setCategoryImageUpload] = useState("")
    const [postCategoryApi, setPostCategoryApi] = useState(postCategoryData)
    const [showSuccessText, setShowSucessText] = useState(false)


    const getCategoryData = async () => {
        const response = await axios.get(`${getAllCategory}/${sellerId}`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        setGetCategoryApi(response.data.data)
    }

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
    

    const saveCategory = async () => {

        console.log(postCategoryApi)

        const formData = new FormData();
        formData.append("image", categoryImageUpload)
        formData.append('category', new Blob([JSON.stringify(categoryTitle)], {
            type: "application/json"
        }));
        console.log(formData)
    
        
        const response = await fetch(`${postCategory}${sellerId}`,
        {
            method: 'POST',
            body:formData 
        });
        console.log(response)

        if(response.status===200){
            setShowSucessText(true)
        }
    
    }

    useEffect(()=>{
        getCategoryData()
    },[])

  
    return (

        <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
            <Flex color="white" justifyContent="flex-end" mb="16px" >
                <Button name='Add Category' handleOnClick={onOpen}></Button>
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
                        <Center>Product</Center>
                    </Box>
                    <Box w="23%">
                        <Center>Edit</Center>
                    </Box>
                    <Box w="23%">
                        <Center>Delete</Center>
                    </Box>
                </HStack>
                <Flex>
                   
                <ul> 
                    

                            {getCategoryApi.map((currElem, index, arr)=>{
                                
                                
                                return ( <li> <Box w="20%" p="2%">
                                    <Center>
                                <Box><img src={currElem.image}/></Box>
                        </Center>
                    </Box>
                    <Box w="20%" p="2%" color="black">
                        <Center>{currElem.categoryName}</Center>
                    </Box>
                    <Box w="20%" p="2%" color="black">
                        <Center><Button name="View Products"></Button></Center>
                    </Box>
                    <Center w="20%" p="2%" color="black">
                        <Center><Icon as={FaEdit} ml="40px" cursor="pointer" /></Center>
                    </Center>
                    <Box w="20%" p="3%">

                        <Icon as={FaTrash} ml="10px" cursor="pointer" />
                        </Box>
                         </li> )})}
                        </ul>
                    
                </Flex>

                {/* modal dialogie box */}

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
                            {showSuccessText && <Text>Category saved succesfully</Text>}

                            <Button name="Save" handleOnClick={saveCategory}></Button>&nbsp;&nbsp;
                            <Button name="Close" handleOnClick={onClose}></Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>


    )
}

export default Categories