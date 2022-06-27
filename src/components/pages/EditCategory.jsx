import React, {useState, useEffect} from 'react'
import {useRef} from 'react';
import {Box, Text, Flex, VStack, HStack, FormLabel, Input, Button as ChakraButton} from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import axios from 'axios';

const EditCategory = ({setCategoryId, categoryId}) => {
console.log(categoryId)
    const [categoryName, setCategoryName] = useState("")
    const [image, setImage] = useState()

    const inputFieldRef = React.useRef(null);

    const sellerId_LOC = localStorage.getItem("LoginData");
    const sellerId = JSON.parse(sellerId_LOC).data.userId;

    const updateCategoryApi = process.env.REACT_APP_EDIT_CATEGORY_API;
  
    const getTitleValue = (e) =>{
        setCategoryName(e)
    }

    const fileUpload = () => {
        inputFieldRef.current.click();
    }

    const handleSelectedFile = (e) => {
      //  console.log(e.target.files[0])
      setImage(e.target.files[0]);
    }
  
    const updateCategory = async(e) =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("image", image)
        formData.append('category', new Blob([JSON.stringify(categoryName)], {

            type: "application/json"
            
        }));
        console.log(formData)

        const response = await fetch(`${updateCategoryApi}/${sellerId}/${categoryId}`, {
            method: 'PUT',
            body:formData 
        }, 
           
            
        )
        const parsedData = await response.json()
        console.log(parsedData)
    
    }

  return (
    <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
    <Flex color="white" justifyContent="flex-end" mb="16px"></Flex>
      
    <Box bg={colors.white} borderRadius="lg" height="500px" ml="260px" padding='20px' fontFamily='Poppins, sans-serif'>
      <Text fontSize="lg" color="black" ml="20px">
        Edit Category
      </Text>
      <hr/>
     <VStack>
        <FormLabel>Title</FormLabel>
        <InputField setValue={getTitleValue}/>
        <FormLabel>Upload Image</FormLabel>
        <ChakraButton height="100px" width="300px" border="1px dashed gray" fontSize="14px" onClick={fileUpload}>Add File</ChakraButton>
        <Input type="file" ref={inputFieldRef} onChange={handleSelectedFile}/>
     </VStack>
     <HStack>
        <Button handleOnClick={updateCategory}>Edit Category</Button>
     </HStack>
     
       
     </Box>
    </Box>

  )
}

export default EditCategory