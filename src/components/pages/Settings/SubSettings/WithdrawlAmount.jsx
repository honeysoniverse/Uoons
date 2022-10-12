import React from 'react';
import { HStack, VStack, Box, Text } from '@chakra-ui/react';
import InputField from '../../../InputField';
import Button from '../../../Button';
import { colors } from '../../../../resources/colors';
import VerifyWithdrawlAmount from './VerifyWithdrawlAmount';
import { useState } from 'react';

function WithdrawlAmount({ showLabel }) {
  const [showVerifyWithdrawlAmount, setShowVerifyWithdrawlAmount] =
    useState(false);
  const [showWithdrawlAmount, setShowWithdrawlAmount] = useState(true);
  const [showPartial, setShowPartial] = useState(false);
  const [showFully, setShowFully] = useState(false);

  const partialHandleClick = () => {
    setShowPartial(true);
    setShowFully(false);
  };

  const fullyHandleClick = () => {
    setShowFully(true);
    setShowPartial(false);
  };

  const handleVerifyWithdrawlAmount = () => {
    setShowVerifyWithdrawlAmount(true);
    setShowWithdrawlAmount(false);
  };

  return (
    <>
      <div>
        {showWithdrawlAmount && (
          <HStack mt="40px" ml={showLabel ? '20px' : '-150px'}>
            <VStack
              w={showLabel ? '750px' : '900px'}
              mb="50px"
              mt="50px"
              ml={showLabel ? '200px' : '200px'}
            >
              <Box
                bg={colors.white}
                borderRadius="lg"
                height="auto"
                padding="20px"
                fontFamily="Poppins, sans-serif"
                w="100%"
              >
                <Box ml="20px">
                  <VStack bg={colors.backgroundGray} alignItems="flex-start">
                    <HStack>
                      <Text fontSize="20px" mt="6px" value="general">
                        Withdrawl Amount
                      </Text>
                    </HStack>
                    <Text fontSize="14px">
                      Amount Available to withdrawl 5.120.59
                    </Text>
                  </VStack>

                  <VStack alignItems="flex-start" mt="20px" spacing={4}>
                    <Text fontSize="20px" mt="6px" value="general">
                      Select type of amount withdrawl
                    </Text>
                    <HStack spacing={0}>
                      <Box
                        border={showPartial ? 'none' : '1px solid gray'}
                        padding="4px"
                        height="31px"
                        fontSize="15px"
                        textAlign="center"
                        borderRadius="8px 0 0 8px "
                        onClick={partialHandleClick}
                        bg={showPartial ? `${colors.cornflowerBlue}` : 'white'}
                        color={showPartial ? 'white' : 'black'}
                        width="170px"
                      >
                        <Text>Partial</Text>
                      </Box>
                      <Box
                        border={showFully ? 'none' : '1px solid gray'}
                        padding="4px"
                        width="170px"
                        height="31px"
                        fontSize="15px"
                        textAlign="center"
                        borderRadius="0 8px 8px 0 "
                        onClick={fullyHandleClick}
                        bg={showFully ? `${colors.cornflowerBlue}` : 'white'}
                        color={showFully ? 'white' : 'black'}
                      >
                        <Text>Fully</Text>
                      </Box>
                    </HStack>

                    {showPartial ? (
                      <Box width="100%" mt="20px">
                        <Text mb="15px">Enter Amount</Text>
                        <InputField
                          width="100%"
                          type="number"
                          placeholder="Enter Amount should below 5120.59"
                        />
                      </Box>
                    ) : null}
                  </VStack>

                  <HStack mt="30px">
                    <Button
                      name="VERIFY BANK DETAILS"
                      handleOnClick={handleVerifyWithdrawlAmount}
                    ></Button>
                  </HStack>
                </Box>
              </Box>
            </VStack>
          </HStack>
        )}
      </div>
      {showVerifyWithdrawlAmount && <VerifyWithdrawlAmount />}
    </>
  );
}

export default WithdrawlAmount;
