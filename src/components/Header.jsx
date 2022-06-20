import React, { useState } from 'react'
import { HStack, Image, Icon, Input, VStack, SimpleGrid, Button, useBreakpointValue } from '@chakra-ui/react';
import { FaBars, FaSearch } from 'react-icons/fa';
import { colors } from '../resources/colors';
import InputField from './InputField';


const Header = ({setShowLabel}) => {
  const [search, setSearch] = useState('');
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });

  const sideToggle =()=>{
    setShowLabel(prev=>!prev)
  }
  return (<>

    <HStack justifyContent="space-evenly" boxShadow="md" position="sticky" top="0" bg={colors.white} zIndex={1}
      height={
        {
          base: '60px', sm:'80px', md: '140px', lg: '100px', xl: '80px',
        }
      }
      width={
        {
          base: '100%', sm:'100%', md: '100%', lg: '100%', xl: '100%',
        }
      }> 
      <HStack justifyContent='space-evenly' flex="1">
        <Image
          src={require('./img/logo_dashboard.png')}
          width={
            {
              base: '80px', sm:'100px', md: '140px', lg: '140px', xl: '160px',
            }
          }
          padding="20px 0"
        />
        <Button onClick={sideToggle} display={isMdBreakpoint ? "inline-flex" : "none" } ><Icon as={FaBars} 
        width={{ base: '8', md: '12', xl: '12', xxl: '14' }} 
        height={
         {
           base: '15px', sm:'20px', md: '100px', lg: '100px', xl: '80px',
         }
       }
        color={colors.iconGray}/></Button>
      </HStack>
      <HStack flex="2">
        <InputField placeholder='Search' setValue={setSearch} icon={FaSearch} 
         width={
          {
            base: '100%', sm:'100%', md: '100%', lg: '100%', xl: '100%',
          }
        }
      
        />
      </HStack>
      <HStack justifyContent='space-evenly' flex="1">
        <HStack display={isMdBreakpoint ? "inline-flex" : "none"}>
          <Image
            src={require('./img/flag.png')}
          />
        </HStack>
        <VStack display={isMdBreakpoint ? "inline-flex" : "none" }>
          <h1 style={{fontFamily:"Poppins, sans-serif"}}>Darren Ritchie</h1>
          <h1 style={{fontFamily:"Poppins, sans-serif", color:"rgb(148, 163, 175)"}}>Edit Profile</h1>
        </VStack>
        <HStack>
          <Image src={require('./img/user_img.png')}/>
        </HStack>
      </HStack>
    </HStack>
</>
  )
}

export default React.memo(Header) 