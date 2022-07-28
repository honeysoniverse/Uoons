import React, { useState, useEffect } from 'react'
import { Text, VStack, SimpleGrid, Box, Flex, Center, Icon, Input } from '@chakra-ui/react';
import axios from 'axios';
import { colors } from '../resources/colors';
import { FaCalendarAlt, FaRupeeSign, FaChartLine, FaCheck, FaTimes, FaPause } from 'react-icons/fa';
import Loader from "react-js-loader";

const Body = ({ showLabel }) => {

  const orders = process.env.REACT_APP_GET_ALL_ORDERS;
  const productOrders = process.env.REACT_APP_GET_PRODUCT_ORDERS;

  const sellerId_LOC = localStorage.getItem("LoginData")
  const sellerId = JSON.parse(sellerId_LOC).data.userId

  const [allOrderData, setAllOrderData] = useState([])
  const [orderData, setOrderData] = useState([])
  const [isLoading, setLoading] = useState(false)

  //Get All Orders///////////

  const getAllOrders = async () => {
    const response = await axios.get(`${orders}/${sellerId}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
    console.log(response.data.data)
    setAllOrderData(response.data.data)

  }

  //Get Product Orders///////////

  const getProductOrders = async () => {
    const response = await axios.get(`${productOrders}/${sellerId}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })

    setOrderData(response.data)
    setLoading(false)
  }

  useEffect(() => {
    getAllOrders()
    getProductOrders()
  }, [])

  return (
    <Box bg={colors.backgroundGray} w="auto" p={2} fontFamily="Poppins, sans-serif" marginLeft={showLabel ? "280px" : "100px"}>
      <VStack bg={colors.backgroundGray} alignItems="flex-start" ml="20px" >
        <Text fontSize='2xl' mt="20px">Welcome, Darren</Text>
        <Text fontFamily="Poppins, sans-serif" color="rgb(148, 163, 175)" fontSize='sm'>Let's get your business started in view steps</Text>
      </VStack>
      <Box>
        <Text fontSize="22px" color="black" ml="20px" mt={5} fontWeight="bold">
          Orders
        </Text>
      </Box>
      <SimpleGrid

        bg={colors.backgroundGray}
        columns={{ md: 4 }}
        spacing='8'
        p='5'
        rounded='lg'>
        {orderData.map((elem, i) => {
          return (
            <>
              <Box boxShadow='base' p='5' rounded='md' bg={colors.white} key={i}>
                <Box width="44px" borderRadius="10px" bg={colors.cornflowerBlue}>
                  <span>
                    <Icon as={FaCalendarAlt} w={6} h={6} fill={colors.white} m="10px 10px 5px 10px" />
                  </span>
                </Box>

                <Text fontWeight="bold" fontSize="18px" padding="30px 0 8px" textTransform="capitalize">{elem.countFor}</Text>
                <Text>{elem.count}</Text>
                <Flex color="#4caf50" mt="16px">
                  <Icon as={FaRupeeSign} mt="4px" w={3} h={3} />
                  <Text fontSize="14px">{elem.price}</Text>
                </Flex>

              </Box>
              {/* <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
              <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box>
              <Box boxShadow='base' p='20' rounded='md' bg={colors.white}></Box> */}
            </>)
        })}

        {
          allOrderData.map((elem, i) => {
            return (
              <Box boxShadow='base' p='5' rounded='md' bg={colors.white} key={i}>
                {elem.countFor === "proccessing" ?
                  <Box width="44px" borderRadius="10px" bg={colors.cornflowerBlue}>
                    <Icon as={FaChartLine} w={6} h={6} fill={colors.white} m="10px 10px 5px 10px" />
                  </Box> : elem.countFor === "cancelled" ? <Box width="44px" borderRadius="10px" bg={colors.cornflowerBlue}>
                    <Icon as={FaTimes} w={6} h={6} fill={colors.white} m="10px 10px 5px 10px" />
                  </Box> : elem.countFor === "pending" ? <Box width="44px" borderRadius="10px" bg={colors.cornflowerBlue}>
                    <Icon as={FaPause} w={6} h={6} fill={colors.white} m="10px 10px 5px 10px" />
                  </Box> : null}

                <Text fontWeight="bold" fontSize="18px" padding="30px 0 8px" textTransform="capitalize">{elem.countFor}</Text>
                <Text>{elem.count}</Text>
                <Flex color="#4caf50" mt="16px">
                  <Icon as={FaRupeeSign} mt="4px" w={3} h={3} />
                  <Text fontSize="14px">{elem.price}</Text>
                </Flex>
              </Box>

            )
          })
        }
      </SimpleGrid>
    </Box>
  )
}

export default Body;