import React from 'react';
import {
  Box,
  Text,
  Link,
  GridItem,
  Grid,
  VStack,
  UnorderedList,
  ListItem,
  HStack,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Select,
  Checkbox,
  Textarea,
} from '@chakra-ui/react';
import { colors } from '../../resources/colors';
import {
  FaThumbsDown,
  FaThumbsUp,
  FaArrowLeft,
  FaFileUpload,
} from 'react-icons/fa';
import { useState } from 'react';
import InputField from '../InputField';
import Button from '../Button';

const SupportFAQanswers = ({
  setShowSupportMainPage,
  setSupportFAQanswers,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [, setShowWritetoUsModal] = useState(false);

  const handleModalOpen = () => {
    onOpen();
    setShowWritetoUsModal(true);
  };

  return (
    <>
      <HStack ml="296px" mt="5px" mb="20px" spacing={5}>
        <Icon
          as={FaArrowLeft}
          w="20px"
          h="20px"
          p="5px"
          boxSize={7}
          border="1px solid black"
          onClick={() => {
            setShowSupportMainPage(true);
            setSupportFAQanswers(false);
          }}
        />
        <Text fontSize="30px" color="black">
          Support-Help
        </Text>
      </HStack>

      <Box
        bg={colors.white}
        mt="24px"
        borderRadius="lg"
        height="auto"
        padding="20px"
        fontFamily="Poppins, sans-serif"
        ml="300px"
      >
        <Grid
          templateAreas={`
                  " main nav "
                  " footer nav"`}
          gridTemplateRows={'380px 1fr 30px'}
          gridTemplateColumns={'700px 3fr'}
          h="500px"
        >
          <GridItem
            pl="5"
            border="1px solid gray"
            borderLeft="0px"
            area={'nav'}
          >
            <Text mt="20px">More from customers</Text>

            <UnorderedList>
              <VStack
                style={{ color: '#0061ff', fontSize: '12px' }}
                mt="20px"
                alignItems="flex-start"
              >
                <ListItem>
                  <Link>Why is my product image missing ?</Link>
                </ListItem>
                <ListItem>
                  <Link>Why is my product image missing ?</Link>
                </ListItem>
                <ListItem>
                  <Link>Why is my product image missing ?</Link>
                </ListItem>
                <ListItem>
                  <Link>Why is my product image missing ?</Link>
                </ListItem>
                <ListItem>
                  <Link>Why is my product image missing ?</Link>
                </ListItem>
                <ListItem>
                  <Link>Why is my product image missing ?</Link>
                </ListItem>
              </VStack>
            </UnorderedList>
          </GridItem>
          <GridItem pl="5" border="1px solid gray" area={'main'} h="auto">
            <Text fontSize="18px" mt="20px">
              Whom do I reach in case of any queries or assistance ?
            </Text>
            <VStack mt="20px" spacing={4} fontSize="14px" mr="19px">
              <Text>
                The Ten Lines Essay for various topics listed on this page with
                different sets will lay a strong foundation for writing.
              </Text>

              <Text>
                The Ten Lines Essay for various topics listed on this page with
                different sets will lay a strong foundation for writing.
              </Text>

              <Text>
                The Ten Lines Essay for various topics listed on this page with
                different sets will lay a strong foundation for writing.
              </Text>

              <Text>
                The Ten Lines Essay for various topics listed on this page with
                different sets will lay a strong foundation for writing.
              </Text>

              <Text>
                The Ten Lines Essay for various topics listed on this page with
                different sets will lay a strong foundation for writing.
              </Text>
            </VStack>
          </GridItem>
          <GridItem
            pl="5"
            border="1px solid gray"
            borderTop="0px"
            area={'footer'}
            h="auto"
          >
            <HStack spacing={5}>
              <Text mt="17px">Was this information helpfull ?</Text>
              <Icon as={FaThumbsUp} w="20px" h="20px" />
              <Icon as={FaThumbsDown} w="20px" h="20px" />
            </HStack>

            <Link
              style={{ color: '#0061ff', fontSize: '12px' }}
              mb="10px"
              onClick={handleModalOpen}
            >
              Not resolve issue please write to us
            </Link>
          </GridItem>
        </Grid>




        {/* Write to us modal */}
        
        <Modal onClose={onClose} size="lg" isOpen={isOpen}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Write to Us</ModalHeader>
            <ModalCloseButton />
            <hr />
            <ModalBody>
              <VStack alignItems="flex-start" spacing={4}>
                <Text>Issue Type</Text>
                <Select
                  fontSize="14px"
                  placeholder="I have issue with exchange this order"
                  w="100%"
                  mb="0"
                >
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
                <HStack spacing={3}>
                  <Checkbox></Checkbox>
                  <Text fontSize="12px">Issue not in the list</Text>
                </HStack>

                <Text>Write Issue type</Text>
                <Select
                  fontSize="14px"
                  placeholder="I have issue with exchange this order"
                  w="100%"
                >
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

                <Text>Describe the issue</Text>
                <Textarea h="130px" />

                <Text>Attachments</Text>
                <HStack spacing={5}>
                  <Icon
                    as={FaFileUpload}
                    w="20px"
                    h="20px"
                    p="8px"
                    boxSize={10}
                    border="1px solid black"
                    borderRadius="8px"
                  />
                  <VStack alignItems="flex-start" spacing={0}>
                    <Text>Add Files</Text>
                    <Text fontSize="12px">Bills,Photos,documents</Text>
                  </VStack>
                </HStack>

                <Text>Call back Number</Text>
                <InputField
                  width="100%"
                  type="number"
                  placeholder="+91 23456 45XXX"
                />
              </VStack>
            </ModalBody>
            <ModalFooter>
              <HStack spacing={5} width="100%">
                <Button name="SUBMIT"></Button>
                <Button name="CANCEL"></Button>
              </HStack>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </>
  );
};

export default SupportFAQanswers;
