import React from 'react'
import {
    Box, Text, HStack, Select, Center, Spacer, Input, Flex, Icon, Button as ChakraButton, Image,
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
import { useState, useEffect} from 'react';
import {useRef} from 'react';

import axios from 'axios';


const Categories = () => {

    const postCategory = process.env.REACT_APP_POSTCATEGORY_API;
    const sellerId_LOC = localStorage.getItem("LoginData");
    const sellerId = JSON.parse(sellerId_LOC).data.userId;

    const imageFieldRef = useRef(null);

    const postCategoryData = {
        "catId": 0,
        "categoryName": "",
        "image": "",
        "show": false,
        "sellerId": 3
    }

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [getCategoryApi, setGetCategoryApi] = useState([])
    const [categoryTitle, setCategoryTitle] = useState('')
    const [categoryImageUpload, setCategoryImageUpload] = useState()
    const [postCategoryApi, setPostCategoryApi] = useState(postCategoryData)


    const categoryApiData = async()=>{
        const response = await axios.get("",{})

    } 
    
    const getCategoryTitle = (e) =>{
        setPostCategoryApi({ ...postCategoryData, categoryName: e })
        setCategoryTitle(e)
    }

    // console.log(categoryTitle)

    const categoryFileUpload = ()=>{
        imageFieldRef.current.click();
    }

    const handleSelectedCategoryFile = (e) => {
        console.log(e.target.files[0])
        setCategoryImageUpload(e.target.files[0]);
        setPostCategoryApi({ ...postCategoryData, image: e.target.files[0] })

    }
  
    const saveCategory = async()=>{
    
        console.log("save category");
        console.log(postCategoryApi)

        const formData = new FormData();
        formData.append("categoryImageUpload", categoryImageUpload)
        console.log(typeof formData)

        const response = await axios.post(`${postCategory}/${sellerId}`, postCategoryApi, formData, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
          console.log(response)
    }


    useEffect(() => {
        saveCategory()
    }, [])


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
                    <Box w="20%" p="2%">
                        <Center>

                            <Box bgColor="#fff"
                                width="100px"
                                height="100px"
                                borderRadius="12px"
                                boxShadow="0px 0px 20px #dfdfdf">
                            </Box>
                        </Center>
                    </Box>
                    <Box w="20%" p="2%" color="black">
                        <Center>Atta</Center>
                    </Box>
                    <Box w="20%" p="2%" color="black">
                        <Center><Button name="View Products"></Button></Center>
                    </Box>
                    <Center w="20%" p="2%" color="black">
                        <Center><Icon as={FaEdit} ml="40px" cursor="pointer"/></Center>
                    </Center>
                    <Box w="20%" p="3%">

                        <Icon as={FaTrash} ml="10px" cursor="pointer"/>
                    </Box>
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
                            <InputField setValue={getCategoryTitle} />
                            <Box>
                        <ChakraButton height="100px" width="300px" border="1px dashed gray" fontSize="14px" onClick={categoryFileUpload}>Add File</ChakraButton>
                        <Input type="file" style={{ display: 'none' }} ref={imageFieldRef} onChange={handleSelectedCategoryFile} accept="image/*" />
                         <Image src={categoryImageUpload} height="200px" width="200px" objectFit="cover" />
                         </Box>
                        </ModalBody>
                        <hr />
                        <ModalFooter>

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