import React, { useState } from 'react';
import {
  HStack,
  Image,
  Input,
  VStack,
  Box,
  Text,
  Link,
  Button as ChakraButton,
  FormLabel,
  Select,
} from '@chakra-ui/react';
import InputField from '../../../InputField';
import { colors } from '../../../../resources/colors';


function General({ showLabel }) {
  const inputFieldRef = React.useRef(null);
  const [, setFile] = useState();

  const fileUpload = () => {
    inputFieldRef.current.click();
  };

  const handleSelectedFile = e => {
    //  console.log(e.target.files[0])
    setFile(e.target.files[0]);
  };
  
  return (
    <div >
      <HStack mt="40px" ml={showLabel ? "20px" : "-150px"}>
        <VStack
          w={showLabel ? "750px" : "900px"}
          mb="50px"
          mt="50px"
          ml={showLabel ? '200px' : '200px'}
        >
          <Box
            bg={colors.white}
            border="1px solid gray"
            borderRadius="lg"
            height="auto"
            padding="20px"
            fontFamily="Poppins, sans-serif"
            w="100%"
          >
            <Box ml="20px">
              <VStack bg={colors.backgroundGray} alignItems="flex-start">
                <Text fontSize="20px" mt="6px" value="general">
                  General Settings
                </Text>
              </VStack>
              <HStack spacing={5} mt="25px">
                <Image
                  src={require('../../../img/user_img.png')}
                  style={{ height: '50px', width: '50px' }}
                />
                <Box>
                  <ChakraButton
                    height="35px"
                    width="130px"
                    border="1px solid gray"
                    fontSize="12px"
                    onClick={fileUpload}
                  >
                    Upload Photo
                  </ChakraButton>
                  <Input
                    type="file"
                    style={{ display: 'none' }}
                    accept="image/*"
                    onChange={handleSelectedFile}
                  />
                </Box>
                <Box>
                  <ChakraButton
                    height="35px"
                    width="130px"
                    border="1px solid gray"
                    fontSize="12px"
                  >
                    Remove Photo
                  </ChakraButton>
                  <Input
                    type="file"
                    style={{ display: 'none' }}
                    accept="image/*"
                  />
                </Box>
              </HStack>
              <hr style={{ border: '1px solid gray', marginTop: '20px' }} />

              <HStack mt="20px" spacing={5}>
                <VStack alignItems="flex-start" flex="1">
                  <FormLabel fontSize="14px">First Name</FormLabel>
                  <InputField width="100%" type="text" />
                </VStack>

                <VStack alignItems="flex-start" flex="1">
                  <FormLabel fontSize="14px">Last Name</FormLabel>
                  <InputField width="100%" type="text" />
                </VStack>
              </HStack>
              <Text fontSize="14px" mt="16px">
                Type your first name and last name properly
              </Text>
              <HStack mt="40px" spacing={8} mb="40px">
                <VStack alignItems="flex-start" flex="1">
                  <FormLabel fontSize="14px">Email</FormLabel>
                  <Text fontSize="14px" mt="16px">
                    Uoonsenterprises@gmail.com
                  </Text>
                  <Link style={{ color: '#0061ff', fontSize: '14px' }}>
                    Change Email
                  </Link>
                </VStack>
                <VStack alignItems="flex-start" flex="1">
                  <FormLabel fontSize="14px">Phone Number (Optional)</FormLabel>
                  <InputField
                    width="100%"
                    type="number"
                    fontSize="14px"
                    placeholder="+91 99845 56XXX"
                  />
                </VStack>
              </HStack>
            </Box>
          </Box>

          <Box
            bg={colors.white}
            border="1px solid gray"
            borderRadius="lg"
            height="auto"
            padding="20px"
            fontFamily="Poppins, sans-serif"
            ml="40px"
            w="100%"
          >
            <VStack bg={colors.backgroundGray} alignItems="flex-start">
              <Text fontSize="20px" mt="6px">
                Preferred Language
              </Text>
            </VStack>
            <VStack alignItems="flex-start" flex="1" mb="30px">
              <FormLabel mt="10px" fontSize="14px">
                Language
              </FormLabel>
              <Select fontSize="14px" placeholder="English" w="100%">
                <option value="option1" fontSize="14px">
                  Hindi
                </option>
                <option value="option2" fontSize="14px">
                  Marathi
                </option>
                <option value="option3" fontSize="14px">
                  Tamil
                </option>
              </Select>
            </VStack>
          </Box>
        </VStack>
      </HStack>
    </div>
  );
}

export default General;
