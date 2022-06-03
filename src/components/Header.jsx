import React, { useState } from 'react'
import { HStack, Image, Icon, Input, VStack, SimpleGrid, Button } from '@chakra-ui/react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { colors } from '../resources/colors';
import InputField from './InputField';


const Header = ({setShowLabel}) => {
  const [search, setSearch] = useState('');

  const sideToggle =()=>{
    setShowLabel(prev=>!prev)
  }
  return (

    <HStack justifyContent="space-evenly" boxShadow="md" position="sticky" top="0" bg={colors.white}>
      <HStack justifyContent='space-evenly' flex="1">
        <Image
          src={require('./img/logo_dashboard.png')}
          width="120px"
          padding="20px 0"
        />
        <Button onClick={sideToggle}><Icon as={FaBars} color={colors.iconGray}/></Button>
      </HStack>
      <HStack flex="2">
        <InputField placeholder='Search' setValue={setSearch} icon={FaSearch}/>
      </HStack>
      <HStack justifyContent='space-evenly' flex="1">
        <HStack>
          <Image
            src={require('./img/flag.png')}
          />
        </HStack>
        <VStack>
          <h1 style={{fontFamily:"Poppins, sans-serif"}}>Darren Ritchie</h1>
          <h1 style={{fontFamily:"Poppins, sans-serif", color:"rgb(148, 163, 175)"}}>Edit Profile</h1>
        </VStack>
        <HStack>
          <Image
            src={require('./img/user_img.png')}
          />
        </HStack>
      </HStack>
    </HStack>
  
  )
}

export default React.memo(Header) 