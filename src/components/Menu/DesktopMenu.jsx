import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  VStack,
  Link,
  useBreakpointValue,
  HStack,
  Button,
  Icon,
  Text,
} from '@chakra-ui/react';
import { FaSignOutAlt } from 'react-icons/fa';
import { getMainMenu } from './getMenuItem';
import { colors } from '../../resources/colors';
import { pathNames } from '../config/pathNames';

const DesktopMenu = ({setIsAuthenticated, showLabel}) => {

  const navigateTo = useNavigate();

  const clickHandler = ()=>{
    localStorage.removeItem("LoginData")
     setIsAuthenticated(false)
  }
  
  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });
  // Removes the focus after a navigation change happened.
  const handleClick = (event) => event.target.blur();
  const onLogout = async (e) => {
   
  };

  return (
    <VStack
     
      spacing={0.5}
      border={`3px solid ${colors.backgroundGray}`}
      height="100%"
      top="80px"
      left="0px"
      borderRadius="0px 13px 13px 0px"
      background={colors.white}
      flexDirection="column"
      alignItems="flex-start"
      boxShadow="2xl"
      display='flex'
      position="fixed"
      padding="5px"
    >
      {getMainMenu().map((navItem) => (
        <HStack width="100%">
        <Link
          width="100%"
          key={navItem.path}
          to={navItem.path}
          as={NavLink}
          display="flex"
          alignItems="flex-start"
          borderBottom={`3px solid ${colors.white}`}
          padding={
            {
              base: '1', md: '1', lg: '1', xl: '1',
            }
          }
          fontSize={
            {
              base: '12', md: '14', lg: '14', xl: '18',
            }
          }
          color={colors.infoGray}
          zIndex={1}
          _hover={{
            textDecoration: 'none',
            color: colors.black,

          }}
          _focus={{
            outline: 'none',
            color: colors.iconGray,
          }}
          sx={{
            '&.active': {
              color: colors.black,
              border: `1px solid ${colors.iconGray}`,
              borderRadius: '12px'
            },
            '&:focus::before': {
              display: 'block',
              borderColor: colors.iconGray,
              borderBottom: `3px solid ${colors.iconGray}`,
            },
          }}
        >
            <Icon as={navItem.icon} color={colors.iconGray} margin="0px 13px" alignSelf="center"/>
          {showLabel && navItem.label}
        </Link>
        </HStack>
      ))}
      <Button
        onClick={clickHandler}
        display="flex"
        alignItems="center"
        justifyContent="space-evenly"
        padding={
          {
            base: '1', md: '2', lg: '3', xl: '4',
          }
        }
        fontSize={
          {
            base: '12', md: '14', lg: '16', xl: '18',
          }
        }
        color={colors.iconGray}
        zIndex={1}
        _hover={{
          textDecoration: 'none',
          color: colors.iconGray,
        }}
        _focus={{
          outline: 'none',
        }}
        sx={{
          '&.active': {
          },
          '&:focus::before': {
            display: 'block',
            borderColor: colors.iconGray,

          },
        }}
      >
        <HStack spacing={4}>
        <Icon as={FaSignOutAlt} color={colors.iconGray}/>
         {showLabel && <Text>
            Logout
          </Text>}
         
        </HStack>
      </Button>
    </VStack>
  );
};

export default React.memo(DesktopMenu);
