import React, { useState } from 'react';
import {
  Box,
  Text,
  Link,
  HStack,
  VStack,
  UnorderedList,
  ListItem,
} from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import InputField from '../InputField';
import Button from '../Button';
import { FaSearch } from 'react-icons/fa';
import { getSupportQuestions } from './SupportQuestions';
import SupportFAQanswers from './SupportFAQanswers';

function SupportMainPage({ showLabel }) {
  const [showMore, setShowMore] = useState(false);
  const [showLess, setShowLess] = useState(false);
  const [showSupportMainPage, setShowSupportMainPage] = useState(true);
  const [showSupportFAQanswers, setSupportFAQanswers] = useState(false);

  const handleShowMoreClick = () => setShowMore(true);
  const handleShowlessClick = () => {
    setShowLess(true);
    setShowMore(false);
  };

  const handleOpenQuestion = () => {
    setSupportFAQanswers(true);
    setShowSupportMainPage(false);
  };

  return (
    <>
      {showSupportMainPage && (
        <Box
          bg={colors.backgroundGray}
          p={6}
          m="auto"
          ml={showLabel ? '0' : '-200px'}
        >
          <Text fontSize="30px" color="black" ml="296px">
            Support-Help
          </Text>
          <Box
            bg={colors.white}
            mt="24px"
            border="1px solid gray"
            borderRadius="8px 8px 0px 0px"
            height="auto"
            padding="20px"
            fontFamily="Poppins, sans-serif"
            ml="300px"
          >
            <Box>
              <HStack mt="10px">
                <InputField
                  width="100%"
                  type="number"
                  icon={FaSearch}
                  placeholder="Search for any Topic"
                />
              </HStack>
            </Box>
            <Text mt="20px" fontSize="18px">
              Relevant FAQs
            </Text>
            <VStack
              ml="20px"
              style={{ overflowY: 'scroll' }}
              height={
                showMore ? 'auto' : '200px' || showLess ? '200px' : 'auto'
              }
              width="auto"
              mt="20px"
              alignItems="flex-start"
            >
              <UnorderedList ml="20px">
                <VStack
                  style={{ color: '#0061ff', fontSize: '15px' }}
                  py="13px"
                  alignItems="flex-start"
                >
                  {getSupportQuestions().map(item => {
                    return (
                      <>
                        <ListItem>
                          <Link onClick={handleOpenQuestion}>
                            {item.Question}
                          </Link>
                        </ListItem>
                      </>
                    );
                  })}
                </VStack>
              </UnorderedList>
            </VStack>
            <Box mt="50px" textAlign="center">
              {!showMore ? (
                <Link
                  style={{ color: '#0061ff', fontSize: '17px' }}
                  onClick={handleShowMoreClick}
                >
                  Show More
                </Link>
              ) : (
                <Link
                  style={{ color: '#0061ff', fontSize: '17px' }}
                  onClick={handleShowlessClick}
                >
                  Show Less
                </Link>
              )}
            </Box>
          </Box>

          <Box
            border="1px solid gray"
            borderTop="0px"
            borderRadius="0px 0px 8px 8px "
            ml="300px"
            mt="0px"
          >
            <VStack alignItems="flex-start" spacing={5} ml="20px" mb="30px">
              <Text fontSize="14px" mt="20px">
                Couldn't Find the Help you Need ?
              </Text>
              <HStack spacing={5} width="100%">
                <Button name="SELLER LEARNING CENTER"></Button>
                <Button name="CONTACT SELLER SUPPORT"></Button>
              </HStack>
            </VStack>
          </Box>
        </Box>
      )}
      {showSupportFAQanswers && (
        <SupportFAQanswers
          setSupportFAQanswers={setSupportFAQanswers}
          setShowSupportMainPage={setShowSupportMainPage}
        />
      )}
    </>
  );
}

export default SupportMainPage;
