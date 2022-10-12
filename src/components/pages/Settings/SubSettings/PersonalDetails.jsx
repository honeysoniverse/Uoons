import React from 'react';
import { HStack, VStack, Box, Text, FormLabel, Select } from '@chakra-ui/react';
import InputField from '../../../InputField';
import { colors } from '../../../../resources/colors';

function PersonalDetails({ showLabel }) {
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
                  Personal Details
                </Text>
              </VStack>
              <VStack alignItems="flex-start">
                <FormLabel fontSize="14px" mt="20px">
                  Country /Region
                </FormLabel>
                <Select fontSize="14px" placeholder="India" w="100%">
                  <option value="option1" fontSize="14px">
                    option 1
                  </option>
                  <option value="option2" fontSize="14px">
                    option 2
                  </option>
                  <option value="option3" fontSize="14px">
                    option 3
                  </option>
                </Select>
              </VStack>

              <VStack alignItems="flex-start" flex="1" mt="20px">
                <FormLabel fontSize="14px">Address</FormLabel>
                <InputField width="100%" type="text" />
              </VStack>

              <VStack alignItems="flex-start" flex="1" mt="20px">
                <FormLabel fontSize="14px">Appartment,Suits,etc.</FormLabel>
                <InputField width="100%" type="text" fontSize="2px" />
              </VStack>

              <HStack spacing={5} mt="20px" mb="20px">
                <VStack alignItems="flex-start" flex="1">
                  <FormLabel fontSize="14px">City</FormLabel>
                  <InputField type="text" fontSize="14px" />
                </VStack>
                <VStack alignItems="flex-start">
                  <FormLabel fontSize="14px">State</FormLabel>
                  <Select fontSize="14px" placeholder="Madhya Pradesh">
                    <option value="option1" fontSize="14px">
                      option 1
                    </option>
                    <option value="option2" fontSize="14px">
                      option 2
                    </option>
                    <option value="option3" fontSize="14px">
                      option 3
                    </option>
                  </Select>
                </VStack>
                <VStack alignItems="flex-start">
                  <FormLabel fontSize="14px">Pincode</FormLabel>
                  <InputField type="number" fontSize="14px" />
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
                Contact Information
              </Text>
            </VStack>
            <HStack mt="20px">
              <VStack alignItems="flex-start" flex="1">
                <FormLabel fontSize="14px">Phone Number</FormLabel>
                <InputField
                  width="100%"
                  type="number"
                  placeholder="+91 99845 56XXX"
                />
              </VStack>

              <VStack alignItems="flex-start" flex="1">
                <FormLabel fontSize="14px">Email Address</FormLabel>
                <InputField
                  width="100%"
                  type="text"
                  placeholder=" Uoonsenterprises@gmail.com"
                />
              </VStack>
            </HStack>
          </Box>
        </VStack>
      </HStack>
    </div>
  );
}

export default PersonalDetails;
