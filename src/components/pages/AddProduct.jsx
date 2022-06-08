import React, {useEffect} from 'react'
import { Box,Text,HStack,Select,Image,FormLabel,VStack,Textarea} from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaRupeeSign } from 'react-icons/fa';
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { actioncreator } from '../../state/action-creators/combinactioncreator';
import {bindActionCreators} from "redux";
import axios from 'axios';


const AddProduct = () => {

    
    const [inputFieldList, setInputField] = useState([]);
    const [salientFeature, setSalientFeature] = useState([]);
    const [showDescLabel, setShowDescLabel] = useState(false)
    const [showLabel, setShowLabel] = useState(false);
    const [categoryApiData, setCategoryApiData] = useState([])
    const [subCategoryApiData, setSubCategoryApiData] = useState([])
    const [categoryId, setCategoryId] = useState("")


    

    const categoryApi = process.env.REACT_APP_CATEGORY_API;
    const subCategoryApi = process.env.REACT_APP_SUB_CATEGORY_API;

   

  const dispatch = useDispatch()

    const categoryValue = useSelector(state=>state);
    const subCategoryValue = useSelector(state=>state);
    const titleValue = useSelector(state=>state);
    const salePriceValue = useSelector(state=>state);
    const offerPriceValue = useSelector(state=>state);
    const mrpValue = useSelector(state=>state);
    const descriptionValue = useSelector(state=>state);
    const additionalInfoTitleValue = useSelector(state=>state);
    const additionalInforDescValue = useSelector(state=>state);
    const salientFeaturesValue = useSelector(state=>state);
    const returnPolicyValue = useSelector(state=>state);

    const categoryData=categoryValue.addProductReducer.category
    const subCategoryData=subCategoryValue.addProductReducer.subCategory
    const titleData=titleValue.addProductReducer.title
    const salePriceData=salePriceValue.addProductReducer.salePrice
    const offerPriceData=offerPriceValue.addProductReducer.offerPrice
    const mrpPriceData=mrpValue.addProductReducer.mrpPrice
    const descriptionData=descriptionValue.addProductReducer.description
    const additionalInfoTitleData=additionalInfoTitleValue.addProductReducer.additionalInformationTitle
    const additionalInfoDescData=additionalInforDescValue.addProductReducer.additionalInformationDescription
    const salientFeatureData=salientFeaturesValue.addProductReducer.salientFeature
    const returnPolicyData=returnPolicyValue.addProductReducer.returnPolicy

    const postData = {
        categoryData,
        subCategoryData,
        titleData,
        salePriceData,
        offerPriceData,
        mrpPriceData,
        descriptionData,
        additionalInformation: {
            additionalInfoTitleData,
            additionalInfoDescData
            
        },
      
        salientFeatureData,
        returnPolicyData
    }    
    const {setCategoryValue, setSubCategoryValue, setTitleValue, setSalePrice, setOfferPrice, setMrpPrice, setDescriptionValue, setReturnPolicyValue,
    setAdditionalInfoTitle, setAdditionalInfoDesc, setSalientFeatures} = bindActionCreators(actioncreator,dispatch);

    const handlesetCategoryValue=async(e) => {
         setCategoryValue(e.target.value); 
        for (let i=0; i<categoryApiData.length; i++) {
            if(e.target.value === categoryApiData[i].categoryName) setCategoryId(categoryApiData[i].catId)
        }
    }

    
    const handlesetSubCategoryValue=(e) =>setSubCategoryValue(e.target.value)

    const getDescription = (e) => setDescriptionValue(e.target.value)

    const getReturnPolicy =(e)=>setReturnPolicyValue(e.target.value)


  
    const handleOnClick = () => {
        setShowLabel(true)
        setInputField([...inputFieldList, [
            <HStack>
                <InputField setValue={setAdditionalInfoTitle}/>
                <InputField setValue={setAdditionalInfoDesc}/>
            </HStack>]])
    }

    const handleRemove = () =>setInputField(inputFieldList.slice(0, -1))
    
    const salientOnClick = () => {
        setShowDescLabel(true)
        setSalientFeature([...salientFeature, [<HStack><Textarea onChange={(e)=>setSalientFeatures(e.target.value)}/></HStack>]])
    }

    const handleFormData=()=> console.log(postData)

    //Fetch category

    const fetchCategory =async() => {
        const response = await axios.get(categoryApi,{
              headers: {
                'Content-Type': 'application/json',
              }})
        setCategoryApiData(response.data.data)
    }

    //Fetch Sub-Category

const fetchSubCatgeory = async()=>{

    const response = await axios.get(`${subCategoryApi}/${categoryId}`,{
        headers: {
          'Content-Type': 'application/json',
        }})
        setSubCategoryApiData(response.data.data)
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

                <HStack justifyContent='space-around'  mt="40px">
                    <VStack>
                        <FormLabel>Select Category</FormLabel>
                        <Select placeholder="Select Categories" bg={colors.backgroundGray} width="100%" onChange={handlesetCategoryValue}>
                        { categoryApiData.map((item)=>{
                            return <option value={item.categoryName} key={item.catId}>{item.categoryName}</option>
                        })}
                        </Select>
                    </VStack>

                    <VStack alignItems="flex-start" >
                        <FormLabel>Select Sub-Category</FormLabel>
                        <Select placeholder="Select Sub-Categories" width="100%" bg={colors.backgroundGray} onChange={handlesetSubCategoryValue}>
                            { subCategoryApiData?.map((item)=>{
                                return <option value={item.subCategoryName} key={item.subCatId}>{item.subCategoryName}</option>
                            })}
                        </Select>
                    </VStack>
                    <VStack alignItems="flex-start">
                        <FormLabel>Title</FormLabel>
                        <InputField placeholder='Title' width="100%" setValue={setTitleValue}/>
                        
                    </VStack>
                </HStack>

                <VStack alignItems='flex-start'>

                    <Image height="160px" width="160px" marginTop="50px" bg={colors.backgroundGray} />
                </VStack>

                <HStack mt='40px' spacing={5}>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Sale Price</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} setValue={setSalePrice} />
                    </VStack>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>Offer Price</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} setValue={setOfferPrice}/>
                    </VStack>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel>MRP</FormLabel>
                        <InputField width="100%" type="number" icon={FaRupeeSign} setValue={setMrpPrice}/>
                    </VStack>
                </HStack>

                <HStack mt='40px' flex='1'>
                    <VStack alignItems='flex-start' flex="1">
                        <FormLabel >Description</FormLabel>
                        <Textarea bg={colors.backgroundGray}  onChange={getDescription}/>
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
                        <Textarea bg={colors.backgroundGray} height="150px" onChange={getReturnPolicy} />
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