import React from 'react';
import { HStack, VStack, Box, Text, FormLabel } from '@chakra-ui/react';
import InputField from '../../../InputField';
import Button from '../../../Button';
import { colors } from '../../../../resources/colors';

function VerifyWithdrawlAmount({ showLabel }) {

  return (
    <div>
      <HStack  mt="40px" ml={showLabel ? "20px" : "-150px"} >
        <VStack
          mb="50px"
          mt="50px"
          ml={showLabel ? '300px' : '200px'}
           w="750px"
          
        >
          <Box
            bg={colors.white}
            border="1px solid gray"
            borderRadius="lg"
            height="auto"
            padding="20px"
            fontFamily="Poppins, sans-serif"
            w="100%"
            ml="300px"
          >
            <Box ml="20px">
              <VStack bg={colors.backgroundGray} alignItems="flex-start">
                <HStack>
                  <Text fontSize="20px" mt="6px" value="general">
                    Withdrawl Amount
                  </Text>
                </HStack>
              </VStack>

              <VStack alignItems="flex-start">
                <FormLabel fontSize="14px" mt="20px">
                  Beneficiary Name
                </FormLabel>
                <InputField
                  width="100%"
                  type="text"
                  placeholder="UOONS ENTERPRISES"
                />
              </VStack>

              <VStack alignItems="flex-start" flex="1" mt="20px">
                <FormLabel fontSize="14px">Account Number</FormLabel>
                <InputField
                  width="100%"
                  type="number"
                  placeholder="098346321287"
                />
              </VStack>

              <VStack alignItems="flex-start" flex="1" mt="20px">
                <FormLabel fontSize="14px">Bank Name</FormLabel>
                <InputField width="100%" type="text" placeholder="HDFE BANK" />
              </VStack>

              <VStack alignItems="flex-start" flex="1" mt="20px">
                <FormLabel fontSize="14px">IFCE Code</FormLabel>
                <InputField width="100%" placeholder="HDFE000036" />
              </VStack>

              <VStack alignItems="flex-start" flex="1" mt="20px">
                <FormLabel fontSize="14px">Amount</FormLabel>
                <InputField width="100%" placeholder="23434" />
              </VStack>

              <HStack mt="20px" ml="300px">
                <Button name="CANCEL"></Button>
                <Button name="SEND WITHDRAWL REQUEST"></Button>
              </HStack>
            </Box>
          </Box>
        </VStack>
      </HStack>
    </div>
  );
}

export default VerifyWithdrawlAmount;
