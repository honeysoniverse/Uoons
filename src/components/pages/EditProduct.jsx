import React, {useEffect, useState} from 'react';
import { Box, Text, HStack, Image, FormLabel, VStack, Textarea, Button as ChakraButton, Input } from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaRupeeSign } from 'react-icons/fa';
import axios from 'axios';

const EditProduct = ({setProductId, productId}) => {
    
    // const initProductState = {
    //     description: "",
    //     salientFeaturess:[],
    //     returnPolicy: "",
    //     title: "",
    //     MRP:0,
    //     offer_price: 0,
    //     sale_price:0,
    //     additionalInformation:[]
    //     }
    
    const [productTitle, setProductTitle] = useState("") 
    const [MRP, setMRP] = useState(0) 
    const [salePrice, setSalePrice] = useState(0)
    const [offerPrice, setOfferPrice] = useState(0)  
    const [description, setDescription] = useState("")
    const [returnPolicy, setReturnPolicy] = useState("")
    const [mainImage, setMainImage] = useState()
    const [multiImages, setMultiImages] = useState([])

    const getProduct = process.env.REACT_APP_GET_PRODUCT_BY_ID;
    

    const selectedProductData = async() =>{
        const response = await axios.get(`${getProduct}/${productId}`,{
            headers:{
                'Content-Type':'application/json'
            }
        })
        console.log(response)
        setMRP(response.data.data.MRP)
        setProductTitle(response.data.data.title)
        setSalePrice(response.data.data.salePrice)
        setOfferPrice(response.data.data.offerPrice)
        setDescription(response.data.data.description)
        setReturnPolicy(response.data.data.returnPolicy)
        setMultiImages(response.data.data.images)
        setMainImage(response.data.data.mainimages.mainImage)
    }

    const textChanged = (e) =>{
        console.log(e.target.value)
    }

    useEffect(() => {
        selectedProductData()
    }, [])
    console.log(multiImages)

  return (
    <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
            <Box bg={colors.white} borderRadius="lg" height="auto" ml="280px" padding='20px' fontFamily='Poppins, sans-serif'>
              
                <Text fontSize="18px">Edit Product</Text>
                <hr />

                <HStack mt="40px" justifyContent="space-around">
                 <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Title</FormLabel>
                        <InputField placeholder='Title' value={productTitle}/>

                    </VStack>
                </HStack>

                <HStack mt="40px" justifyContent="space-evenly" alignItems="flex-start">
                    <Box>

                        <ChakraButton height="100px" width="300px" border="1px dashed gray" fontSize="14px" >Add File</ChakraButton>
                        <Input type="file" style={{ display: 'none' }} accept="image/*"/>
                         <Image src={mainImage} height="200px" width="300px" objectFit="cover" border="2px solid black"/>
                    </Box>
                    <Box>
                        <ChakraButton height="100px" width="300px" border="1px dashed gray" fontSize="14px" >+ Add File</ChakraButton>
                        <Input type="file" style={{ display: 'none' }}  accept="image/*" multiple />
                        <ul style={{display:"flex", justifyContent:'space-around'}}>
                            
                        {multiImages.length !== 0 && <Image src={multiImages} height="75px" width="75px" objectFit="cover" display="inline" border={colors.infoGray} borderWidth="2px" borderStyle="solid" padding="8px 0px"/>}
                          
                        </ul>
                    </Box>
                </HStack>

                <HStack mt='40px' spacing={5}>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Sale Price</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} value={salePrice}  />
                    </VStack>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Offer Price</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} value={offerPrice} />
                    </VStack>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>MRP</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} value={MRP} />
                    </VStack>
                </HStack>

                <HStack mt='40px' flex='1'>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel >Description</FormLabel>
                        <Textarea bg={colors.backgroundGray} value={description}  onChange={(e) => {textChanged(e)}}/>
                    </VStack>
                </HStack>

                <HStack justifyContent="center" mt="40px">
                    <VStack flex="1">
                        <HStack>
                            <FormLabel>Additional Information</FormLabel>
                            <Button name='+' ></Button>
                            <Button name='-' ></Button>
                        </HStack>
                        <VStack>
                           <HStack >
                                <FormLabel mt="8px">Title</FormLabel>

                                <FormLabel >Description</FormLabel></HStack>
                        
                             <HStack>
                             <InputField />
                             <InputField />
                         </HStack>
                           
                        </VStack>

                    </VStack>

                    <VStack flex="1">
                        <HStack >

                            <FormLabel>Salient Features</FormLabel>
                            <Button name='+'  ></Button>
                        </HStack>

                        <VStack>

                           <FormLabel mt="8px">Description</FormLabel>

                            <VStack flex="1">
                               
                                    <HStack><Textarea /></HStack>
                                   
                            </VStack>
                        </VStack>
                    </VStack>
                </HStack>


                <HStack mt='40px' flex='1'>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Return Policy</FormLabel>
                        <Textarea bg={colors.backgroundGray} height="150px" value={returnPolicy}/>
                    </VStack>
                </HStack>
                <HStack mt='40px'>
                    <Button name="Edit Product" ></Button>
                </HStack>


            </Box>
        </Box>
    )
  
}

export default EditProduct