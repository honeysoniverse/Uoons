import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
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

const Login = ({ setIsAuthenticated, setShowImg }) => {
  const validationSchema = Yup.object().shape({
    // fullname: Yup.string().required('Fullname is required'),
    username: Yup.string()
      .required('Username is required')
      .min(6, 'Username must be at least 6 characters')
      .max(20, 'Username must not exceed 20 characters'),
    email: Yup.string().required('Email is required').email('Email is invalid'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    // confirmPassword: Yup.string()
    //   .required('Confirm Password is required')
    //   .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
    // acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required')
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data,event) => {
                event.preventDefault();
    console.log('form data');
    // const loginApi = process.env.REACT_APP_AUTH_API;
    // const loginInfo = JSON.stringify({ email, password });
    // const { username, email, password } = data;
    // console.log(JSON.stringify(data, null, 2));
    // handleLogin(loginApi, loginInfo);
  };
console.log(onSubmit);
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const loginApi = process.env.REACT_APP_AUTH_API;
  // const loginInfo = JSON.stringify({ email, password });

  const handleLogin = async (loginApi, loginInfo) => {
    const response = await axios.post(`${loginApi}`, loginInfo, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const responseData = JSON.stringify(response.data);
    localStorage.setItem('LoginData', responseData);
    const localData = JSON.parse(localStorage.getItem('LoginData'));

    if (response.data.status === 'success') setIsAuthenticated(true);
  };

  // const handleOnClick = () => {
  //   handleLogin();
  // };

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
            {
              <Image
                src={require('../img/logo.png')}
                width="160px"
                padding="12px 0"
              />
            }
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
            <Text
              color={colors.cornflowerBlue}
              margin="14px 0px"
              fontSize="30px"
              fontWeight="bold"
            >
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
            </HStack>
            <form >
              {/* <InputField
              margin="14px 0px"
              name="email"
              icon={FaUser}
              placeholder="Email"
              type="email"
              mb="10px"
              register="...register('email')"
            /> */}

              {/* <input
                name="email"
                type="text"
                {...register('email')}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              />
              <div className="invalid-feedback">{errors.email?.message}</div> */}
              {/* <input
              margin="14px 0px"
              name="email"
              icon={FaUser}
              placeholder="Email"
              type="email"
              mb="10px"
              register="...register('email')"
            /> */}
              {/* <InputField
              margin="14px 0px"
              name="password"
              icon={FaKey}
              placeholder="Password"
              type="password"
            
            /> */}
              {/* <input
                name="password"
                type="text"
                {...register('password')}
                className={`form-control ${
                  errors.password ? 'is-invalid' : ''
                }`}
              /> */}
              {/* <div className="invalid-feedback">{errors.password?.message}</div> */}

              <div class="input-group mb-3">
                <input
                  name="email"
                  type="text"
                  {...register('email')}
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                />
                <div className="invalid-feedback">{errors.email?.message}</div>
              </div>

              <div class="input-group mb-3">
                <input
                  name="password"
                  type="text"
                  {...register('password')}
                  className={`form-control ${
                    errors.password ? 'is-invalid' : ''
                  }`}
                />
                <div className="invalid-feedback">
                  {errors.password?.message}
                </div>
              </div>

              <HStack justifyContent="space-between" margin="14px 0px">
                <HStack>
                  <Checkbox />
                  <FormLabel>Remember Me</FormLabel>
                </HStack>
                {/* <Button type="submit" name="Login" handleOnClick={handleLogin} marginLeft="200px"/> */}
                <button  onClick={handleSubmit(onSubmit)} className="btn btn-primary">
            Register
          </button>
              </HStack>
            </form>
          </Box>
        </HStack>
      </PagesWrapper>
    </>
  );
};

export default Login;
