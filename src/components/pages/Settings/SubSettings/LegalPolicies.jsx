import React from 'react';
import { HStack, VStack, Box, Text, Link } from '@chakra-ui/react';
import { colors } from '../../../../resources/colors';

function LegalPolicies({ showLabel }) {
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
                  Legal And Policies
                </Text>
              </VStack>
              <VStack
                mt="20px"
                spacing={5}
                mb="10px"
                alignItems="flex-start"
                style={{ color: '#0061ff', fontSize: '14px' }}
              >
                <Link>1. Anti Phishing Policy</Link>
                <Link>2. Privacy Policy</Link>
                <Link>3. Intelliectual Property Policy</Link>
                <Link>4. Supplier Agreement</Link>
                <Link>5. Supplier Deactivation Policy</Link>
                <Link>6. Prohibited and Restricted Products List</Link>
                <Link>7. Terms And Conditions</Link>
                <Link>8. Supplier Referral Policy </Link>
              </VStack>
            </Box>
          </Box>
        </VStack>
      </HStack>
    </div>
  );
}

export default LegalPolicies;
