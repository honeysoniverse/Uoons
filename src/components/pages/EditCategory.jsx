import React, {useState, useEffect} from 'react'
import {useRef} from 'react';
import {Box, Text, Flex, VStack, HStack, FormLabel, Input, Button as ChakraButton, Image} from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { rootPathNames } from '../config/pathNames';

const EditCategory = ({setCategoryId, categoryId}) => {
console.log(categoryId)
    const [categoryName, setCategoryName] = useState("")
    const [image, setImage] = useState("")
    const [firstImage,setFirstImage]=useState(false);

    const inputFieldRef = React.useRef(null);

    const sellerId_LOC = localStorage.getItem("LoginData");
    const sellerId = JSON.parse(sellerId_LOC).data.userId;

    const updateCategoryApi = process.env.REACT_APP_EDIT_CATEGORY_API;
    const getCategory = process.env.REACT_APP_GET_CATEGORY_BY_ID;

    const navigate = useNavigate()
  
    const getTitleValue = (e) =>{
        setCategoryName(e)
    }


    //Get category by category ID

    const selectedCategoryData = async() =>{
      const response = await axios.get(`${getCategory}/${categoryId}`,{
        headers:{
          "Content-Type":"application/json"
        }
      })
      console.log(response)
      setCategoryName(response.data.data.categoryName)
      setImage(response.data.data.image)
    }
    
    
    const fileUpload = () => {
      inputFieldRef.current.click();
  }

    const handleSelectedFile = (e) => {
        
      // setImage(e.target.files[0]);
      // console.log(image)


      const [file] = e.target.files;
      setFirstImage(true);
      setImage(URL.createObjectURL(file));

    }
  
    //Post call to update category//
    const updateCategory = async(e) =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', new Blob([image], {type: "image/png"}))
        formData.append('category', new Blob([JSON.stringify(categoryName)], {

            type: "application/json"
            
        }));
        console.log(formData)

        const response = await fetch(`${updateCategoryApi}/${sellerId}/${categoryId}`, {
            method: 'PUT',
            body:formData
        })

        const parsedData = await response.json();
        console.log(parsedData)
        
        
        if(response.status === 200){
          navigate(rootPathNames.categories)
        }
    }

    useEffect(()=>{
      selectedCategoryData()
    },[])

  return (
    <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
    <Flex color="white" justifyContent="flex-end" mb="16px"></Flex>
      
    <Box bg={colors.white} borderRadius="lg" height="500px" ml="280px" padding='20px' fontFamily='Poppins, sans-serif'>
      <Text fontSize="lg" color="black" ml="20px">
        Edit Category
      </Text>
      <hr/>
      
     <VStack>
        <FormLabel>Title</FormLabel>
        <InputField setValue={getTitleValue} value={categoryName}/>
        <FormLabel>Upload Image</FormLabel>
        <ChakraButton height="100px" width="300px"  fontSize="14px" onClick={fileUpload}>+Add File</ChakraButton>
        <Input type="file" style={{ display: 'none' }} ref={inputFieldRef} onChange={handleSelectedFile} accept="image/png, image/jpeg"/>
        { firstImage!=" " ?<Image src={image} height="100px" width="100px" objectFit="cover" border="2px solid black"/> :  <Image src={`http://13.233.1.96:9092/product/category/categoryImage/${categoryId}`} width="100px" height="100px"/>}
        <Button handleOnClick={updateCategory} name="Submit"></Button>
     </VStack>
     </Box>
    </Box>

  )
}
// src={URL.createObjectURL(image)}
export default EditCategory