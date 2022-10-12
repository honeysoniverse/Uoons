import React from 'react';
import { Box, Text, HStack, Grid, GridItem } from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import Button from '../Button';

function Payments({ showLabel }) {
  return (
    <Box
      bg={colors.backgroundGray}
      p={6}
      m="auto"
      ml={showLabel ? '' : '-200px'}
    >
      <HStack spacing={800}>
        <Text fontSize="30px" color="black" ml="260px">
          Payments
        </Text>
        <Button
          name="Download"
          justifyContent="flex-end"
          style={{ position: 'fixed' }}
        ></Button>
      </HStack>

      <Box
        bg={colors.white}
        mt="24px"
        border="1px solid gray"
        borderRadius="lg"
        height="auto"
        padding="20px"
        fontFamily="Poppins, sans-serif"
        ml="260px"
      >
        <Box
          bg={colors.white}
          borderRadius="lg"
          height="auto"
          fontFamily="Poppins, sans-serif"
        >
          <HStack spacing={0}>
            <Box w="400px" border="1px solid gray" borderRight="0px" p="13px">
              <Text fontSize="18px">Next Payment</Text>
              <Text mt="10px" fontSize="14px">
                The Ten Lines Essay for various topics listed on this page with
                different sets will lay a strong foundation for writing.{' '}
              </Text>
              <HStack mt="20px" spacing={5}>
                <Box>
                  <Text>Amount</Text>
                  <Text>Other support service charges</Text>
                  <Text>Ad Cost</Text>
                  <Text>Waivars And Compensation</Text>
                  <Text>Net Amount</Text>
                </Box>
                <Box>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                </Box>
              </HStack>
            </Box>

            <Box w="400px" border="1px solid gray" borderRight="0px" p="13px">
              <Text fontSize="18px">Last Payment</Text>
              <Text fontSize="14px" mt="10px">
                The Ten Lines Essay for various topics listed on this page with
                different sets will lay a strong foundation for writing.{' '}
              </Text>
              <HStack mt="20px" spacing={5}>
                <Box>
                  <Text>Amount</Text>
                  <Text>Other support service charges</Text>
                  <Text>Ad Cost</Text>
                  <Text>Waivars And Compensation</Text>
                  <Text>Net Amount</Text>
                </Box>
                <Box>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                </Box>
              </HStack>
            </Box>

            <Box w="400px" border="1px solid gray" p="13px">
              <Text fontSize="18px">Total Payments</Text>
              <Text fontSize="14px" mt="10px">
                The Ten Lines Essay for various topics listed on this page with
                different sets will lay a strong foundation for writing.
              </Text>
              <HStack mt="20px">
                <Box>
                  <Text>Amount</Text>
                  <Text>Other support service charges</Text>
                  <Text>Ad Cost</Text>
                  <Text>Waivars And Compensation</Text>
                  <Text>Net Amount</Text>
                </Box>
                <Box>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                  <Text>$ 0.00</Text>
                </Box>
              </HStack>
            </Box>
          </HStack>

          <Box
            border="1px solid gray"
            borderTop="0px"
            spacing={0}
            display="flex"
          >
            <HStack>
              <Box>
                <Grid templateColumns="repeat(5, 1fr)" gap={10}>
                  <GridItem colSpan={1} ml="12px">
                    Total
                  </GridItem>
                  <GridItem colStart={4} colEnd={9} ml="99px">
                    $ 0.00
                  </GridItem>
                </Grid>
              </Box>
              <Box>
                <Grid templateColumns="repeat(5, 1fr)" gap={10}>
                  <GridItem colSpan={1} ml="12px">
                    Total
                  </GridItem>
                  <GridItem colStart={4} colEnd={9} ml="99px">
                    $ 0.00
                  </GridItem>
                </Grid>
              </Box>
              <Box>
                <Grid templateColumns="repeat(5, 1fr)" gap={10}>
                  <GridItem colSpan={1} ml="12px">
                    Total
                  </GridItem>
                  <GridItem colStart={4} colEnd={9} ml="88px">
                    $ 0.00
                  </GridItem>
                </Grid>
              </Box>
            </HStack>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Payments;
