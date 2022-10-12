import React, { useState } from 'react';
import {
  HStack,
  VStack,
  Box,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Icon,
  UnorderedList,
  ListItem,
  InputGroup,
  Input,
  InputRightElement,
} from '@chakra-ui/react';
import InputField from '../../../InputField';
import Button from '../../../Button';
import { colors } from '../../../../resources/colors';
import { FaInfoCircle } from 'react-icons/fa';

function TransferOwnershipModal({isOpen, onClose }) {
  const [showPassword, setShowPassword] = useState(false);

  const showPasswordHandleClick = () => {
    setShowPassword(!showPassword);
  };

   

  return (
    <>
     <Button name="Open Modal"></Button>

    <Modal onClose={onClose} size="xl" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Transfer Store Ownership</ModalHeader>
        <ModalCloseButton />
        <hr />
        <ModalBody>
          <Box backgroundColor={colors.warning} w="100%" p="5px" mt="20px">
            <HStack
              alignItems="flex-start"
              flex="1"
              mt="8px"
              fontSize="14px"
              spacing={3}
              mb="8px"
            >
              <Icon
                as={FaInfoCircle}
                fill={colors.golden}
                h="30px"
                w="30px"
                ml="10px"
                mt="5px"
              />
              <Text>
                When the transfer is done you are not able to changeany
                information related to store or the privacy setting of the
                store.
              </Text>
            </HStack>
          </Box>

          <Text alignItems="flex-start" fontSize="14px" mt="20px">
            The new store owner will be able to make following changes.
          </Text>

          <VStack alignItems="flex-start" mt="15px" fontSize="14px" spacing={2}>
            <UnorderedList>
              <ListItem>
                Remove the existing owner and changes the permissions.
              </ListItem>
              <ListItem>
                View or edit the bank details of previous owner.
              </ListItem>
              <ListItem>Pause or close the store.</ListItem>
            </UnorderedList>
          </VStack>

          <Text alignItems="flex-start" fontSize="16px" mt="15px">
            NEW STORE OWNER
          </Text>

          <VStack alignItems="flex-start">
            <Text fontSize="14px" mt="20px">
              E-mail
            </Text>
            <InputField width="100%" type="text" />
          </VStack>

          <HStack mt="20px">
            <VStack alignItems="flex-start" flex="1">
              <Text fontSize="14px">First Name</Text>
              <InputField width="100%" type="text" />
            </VStack>

            <VStack alignItems="flex-start" flex="1">
              <Text fontSize="14px">Last Name</Text>
              <InputField width="100%" type="text" />
            </VStack>
          </HStack>

          <VStack alignItems="flex-start">
            <Text fontSize="14px" mt="20px">
              Conform with password to transfer
            </Text>
            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showPassword ? 'text' : 'password'}
                placeholder="Enter password"
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={showPasswordHandleClick}>
                  {showPassword ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
          </VStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} name="CANCEL"></Button>
          &nbsp;&nbsp;
          <Button name="TRANSFER OWNERSHIP"></Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  );
}

export default TransferOwnershipModal;
