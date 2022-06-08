import {useDispatch,useSelector} from 'react-redux';
import { actioncreator } from '../../state/action-creators/combinactioncreator';
import {bindActionCreators} from "redux";
import {
  useBreakpointValue,
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

const Login = ({ setIsAuthenticated, setShowImg }) => {
  
  const dispatch = useDispatch()

  const passwordValue = useSelector(state=>state);
  const emailValue = useSelector(state=>state);

  const {setEmailValue}=bindActionCreators(actioncreator,dispatch);
  const {setPasswordValue}=bindActionCreators(actioncreator,dispatch);
 
const email = emailValue.loginReducer
const password = passwordValue.loginReducer


  const isMdBreakpoint = useBreakpointValue({ base: false, md: true });
  
  const loginApi = process.env.REACT_APP_AUTH_API;
  const loginInfo = JSON.stringify({ email, password });
  console.log(loginInfo)


  const handleLogin = async () => {
    // const response = await axios.post(`${loginApi}`, loginInfo, {
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const responseData = JSON.stringify(response.data);
    // localStorage.setItem('LoginData', responseData);
    // const localData = (JSON.parse(localStorage.getItem('LoginData')));
  
  // if(response.data.status === 'success') setIsAuthenticated(true);
  setIsAuthenticated(true);
  };

  return (
    <>
      <PagesWrapper>
        <HStack spacing={0}>
         {isMdBreakpoint && <Box
            padding="50px"
            background={colors.cornflowerBlue}
            height={
              {
                base: '100vh', sm:'100vh', md: '640px', lg: '540px', xl: '500px',
              }
            }
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width={
              {
                base: '100vw', sm:'100vw' , md: '360px', lg: '360px', xl: '460px',
              }
            }
          >
            <Text fontSize="20px" color={colors.white} fontFamily="Poppins, sans-serif">
              Welcome to
            </Text>
           <Image
              src={require('../img/logo.png')}
              width="160px"
              padding="12px 0"
            />
            <Text color={colors.white} fontFamily="Poppins, sans-serif">Create your seller account in
          just few steps to become a seller with us</Text>
          </Box>}
          <Box
            padding="50px"
            background={colors.white}
            height={
              {
                base: '100vh', sm:'100vh', md: '640px', lg: '540px', xl: '500px',
              }
            }
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width={
              {
                base: '100vw', sm:'100vw' , md: '360px', lg: '360px', xl: '540px',
              }
            }
          >
            <VStack alignItems="flex-start" fontFamily="Poppins, sans-serif" mb="30px">
            <Text color={colors.cornflowerBlue} fontSize="26px" fontWeight="bold" >
              Login Now
            </Text>
            <Text color={colors.infoGray} fontSize="15px">
              Don't have an account ? <nbsp/>
              <Link color={colors.cornflowerBlue} fontSize="15px">Sign up</Link>
            </Text>
            </VStack>
            <HStack marginBottom="20px" spacing='24px'>
              <Icon as={FaFacebook} color={colors.iconGray} w={6} h={6} boxSize={7}/>
              <Icon as={FaGoogle} color={colors.iconGray}  w={6} h={6} boxSize={7}/>
              <Icon as={FaLinkedin} color={colors.iconGray}  w={6} h={6} boxSize={7}/>
            </HStack>

           <VStack alignItems="flex-start">
             <InputField
             setValue={setEmailValue}
              icon={FaUser}
              placeholder="Email"
              type="email"
              mb="10px"
              width={
                {
                  base: '75vw', sm:'75vw' , md: '240px', lg: '260px', xl: '440px',
                }
              }
              boxShadow="0px 0px 15px #b2ceff8a"
            />
            <InputField
              margin="14px 0px"
              setValue={setPasswordValue}
              icon={FaKey}
              placeholder="Password"
              type="password"
              width={
                {
                  base: '75vw', sm:'75vw' , md: '240px', lg: '260px', xl: '440px',
                }
              }
              boxShadow="0px 0px 15px #b2ceff8a"
            /></VStack>
            <HStack justifyContent="space-between" margin="14px 0px">
              <HStack>
                <Checkbox />
                <FormLabel>Remember Me</FormLabel>
                
              </HStack>
              <Button name="LOGIN" handleOnClick={handleLogin} marginLeft="200px"></Button>
            </HStack>
          </Box>
        </HStack>
    
      </PagesWrapper>
    </>
  );
};

export default Login;