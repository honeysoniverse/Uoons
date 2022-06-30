import React, { useEffect, useRef } from 'react'
import { Box, Text, HStack, Select, Image, FormLabel, VStack, Textarea, Button as ChakraButton, Input } from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaRupeeSign } from 'react-icons/fa';
import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { actioncreator } from '../../state/action-creators/combinactioncreator';
// import { bindActionCreators } from "redux";
import axios from 'axios';

const AddProduct = ({setShowSeccessText, showSuccessText}) => {
    const inputFieldRef = React.useRef(null);
    const multiUploadInputRef = React.useRef(null);

    const initProductState = {
        description: "",
        salientFeaturess:[],
        returnPolicy: "",
        title: "",
        MRP:"",
        offerPrice: "",
        salePrice:"",
        additionalInformation:[]
        }

    const [showDescLabel, setShowDescLabel] = useState(false)
    const [showLabel, setShowLabel] = useState(false);
    const [categoryApiData, setCategoryApiData] = useState([])
    const [subCategoryApiData, setSubCategoryApiData] = useState([])
    const [categoryId, setCategoryId] = useState("")
    const [subCategoryId, setSubCategoryId] = useState("")
    const [file, setFile] = useState();
    const [multiFile, setMultiFile] = useState([])
    const [productDetail, setProductDetail] = useState(initProductState)
   



    const categoryApi = process.env.REACT_APP_CATEGORY_API;
    const subCategoryApi = process.env.REACT_APP_SUB_CATEGORY_API;
    const postDataApi = process.env.REACT_APP_POSTDATA_API;
    
    const sellerId_LOC = localStorage.getItem("LoginData")
    const sellerId = JSON.parse(sellerId_LOC).data.userId

    const handlesetCategoryValue = async (e) => {
      
        for (let i = 0; i < categoryApiData.length; i++) {
            if (e.target.value === categoryApiData[i].categoryName) setCategoryId(categoryApiData[i].catId)
        }
    }

    const handlesetSubCategoryValue = async (e) => {
       
        for (let i = 0; i < subCategoryApiData.length; i++) {
            if (e.target.value === subCategoryApiData[i].subCategoryName) setSubCategoryId(subCategoryApiData[i].subcatId)
        }
    }

    const getDescription = (e) =>  setProductDetail(prev => ({...prev, description: e.target.value}))
    const getTitle = (e) =>  setProductDetail(prev => ({...prev, title: e}))
    const getReturnPolicy = (e) => setProductDetail(prev => ({...prev, returnPolicy: e.target.value}))
    const getMRP = (e) =>  setProductDetail(prev => ({...prev, MRP: parseFloat(e)}))
    const getSalePrice = (e) =>  setProductDetail(prev => ({...prev, salePrice: parseFloat(e)}))
    const getOfferPrice = (e) =>  setProductDetail(prev => ({...prev, offerPrice: parseFloat(e)}))
   
    
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


    const handleOnClick = () => {
        setShowLabel(true)
        setProductDetail( prevState => ({...prevState,
            additionalInformation:  [...prevState.additionalInformation,  {
                additionalInfoDescData: "",
                additionalInfoDescTitle:""
                }]
         }));
    }

    const handleRemove = () => {
        if(productDetail.additionalInformation.length<=1){
            setShowLabel(false)
        }
        let updatedAdditionalInfo = [...productDetail.additionalInformation];
        updatedAdditionalInfo.splice(-1);
        setProductDetail(prev => ({...prev, additionalInformation: updatedAdditionalInfo}));
       
    }

    const salientOnClick = () => {
        setShowDescLabel(true)
        setProductDetail( prevState => ({...prevState,
            salientFeaturess:  [...prevState.salientFeaturess,'']
         }));
      }

  const  getSalientFeature = (e, index) => {
    let updatedAreas = [...productDetail.salientFeaturess];
    updatedAreas[index] = e.target.value;
    setProductDetail(prev => ({...prev, salientFeaturess: updatedAreas}));
    }

    //POST API CALL

    const handleFormData = () =>  saveProduct() 

    //Fetch category

    const fetchCategory = async () => {
        const response = await axios.get(categoryApi+"?pageNo=0&pageSize=10", {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        setCategoryApiData(response.data.data)
    }

    //Fetch Sub-Category

    const fetchSubCatgeory = async () => {

        const response = await axios.get(`${subCategoryApi}${categoryId}?pageNo=0&pageSize=10`, {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        setSubCategoryApiData(response.data.data)
    }

    //File uploader
    const fileUpload = () => {
        inputFieldRef.current.click();
    }

    const handleSelectedFile = (e) => {
      //  console.log(e.target.files[0])
        setFile(e.target.files[0]);
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
            imagesArray.push(images[0][i]);
        }
        setMultiFile(imagesArray)
    
    }

        //Clearing data after submiting
        
        const clearData = () =>{
            setCategoryApiData([])
            setSubCategoryApiData([])
            setProductDetail({...initProductState})
            setFile()
            setMultiFile([])
           }
console.log(file)
    //Post product api

    const saveProduct = async () => {

        const formData = new FormData();
        formData.append('product', new Blob([JSON.stringify(productDetail)], {

            type: "application/json"
            
        }));
        formData.append('mainimages', file);
          
          for (let i = 0; i < multiFile.length; i++) {
            formData.append('images', multiFile[i])}


        const response = await axios.post(`${postDataApi}/${categoryId}/${subCategoryId}/${sellerId}`, formData ,{

        }
        )
        console.log(response)
        if(response.status === 200){
            setShowSeccessText(true);
               clearData()
               setTimeout(()=>{
                setShowSeccessText(false)
               },5000)
               fetchCategory()
        }
    }
    useEffect(() => {

        fetchCategory()
        fetchSubCatgeory()

    }, [categoryId])

    return (
        <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
            
            <Box bg={colors.white} borderRadius="lg" height="auto" ml="280px" padding='20px' fontFamily='Poppins, sans-serif'>
              
                <Text fontSize="18px">Add Product</Text>
                <hr />

                <HStack mt="40px" justifyContent="space-around">
                    <VStack flex="1">
                        <FormLabel>Select Category</FormLabel>
                        <Select placeholder="Select Categories" bg={colors.backgroundGray} onChange={handlesetCategoryValue}>
                            {categoryApiData.map((item) => {
                                return <option value={item.categoryName} key={item.catId}>{item.categoryName}</option>
                            })}
                        </Select>
                    </VStack>

                    <VStack flex="1">
                        <FormLabel>Select Sub-Category</FormLabel>
                        <Select placeholder="Select Sub-Categories" bg={colors.backgroundGray} onChange={handlesetSubCategoryValue}>
                            {subCategoryApiData?.map((item) => {
                                return <option value={item.subCategoryName} key={item.subCatId}>{item.subCategoryName}</option>
                            })}
                        </Select>
                    </VStack >
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Title</FormLabel>
                        <InputField placeholder='Title' setValue={getTitle} value={productDetail.title}/>

                    </VStack>
                </HStack>

                <HStack mt="40px" justifyContent="space-evenly" alignItems="flex-start">
                    <Box>

                        <ChakraButton height="100px" width="300px" border="1px dashed gray" fontSize="14px" onClick={fileUpload}>Add File</ChakraButton>
                        <Input type="file" style={{ display: 'none' }} ref={inputFieldRef} onChange={handleSelectedFile} accept="image/*" />
                        {file ? <Image src={URL.createObjectURL(file)} height="auto" width="300px" objectFit="cover" border="2px solid black"/> : null}
                    </Box>
                    <Box>
                        <ChakraButton height="100px" width="300px" border="1px dashed gray" fontSize="14px" onClick={multiFileUpload}>+ Add File</ChakraButton>
                        <Input type="file" style={{ display: 'none' }} ref={multiUploadInputRef} onChange={handleMultiSelected} accept="image/*" multiple />
                        <ul style={{display:"flex", justifyContent:'space-around'}}>
                            {multiFile.length !== 0 && multiFile.map((item) => {
                                return <Image src={URL.createObjectURL(item)} height="75px" width="75px" objectFit="cover" display="inline" border={colors.infoGray} borderWidth="2px" borderStyle="solid" padding="8px 0px"/>
                            })}
                        </ul>
                    </Box>
                </HStack>

                <HStack mt='40px' spacing={5}>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Sale Price</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} setValue={getSalePrice} value={productDetail.salePrice} />
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
                        <Textarea bg={colors.backgroundGray} onChange={getDescription} value={productDetail.description} />
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
                             <InputField setValue={(title)=> getAdditionalInfoTitle(title,index)} value={productDetail.additionalInfoDescTitle}/>
                             <InputField setValue={(data) => getAdditionalInfoDesc(data, index)} value={productDetail.additionalInfoDescData}/>
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
                                {productDetail.salientFeaturess.map((value, index) => 
                                    <HStack><Textarea onChange={(value) => getSalientFeature(value,index)} value={productDetail.salientFeaturess}/></HStack>
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
                    <Button name="Add Product" handleOnClick={handleFormData}></Button>
                </HStack>


            </Box>
        </Box>
    )
}

export default AddProduct