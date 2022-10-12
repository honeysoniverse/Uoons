import React, {useEffect, useState} from 'react';
import { Box, Text, HStack, Image, FormLabel, VStack, Textarea, Button as ChakraButton, Input } from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaRupeeSign } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { rootPathNames } from '../config/pathNames';

const EditProduct = ({productId,categoryId}) => {

   console.log(categoryId,">>>>>>>categoryId")
   console.log(productId,">>>>>>>productId")

    const inputFieldRef = React.useRef(null);
    const multiUploadInputRef = React.useRef(null);

    const sellerId_LOC = localStorage.getItem("LoginData");
    const sellerId = JSON.parse(sellerId_LOC).data.userId;

    const navigate = useNavigate()
    
    const initProductState = {
        description: "",
        salient_features:[],
        returnPolicy: "",
        title: "",
        MRP:0,
        offerPrice:"",
        salePrice:"",
        additionalInformation:[]
        }

     const [productDetail, setProductDetail] = useState(initProductState) 
     const [mainImage, setMainImage] = useState("")
     const [firstImage, setFirstImage] = useState(false)
     const [multiImages, setMultiImages] = useState([])
     const [showLabel, setShowLabel] = useState(false);
     const [showDescLabel, setShowDescLabel] = useState(false)

     const getProduct = process.env.REACT_APP_GET_PRODUCT_BY_ID;
     const editProduct = process.env.REACT_APP_EDIT_PRODUCT_API;

     const selectedProductData = async() =>{
        const response = await axios.get(`${getProduct}/${productId}`,{
            headers:{
                'Content-Type':'application/json'
            }
        })

        console.log(response,"<<<<<<<<<edit product console")
        if(response.data.data.additionalInformation.length>0) setShowLabel(true)
        if(response.data.data.salient_features.length>0) setShowLabel(true)
        setProductDetail(prev => ({...prev, title: response.data.data.title}))
        setProductDetail(prev => ({...prev, description: response.data.data.description}))
        setProductDetail(prev => ({...prev, MRP: response.data.data.MRP}))
        setProductDetail(prev => ({...prev, salePrice: response.data.data.salePrice}))
        setProductDetail(prev => ({...prev, returnPolicy: response.data.data.returnPolicy}))
        setProductDetail(prev => ({...prev, offerPrice: response.data.data.offerPrice}))
        setProductDetail(prev => ({...prev, salient_features: response.data.data.salient_features}));
        setProductDetail(prev => ({...prev, additionalInformation: response.data.data.additionalInformation}));
        setMultiImages(response.data.data.images)
        setMainImage(response.data.data.mainimages.mainImage)
    }

    const getDescription = (e) =>  setProductDetail(prev => ({...prev, description: e.target.value}))
    const getTitle = (e) =>  setProductDetail(prev => ({...prev, title: e}))
    const getReturnPolicy = (e) => setProductDetail(prev => ({...prev, returnPolicy: e.target.value}))
    const getMRP = (e) =>  setProductDetail(prev => ({...prev, MRP: parseFloat(e)}))
    const getSalePrice = (e) =>  setProductDetail(prev => ({...prev, salePrice: parseFloat(e)}))
    const getOfferPrice = (e) =>  setProductDetail(prev => ({...prev, offerPrice: parseFloat(e)}))

    // console.log(getOfferPrice)

    useEffect(() => {
        selectedProductData()
    }, [])

    const handleRemove = () => {
        if(productDetail.additionalInformation.length<=1) setShowLabel(false)
        let updatedAdditionalInfo = [...productDetail.additionalInformation];
        updatedAdditionalInfo.splice(-1);
        setProductDetail(prev => ({...prev, additionalInformation: updatedAdditionalInfo}));
    }

    const handleOnClick = () => {
        setShowLabel(true)
        setProductDetail( prevState => ({...prevState,
            additionalInformation:  [...prevState.additionalInformation,  {
                additionalInfoDescData: "",
                additionalInfoDescTitle:""
                }]
         }));
    }

   const getAdditionalInfoTitle = (title, index) =>  {
        let updatedAdditionalInfo = [...productDetail.additionalInformation];
        updatedAdditionalInfo[index].additionalInfoDescTitle = title;
        setProductDetail(prev => ({...prev, additionalInformation: updatedAdditionalInfo}));
}

const getAdditionalInfoDesc = (title, index) =>  {
   let updatedAdditionalInfo = [...productDetail.additionalInformation];
   updatedAdditionalInfo[index].additionalInfoDescData = title;
    setProductDetail(prev => ({...prev, additionalInformation: updatedAdditionalInfo}));
}

const salientOnClick = () => {
    setShowDescLabel(true)
    setProductDetail( prevState => ({...prevState,
        salient_features:  [...prevState.salient_features,'']
     }));
  }

const  getSalientFeature = (e, index) => {
let updatedAreas = [...productDetail.salient_features];
updatedAreas[index] = e.target.value;
setProductDetail(prev => ({...prev, salient_features: updatedAreas}));
}

const fileUpload = () => {
        inputFieldRef.current.click();
    }

    const handleSelectedFile = (e) => {
    //     console.log(">>>>>handleSelectedFile",e.target.files[0])
    //   setMainImage(e.target.files[0]);

      const [file] = e.target.files;
      setFirstImage(true);
      setMainImage(URL.createObjectURL(file));
    }

    //Multiple file upload
    const multiFileUpload = () => {
        multiUploadInputRef.current.click()
    }

    const handleMultiSelected = (e) => {
        let images = [];
        let imagesArray = [];

        images.push(e.target.files)
        for (let i = 0; i < images[0].length; i++) {
            imagesArray.push(URL.createObjectURL(images[0][i]));
            if(i===4)
            break;
        }
      
        setMultiImages(imagesArray)
   
      
    }

    //EditPost call for product

    const editProductData = async (e) =>{
        e.preventDefault()
        const formData = new FormData();
        formData.append('mainimages', new Blob([mainImage], {type: "image/png"}))

        for (let i = 0; i < multiImages.length; i++) {
        formData.append('images', multiImages[i])}

        formData.append('product', new Blob([JSON.stringify(productDetail)], {type: "application/json"}));

        console.log(formData)

        const response = await fetch(`${editProduct}/2/2/${sellerId}/${productId}`, {
            method: 'PUT',
            body:formData
        })

        const parsedData = await response.json();
        console.log(parsedData)
        if(response.status === 200){
            navigate(rootPathNames.products)
        }
        }
        
       

  return (
    <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
            <Box bg={colors.white} borderRadius="lg" height="auto" ml="280px" padding='20px' fontFamily='Poppins, sans-serif'>
              
                <Text fontSize="18px">Edit Product</Text>
                <hr />

                <HStack mt="40px" justifyContent="space-around">
                 <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Title</FormLabel>
                        <InputField placeholder='Title' setValue={getTitle} value={productDetail.title}/>

                    </VStack>
                </HStack>

                <HStack mt="40px" justifyContent="space-evenly" alignItems="flex-start">
                    <Box>

                        <ChakraButton height="100px" width="300px" border="1px dashed gray" fontSize="14px" onClick={fileUpload}>Add File</ChakraButton>
                        <Input type="file" style={{ display: 'none' }} ref={inputFieldRef} onChange={handleSelectedFile} accept="image/*" />
                     { firstImage !=" " ?<Image src={mainImage} height="250px" width="300px" objectFit="cover" border="2px solid black"/> : <Image src={`http://13.233.1.96:9092/product/item/productmainImage/${productId}`} height="250px" width="300px" objectFit="cover" border="2px solid black"/>
}     
                    </Box>
                    <Box>
                        <ChakraButton  height="100px" width="300px" border="1px dashed gray" fontSize="14px" onClick={multiFileUpload}>+ Add File
                        <Input type="file" style={{ display: 'none' }} ref={multiUploadInputRef} onChange={handleMultiSelected} accept="image/*" multiple /></ChakraButton>
                        <ul style={{display:"flex", justifyContent:'space-around'}}>
                            {multiImages.length !== 0 && multiImages.map((item) => { console.log(JSON.stringify(item));
                                return <Image src={item} height="75px" width="75px" objectFit="cover" display="inline" border={colors.infoGray} borderWidth="2px" borderStyle="solid" padding="8px 0px"/>
                            })}
                        </ul>
                    </Box>
                </HStack>
                <HStack mt='40px' spacing={5}>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Sale Price</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} setValue={getSalePrice} value={productDetail.salePrice}  />
                    </VStack>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Offer Price</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} setValue={getOfferPrice} value={productDetail.offerPrice} />
                    </VStack>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>MRP</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} setValue={getMRP} value={productDetail.MRP} />
                    </VStack>
                </HStack>

                <HStack mt='40px' flex='1'>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel >Description</FormLabel>
                        <Textarea bg={colors.backgroundGray} value={productDetail.description}  onChange={(e) => {getDescription(e)}}/>
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
                            {productDetail.additionalInformation.map((item, index) =>
                       
                             <HStack>
                             <InputField setValue={(title)=> getAdditionalInfoTitle(title,index)} value={item.additionalInfoDescTitle}/>
                             <InputField setValue={(data) => getAdditionalInfoDesc(data, index)} value={item.additionalInfoDescData}/>
                         </HStack>
                        )}
                        </VStack>

                    </VStack>

                    <VStack flex="1">
                        <HStack >

                            <FormLabel>Salient Features</FormLabel>
                            <Button name='+' handleOnClick={salientOnClick} ></Button>
                        </HStack>

                        <VStack>

                            {showDescLabel && <FormLabel mt="8px">Description</FormLabel>}

                            <VStack flex="1">
                                {productDetail.salient_features.map((value, index) => 
                                    <HStack><Textarea onChange={(value) => getSalientFeature(value,index)} value={value}/></HStack>
                                    )}
                            </VStack>
                        </VStack>
                    </VStack>
                </HStack>


                <HStack mt='40px' flex='1'>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Return Policy</FormLabel>
                        <Textarea bg={colors.backgroundGray} height="150px" onChange={getReturnPolicy} value={productDetail.returnPolicy}/>
                    </VStack>
                </HStack>
                <HStack mt='40px'>
                    <Button name="Edit Product" handleOnClick={editProductData}></Button>
                </HStack>


            </Box>
        </Box>
    )
  
}

export default EditProduct