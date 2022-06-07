import React from 'react'
import { Box,Text,HStack,Select,Image,FormLabel,VStack,Textarea,} from '@chakra-ui/react';
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
    const [productValues, setProductValue] = useState({category:"", subCategory:"", title:""})


    const handleOnClick = () => {
        setShowLabel(true)
        setInputField([...inputFieldList, [
            <HStack>
                <InputField />
                <InputField />
            </HStack>]])
    }

    const handleRemove = () =>setInputField(inputFieldList.slice(0, -1))
    
    const salientOnClick = () => {
        setShowDescLabel(true)
        setSalientFeature([...salientFeature, [<HStack><Textarea /></HStack>]])
    }

    const selectCategory = (e)=>setProductValue({...productValues, category:e.target.value })
    
    const selectSubCategory =(e)=>setProductValue({...productValues, subCategory:e.target.value})

    const getTitle =(e) => console.log(e.target.value)
    
    const getAllProduct =()=>console.log(productValues)
    const titleValue = productValues.title;
    console.log(productValues)
        
    return (
        <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
            <Box bg={colors.white} borderRadius="lg" height="auto" ml="280px" padding='20px' fontFamily='Poppins, sans-serif'>
                <Text fontSize="18px">Add Product</Text>
                <hr />

                <HStack justifyContent='flex-start' alignItems="center" mt="40px">
                    <VStack alignItems="flex-start" >
                        <FormLabel>Select Category</FormLabel>
                        <Select placeholder="Select Categories" width="350px" bg={colors.backgroundGray} onChange={selectCategory}>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                        </Select>
                    </VStack>

                    <VStack alignItems="flex-start">
                        <FormLabel>Select Sub-Category</FormLabel>
                        <Select placeholder="Select Sub-Categories" width="350px" bg={colors.backgroundGray} onChange={selectSubCategory}>
                            <option value="One">One</option>
                            <option value="Two">Two</option>
                            <option value="Three">Three</option>
                        </Select>
                    </VStack>
                    <VStack alignItems="flex-start">
                        <FormLabel>Title</FormLabel>
                        <InputField placeholder='Title' width="350px" setValue={setProductValue} value={productValues} item={titleValue} />

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
                    <Button name="Add Product" handleOnClick={getAllProduct}></Button>
                </HStack>


            </Box>
        </Box>
    )
}

export default AddProduct