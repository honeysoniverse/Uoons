import React from 'react'
import {
    Box, Text, HStack, Select, Center, Spacer, Input, Flex, Icon,
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
import { useDispatch, useSelector } from 'react-redux';
import { actioncreator } from '../../state/action-creators/combinactioncreator';
import { bindActionCreators } from "redux";
import axios from 'axios';


const Categories = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [getCategoryApi, setGetCategoryApi] = useState([])


    const categoryApiData = async()=>{
        const response = await axios.get("",{})

    } 


    useEffect(() => {

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
                            <InputField />
                            <Box width="40%" mt="10px" height="140px" bg={colors.backgroundGray}>
                                <Center>No Image</Center>
                            </Box>
                        </ModalBody>
                        <hr />
                        <ModalFooter>

                            <Button name="Save"></Button>&nbsp;&nbsp;
                            <Button name="Close" handleOnClick={onClose}></Button>

                        </ModalFooter>
                    </ModalContent>
                </Modal>
            </Box>
        </Box>


    )
}

export default Categories