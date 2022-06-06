import React from 'react'
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
    Image,
    FormLabel,
    VStack,
    Textarea,
    useSafeLayoutEffect,
} from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaRupeeSign } from 'react-icons/fa';
import { useState } from 'react';


const AddProduct = () => {

    const [inputFieldList, setInputField] = useState([]);
    const [salientFeature, setSalientFeature] = useState([]);
    const [showDescLabel, setShowDescLabel] = useState(false)

    const [showLabel, setShowLabel] = useState(false);


    const handleOnClick = () => {
        setShowLabel(true)
        setInputField([...inputFieldList, [
            <HStack>
                <InputField />
                <InputField />
            </HStack>]])
    }
    const handleRemove = () => {

        setInputField(inputFieldList.slice(0, -1))
    }

    const salientOnClick = () => {
        setShowDescLabel(true)
        setSalientFeature([...salientFeature, [<HStack><Textarea /></HStack>]])
    }


    return (
        <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
            <Box bg={colors.white} borderRadius="lg" height="auto" ml="280px" padding='20px' fontFamily='Poppins, sans-serif'>
                <Text fontSize="18px">Add Product</Text>
                <hr />

                <HStack justifyContent='flex-start' alignItems="center" mt="40px">
                    <VStack alignItems="flex-start" >
                        <FormLabel>Select Category</FormLabel>
                        <Select placeholder="Select Categories" width="350px" bg={colors.backgroundGray}>
                            <option value="option1">One</option>
                            <option value="option2">Two</option>
                            <option value="option3">Three</option>
                        </Select>
                    </VStack>

                    <VStack alignItems="flex-start">
                        <FormLabel>Select Sub-Category</FormLabel>
                        <Select placeholder="Select Sub-Categories" width="350px" bg={colors.backgroundGray}>
                            <option value="option1">One</option>
                            <option value="option2">Two</option>
                            <option value="option3">Three</option>
                        </Select>
                    </VStack>
                    <VStack alignItems="flex-start">
                        <FormLabel>Title</FormLabel>
                        <InputField placeholder='Title' width="350px" />

                    </VStack>


                </HStack>
                <VStack alignItems='flex-start'>

                    <Image height="160px" width="160px" marginTop="50px" bg={colors.backgroundGray} />
                </VStack>

                <HStack mt='40px' spacing={5}>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Sale Price</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} />
                    </VStack>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Offer Price</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} />
                    </VStack>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>MRP</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} />
                    </VStack>
                </HStack>

                <HStack mt='40px' flex='1'>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel >Description</FormLabel>
                        <Textarea bg={colors.backgroundGray} />
                    </VStack>
                </HStack>

                <HStack justifyContent="center" mt="40px">
                    <VStack flex="1">
                        <HStack>
                            <FormLabel>Additional Information</FormLabel>
                            <Button name='+' handleOnClick={handleOnClick}></Button>
                            <Button name='-' handleOnClick={handleRemove}></Button>
                        </HStack>
                        <VStack>
                            {showLabel && <HStack >
                                <FormLabel mt="8px">Title</FormLabel>

                                <FormLabel >Description</FormLabel></HStack>}
                            {inputFieldList.map(input => input)}
                        </VStack>

                    </VStack>
                    
                        <VStack flex="1">
                            <HStack >

                                <FormLabel>Salient Features</FormLabel>
                                <Button name='+' handleOnClick={salientOnClick}></Button>
                            </HStack>

                            <VStack>

                                {showDescLabel && <FormLabel mt="8px">Description</FormLabel>}

                                <VStack flex="1">
                                {salientFeature.map(input => input)}
                                </VStack>
                            </VStack>
                        </VStack>
                    </HStack>
                

                <HStack mt='40px' flex='1'>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Return Policy</FormLabel>
                        <Textarea bg={colors.backgroundGray} height="150px" />
                    </VStack>
                </HStack>
                <HStack mt='40px'>
                    <Button name="Add Product"></Button>
                </HStack>


            </Box>
        </Box>
    )
}

export default AddProduct