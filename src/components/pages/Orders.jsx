import React from 'react';
import {
  Box,
  Text,
  HStack,
  TableContainer,
  Thead,
  Tbody,
  Tr,
  Td,
  Th,
  Table,
  Checkbox,
} from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

const Orders = ({ showLabel }) => {
  const [all, setAll] = useState(true);
  const [paid, setPaid] = useState(false);
  const [unpaid, setUnpaid] = useState(false);

  const handleClick = type => {
    if (type === 'unpaid') {
      setUnpaid(true);
      setAll(false);
      setPaid(false);
    } else if (type === 'paid') {
      setPaid(true);
      setUnpaid(false);
      setAll(false);
    } else if (type === 'all') {
      setPaid(false);
      setUnpaid(false);
      setAll(true);
    }
  };

  return (
    <Box
      bg={colors.backgroundGray}
      p={6}
      m="auto"
      ml={showLabel ? '0' : '-200px'}
    >
      <Text fontSize="30px" color="black" ml="296px">
        Orders
      </Text>
      <Box
        bg={colors.white}
        mt="24px"
        border="1px solid gray"
        borderRadius="lg"
        height="auto"
        padding="20px"
        fontFamily="Poppins, sans-serif"
        ml="300px"
      >
        <HStack spacing={8}>
          <button name="unpaid" onClick={() => handleClick('unpaid')}>
            Unpaid
          </button>
          <button name="paid" onClick={() => handleClick('paid')}>
            Paid
          </button>
          <button name="all" onClick={() => handleClick('all')}>
            All
          </button>
        </HStack>
        <Box>
          <HStack mt="35px">
            <InputField width="100%" type="number" icon={FaSearch} />
          </HStack>
        </Box>
        {unpaid ? <h1>unpaid</h1> : null}
        {paid ? <h1>paid</h1> : null}
        {all && (
          <Box>
            <TableContainer>
              <Table colorScheme="gray">
                <Thead>
                  <Tr>
                    <Th>
                      <Checkbox borderColor={colors.infoGray}></Checkbox>
                    </Th>
                    <Th color="black">Order</Th>
                    <Th color="black">Date</Th>
                    <Th color="black">Customer</Th>
                    <Th color="black">Item quantity</Th>
                    <Th color="black">Total</Th>
                    <Th color="black">Payment Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Checkbox borderColor={colors.infoGray}></Checkbox>
                    </Td>
                    <Td>SA-1000</Td>
                    <Td>05 Mar at 03:32 PM</Td>
                    <Td>Raj Kumar</Td>
                    <Td>2 Items</Td>
                    <Td>RS.245</Td>
                    <Td>Done</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default React.memo(Orders);
