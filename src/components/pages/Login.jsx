import React, { useState } from 'react';
import {
  Box,
  Text,
  Image,
  HStack,
  Link,
  Icon,
  VStack,
  Checkbox,
  FormLabel,
} from '@chakra-ui/react';
import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaUser,
  FaKey,
  FaBars,
} from 'react-icons/fa';
import axios from 'axios';
import PagesWrapper from '../PagesWrapper';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const loginApi = process.env.REACT_APP_AUTH_API;
  const loginInfo = JSON.stringify({ email, password });

  const handleLogin = async () => {
    const response = await axios.post(`${loginApi}`, loginInfo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = JSON.stringify(response.data);
    localStorage.setItem('LoginData', responseData);
    const localData = (JSON.parse(localStorage.getItem('LoginData')));
  
    setIsAuthenticated(true)
  if(responseData.status === 'success') setIsAuthenticated(true);
  };

  const handleOnClick = () => {
    handleLogin();
  };

  

  return (
    <>
      <PagesWrapper>
        <HStack>
          <Box
            padding="50px"
            background={colors.cornflowerBlue}
            height="360px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="360px"
          >
            <Text fontSize="16px" color={colors.white}>
              Welcome to
            </Text>
            <Image
              src={require('../img/logo.png')}
              width="160px"
              padding="12px 0"
            />
            <Text color={colors.white}>{`Create your seller account in \n
          just few steps to become a seller with us`}</Text>
          </Box>
          <Box
            padding="50px"
            background={colors.white}
            height="360px"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="540px"
          >
            <Text color={colors.cornflowerBlue} margin="14px 0px">
              Login Now
            </Text>
            <Text>
              {`Don't have an account? `}
              <Link>Sign up</Link>
            </Text>
            <HStack margin="14px 0px">
              <Icon as={FaFacebook} color={colors.iconGray} />
              <Icon as={FaGoogle} color={colors.iconGray} />
              <Icon as={FaLinkedin} color={colors.iconGray} />
              <Icon as={FaBars} color={colors.iconGray} />
            </HStack>
            <InputField
              margin="14px 0px"
              setValue={setEmail}
              icon={FaUser}
              placeholder="Username"
            />
            <InputField
              margin="14px 0px"
              setValue={setPassword}
              icon={FaKey}
              placeholder="Password"
            />
            <HStack justifyContent="space-between" margin="14px 0px">
              <HStack>
                <Checkbox />
                <FormLabel>Remember Me</FormLabel>
              </HStack>
              <Button name="Login" handleOnClick={handleOnClick} />
            </HStack>
          </Box>
        </HStack>
      </PagesWrapper>
    </>
  );
};

export default Login;
