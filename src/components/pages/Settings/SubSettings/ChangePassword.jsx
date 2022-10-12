import React, { useState } from 'react';
import {
  HStack,
  Icon,
  VStack,
  Box,
  Text,
  FormLabel,
  InputGroup,
  Input,
  InputRightElement,
  Button,
} from '@chakra-ui/react';

import { FaCheckCircle } from 'react-icons/fa';

import { colors } from '../../../../resources/colors';

function ChangePassword({ showLabel }) {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showReTypeNewPassword, setShowReTypeNewPassword] = useState(false);

  const handleClick = type => {
    if (type === 'currentPassword') {
      setShowCurrentPassword(!showCurrentPassword);
    } else if (type === 'NewPassword') {
      setShowNewPassword(!showNewPassword);
    } else if (type === 'ReTyprNewPassword') {
      setShowReTypeNewPassword(!showReTypeNewPassword);
    }
  };

  return (
    <div>
      <HStack mt="40px" ml={showLabel ? '20px' : '-150px'}>
        <VStack
          w={showLabel ? '750px' : '900px'}
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
                  Change Password
                </Text>
              </VStack>

              <VStack alignItems="flex-start">
                <FormLabel fontSize="14px" mt="20px">
                  Current Password
                </FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={showCurrentPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => handleClick('currentPassword')}
                    >
                      {showCurrentPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </VStack>

              <VStack alignItems="flex-start" flex="1" mt="20px">
                <FormLabel fontSize="14px">New Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={showNewPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => handleClick('NewPassword')}
                    >
                      {showNewPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </VStack>

              <Box backgroundColor={colors.skyBlue} w="400px" p="5px" mt="20px">
                <VStack
                  alignItems="flex-start"
                  flex="1"
                  mt="8px"
                  fontSize="14px"
                >
                  <Text>
                    <Icon as={FaCheckCircle} fill={colors.green} /> At least 8
                    characters
                  </Text>
                  <Text>
                    <Icon as={FaCheckCircle} fill={colors.green} /> A mixture of
                    both uppercase and lowercase letters
                  </Text>
                  <Text>
                    <Icon as={FaCheckCircle} fill={colors.green} /> Inclusion of
                    at least one special character
                  </Text>
                </VStack>
              </Box>

              <VStack alignItems="flex-start" flex="1" mt="20px">
                <FormLabel fontSize="14px">Re-Type New Password</FormLabel>
                <InputGroup size="md">
                  <Input
                    pr="4.5rem"
                    type={showReTypeNewPassword ? 'text' : 'password'}
                    placeholder="Enter password"
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => handleClick('ReTyprNewPassword')}
                    >
                      {showReTypeNewPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </HStack>
    </div>
  );
}

export default ChangePassword;
