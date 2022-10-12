import React from 'react';
import {
  Box,
  Text,
  HStack,
  Select,
  Input,
  Flex,
  Icon,
  Button as ChakraButton,
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useBreakpointValue,
} from '@chakra-ui/react';
import { rootPathNames } from '../config/pathNames';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaSearch, FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { useRef } from 'react';
import Link from '../Link';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Pagination from './Pagination';
import Loader from 'react-js-loader';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Categories = ({ setCategoryId, categoryId, showLabel }) => {
  const navigate = useNavigate();

  const postCategory = process.env.REACT_APP_POST_CATEGORY_API;
  const getAllCategory = process.env.REACT_APP_GET_ALL_CATEGORY_WITH_PAGINATION_API;
  const postSubCategory = process.env.REACT_APP_POST_SUBCATEGORY_API;
  const searchCategory = process.env.REACT_APP_SEARCH_CATEGORY;

  const sellerId_LOC = localStorage.getItem('LoginData');
  const sellerId = JSON.parse(sellerId_LOC).data.userId;

  const imageFieldRef = useRef(null);
  const subImageFieldRef = useRef(null);

  const postCategoryData = {
    category: '',
  };

  const postSubCategoryData = {
    subcategory: '',
  };

  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [getCategoryApi, setGetCategoryApi] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState('');
  const [categoryImageUpload, setCategoryImageUpload] = useState('');
  const [postCategoryApi, setPostCategoryApi] = useState(postCategoryData);
  const [showSuccessText, setShowSucessText] = useState(false);
  const [showCategoryDialogueBox, setShowCategoryDialogueBox] = useState(true);
  const [showSubCategoryDialogueBox, setShowSubCategoryDialogueBox] =
    useState(false);
  const [subCategoryTitle, setSubCategoryTitle] = useState('');
  const [subCategoryImageUpload, setSubCategoryImageUpload] = useState('');
  const [postSubCategoryApi, setPostSubCategoryApi] =
    useState(postSubCategoryData);

  const [categoryDataCount, setCategoryDataCount] = useState(0);
  const [showPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  // const [pagination, setPagination] = useState({
  //     start:0,
  //     end:showPerPage
  //   })
  const [isLoading, setLoading] = useState(false);
  const [categorySearchTerm, setCategorySearchTerm] = useState('');
  const [displayPagination, setDisplayPagination] = useState(true);

  // const onPaginationChange = (start, end) => {
  // 	setPagination({start : start, end : end});
  // }

  // Get all category (get Call)
  const getCategoryData = async () => {
    const response = await axios.get(
      `${getAllCategory}/${sellerId}?pageNo=${currentPage}&pageSize=5`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);

    setGetCategoryApi(response.data.data.categoryResponseList);
    setCategoryDataCount(response.data.data.totalNoOfCategory);
    console.log('<<<<<<<<<<<<<<<<<<<<<', response.data.data.totalNoOfCategory);
    setLoading(false);
  };

  // Search Category Api

  //Get all category image by category id (get call)

  // const getCategoryImageData = async()=>{
  //     const response =await axios.get(`${getCategoryImage}/${categoryId}`)
  // }

  const getCategoryTitle = e => {
    setCategoryTitle(e);
    setPostCategoryApi({ ...postCategoryApi, category: e });
  };

  const categoryFileUpload = () => {
    imageFieldRef.current.click();
  };

  const handleSelectedCategoryFile = e => {
    setCategoryImageUpload(e.target.files[0]);
  };

  const getSubCategoryTitle = e => {
    setSubCategoryTitle(e);
    setPostSubCategoryApi({ ...postSubCategoryApi, subcategory: e });
  };

  const subCategoryFileUpload = () => {
    subImageFieldRef.current.click();
  };

  const handleSelectedSubCategoryFile = e => {
    setSubCategoryImageUpload(e.target.files[0]);
  };

  //POST API for category

  const saveCategory = async () => {
    console.log(postCategoryApi);

    const formData = new FormData();
    formData.append('image', categoryImageUpload);
    formData.append(
      'category',
      new Blob([JSON.stringify(categoryTitle)], {
        type: 'application/json',
      })
    );
    console.log(formData);

    const response = await fetch(`${postCategory}/${sellerId}`, {
      method: 'POST',
      body: formData,
    });
    const parsedData = await response.json();

    if (response.status === 200) {
      setShowCategoryDialogueBox(false);
      setCategoryTitle('');
      setShowSubCategoryDialogueBox(true);
      console.log(parsedData);
      setCategoryId(parsedData.data.catId);

      setCategoryImageUpload('');
    }
  };

  //POST API for sub-category

  const saveSubCategory = async () => {
    const formData = new FormData();
    formData.append('image', subCategoryImageUpload);
    formData.append(
      'subcategory',
      new Blob([JSON.stringify(subCategoryTitle)], {
        type: 'application/json',
      })
    );
    console.log(formData);

    const response = await fetch(
      `${postSubCategory}/${categoryId}/${sellerId}`,
      {
        method: 'POST',
        body: formData,
      }
    );
    const parsedSubCatData = await response.json();

    if (response.status === 200) {
      setShowSucessText(true);
      setShowSubCategoryDialogueBox(false);
      setShowCategoryDialogueBox(false);
      setTimeout(() => {
        setShowSucessText(false);
      }, 5000);
    }
    console.log(parsedSubCatData);
  };

  const viewOnClick = cat => {
    setCategoryId(cat);
    navigate(rootPathNames.viewProduct);
  };

  useEffect(() => {
    setLoading(true);
    getCategoryData();
  }, [currentPage]);

  const edit = catId => {
    console.log('edit category clicked');
    setCategoryId(catId);
    navigate(rootPathNames.editCategory);
  };

  const deleteCategoryData = async catId => {
    const response = await axios.delete(
      `http://13.233.1.96:9092/product/category/deleteCategory/${catId}`,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(response);

    if (response.status === 200) {
      console.log('response 200 is running');
      getCategoryData();
    }
  };

  const deleteCategory = catId => {
    console.log('delete clicked', catId);
    showConfirmationDialogue(catId);
  };

  const showConfirmationDialogue = catId => {
    confirmAlert({
      title: 'confirm Delete!',
      message: 'Are you sure to delete product?.',
      buttons: [
        {
          label: 'Yes',
          onClick: () => deleteCategoryData(catId),
        },
        {
          label: 'No',
        },
      ],
    });
  };
  const openModal = () => {
    onOpen();
    setShowCategoryDialogueBox(true);
  };

  const search = value => setCategorySearchTerm(value);

  const searchCat = async () => {
    if (categorySearchTerm === '') {
      getCategoryData();
      setDisplayPagination(true);
    } else {
      const response = await axios.get(
        `${searchCategory}/${categorySearchTerm}`
      );

      console.log(response.data.data);
      setGetCategoryApi(response.data.data);
    }
  };

  return (
    <Box bg={colors.backgroundGray} w="auto" p={6} m="auto">
      <Flex color="white" justifyContent="flex-end" mb="16px">
        <Button name="Add Category" handleOnClick={openModal}></Button>
      </Flex>

      <Box
        bg={colors.white}
        borderRadius="lg"
        height="auto"
        marginLeft={showLabel ? '280px' : '100px'}
        padding="20px"
        fontFamily="Poppins, sans-serif"
      >
        {showSuccessText && (
          <Text color={colors.green}>Category saved succesfully</Text>
        )}
        <Text fontSize="18px">Categories</Text>
        <hr />
        <HStack justifyContent="flex-start">
          <Flex marginTop="25px">
            <Box>
              <Select placeholder="10" w="100%">
                <option value="10">10</option>
                <option value="9">9</option>
                <option value="8">8</option>
              </Select>
            </Box>
            <Box ml="100px" zIndex={0}>
              <HStack>
                <Icon as={FaSearch} />
                <Input
                  placeholder="search"
                  width="auto"
                  onChange={e => search(e.target.value)}
                  onClick={() => {
                    setGetCategoryApi([]);
                    setDisplayPagination(false);
                  }}
                />
                <Button name="Search" handleOnClick={searchCat}></Button>
              </HStack>
            </Box>
          </Flex>
        </HStack>
        {/* /////////////////////////////////////////////////////// */}

        <TableContainer mt="40px" fontSize="16px">
          {!isLoading ? (
            <Table variant="striped" colorScheme="gray">
              <Thead bg={colors.cornflowerBlue}>
                <Tr>
                  <Th color={colors.white} fontSize="14px">
                    Image
                  </Th>
                  <Th color={colors.white} fontSize="14px">
                    Category
                  </Th>
                  <Th color={colors.white} fontSize="14px">
                    View Product
                  </Th>
                  <Th color={colors.white} fontSize="14px">
                    Edit
                  </Th>
                  <Th color={colors.white} fontSize="14px">
                    Delete
                  </Th>
                </Tr>
              </Thead>
              <Tbody
                fontWeight=""
                justifyContent="space-around"
                letterSpacing="2px"
              >
                {getCategoryApi.map((currElem, index) => {
                  return (
                    <>
                      <Tr key={index}>
                        <Td>
                          <Image
                            height="70px"
                            width="70px"
                            src={`http://13.233.1.96:9092/product/category/categoryImage/${currElem.catId}`}
                            alt={`not found`}
                            boxShadow="xl"
                            borderRadius="10px"
                          />
                        </Td>
                        <Td>{currElem.categoryName}</Td>
                        <Td>
                          <Icon
                            as={FaEye}
                            onClick={() => viewOnClick(currElem.catId)}
                            cursor="pointer"
                            ml="40px"
                          />
                        </Td>
                        <Td>
                          <Icon
                            as={FaEdit}
                            fill="blue"
                            ml="10px"
                            onClick={() => edit(currElem.catId)}
                            cursor="pointer"
                            height="50px"
                          />
                        </Td>
                        <Td>
                          <Icon
                            as={FaTrashAlt}
                            onClick={() => deleteCategory(currElem.catId)}
                            fill="red"
                            ml="10px"
                            cursor="pointer"
                            height="50px"
                          />
                        </Td>
                      </Tr>
                    </>
                  );
                })}
              </Tbody>
            </Table>
          ) : (
            <Loader
              type="spinner-default"
              bgColor={colors.cornflowerBlue}
              title={'box-rotate-y'}
              color={'#FFFFFF'}
              size={50}
            />
          )}

          {displayPagination && (
            <Pagination
              showPerPage={showPerPage}
              total={categoryDataCount}
              currentPage={setCurrentPage}
            />
          )}
        </TableContainer>

        {/* modal dialogie box for category*/}

        {showCategoryDialogueBox && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Category</ModalHeader>
              <hr />
              <ModalCloseButton />
              <ModalBody>
                <Text>Title</Text>
                <InputField setValue={getCategoryTitle} value={categoryTitle} />

                <HStack justifyContent="space-around">
                  <ChakraButton
                    height="50px"
                    width="100px"
                    fontSize="14px"
                    onClick={categoryFileUpload}
                    mt="40px"
                  >
                    Upload Image
                  </ChakraButton>
                  <Input
                    type="file"
                    style={{ display: 'none' }}
                    ref={imageFieldRef}
                    onChange={handleSelectedCategoryFile}
                    accept="image/png, image/jpeg"
                  />
                  {categoryImageUpload !== '' && (
                    <Image
                      src={URL.createObjectURL(categoryImageUpload)}
                      height="200px"
                      width="200px"
                      objectFit="cover"
                    />
                  )}
                </HStack>
              </ModalBody>
              <hr />
              <ModalFooter>
                <HStack spacing={8} width="100%">
                  <Button name="Save" handleOnClick={saveCategory}></Button>
                  <Button name="Close" handleOnClick={onClose}></Button>
                </HStack>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}

        {/* Modal dialogoue box for sub category */}

        {showSubCategoryDialogueBox && (
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Add Sub Category</ModalHeader>
              <hr />
              <ModalCloseButton />
              <ModalBody>
                <Text>Title</Text>
                <InputField setValue={getSubCategoryTitle} />

                <HStack justifyContent="space-around">
                  <ChakraButton
                    height="50px"
                    width="100px"
                    fontSize="14px"
                    onClick={subCategoryFileUpload}
                    mt="40px"
                  >
                    Upload Image
                  </ChakraButton>
                  <Input
                    type="file"
                    style={{ display: 'none' }}
                    ref={subImageFieldRef}
                    onChange={handleSelectedSubCategoryFile}
                    accept="image/png, image/jpeg"
                  />
                  {subCategoryImageUpload !== '' && (
                    <Image
                      src={URL.createObjectURL(subCategoryImageUpload)}
                      height="200px"
                      width="200px"
                      objectFit="cover"
                    />
                  )}
                </HStack>
              </ModalBody>
              <hr />
              <ModalFooter>
                <HStack spacing={8} width="100%">
                  <Button name="Save" handleOnClick={saveSubCategory}></Button>
                  <Button name="Close" handleOnClick={onClose}></Button>
                </HStack>
              </ModalFooter>
            </ModalContent>
          </Modal>
        )}
      </Box>
    </Box>
  );
};

export default Categories;
