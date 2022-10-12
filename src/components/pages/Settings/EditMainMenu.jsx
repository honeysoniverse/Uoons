import React from 'react';
import { VStack, Link, HStack } from '@chakra-ui/react';
import { getEditMainMenu } from './getEditMainMenuItem';
import { colors } from '../../../resources/colors';

const EditMainMenu = ({ showEditMenu ,showLabel}) => {
  return (
    <>
      <VStack
        ml={showLabel ? "0px" :"-200px"}
        spacing={0.5}
        height="100%"
        top="150px"
        left="300px"
        flexDirection="column"
        alignItems="flex-start"
        display="flex"
        position="fixed"
        padding="13px"
      >
        {getEditMainMenu().map(item => (
          <HStack width="100%"  >
            <Link
              width="100%"
              to={item.path}
              display="flex"
              alignItems="flex-start"
              padding={{
                base: '1',
                md: '2',
                lg: '2',
                xl: '2',
              }}
              fontSize={{
                base: '10',
                md: '12',
                lg: '12',
                xl: '17',
              }}
              color={colors.infoGray}
              _hover={{
                textDecoration: 'none',
                color: colors.black,
                border: `1px solid ${colors.iconGray}`,
                borderRadius: '12px',
              }}
              _focus={{
                outline: 'none',
                color: colors.iconGray,
              }}
              sx={{
                '&.active': {
                  color: colors.black,
                  border: `1px solid ${colors.iconGray}`,
                  borderRadius: '12px',
                },
                '&:focus::before': {
                  display: 'block',
                  borderColor: colors.iconGray,
                  borderBottom: `3px solid ${colors.iconGray}`,
                },
              }}
              onClick={() => showEditMenu(item.label)}
            >
              {item.label}
            </Link>
          </HStack>
        ))}
      </VStack>
    </>
  );
};

export default React.memo(EditMainMenu);
