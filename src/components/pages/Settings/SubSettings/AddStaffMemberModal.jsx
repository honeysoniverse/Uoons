import React from 'react';
import {
  HStack,
  VStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Checkbox,
} from '@chakra-ui/react';
import InputField from '../../../InputField';
import Button from '../../../Button';
import { colors } from '../../../../resources/colors';

function AddStaffMemberModal({isOpen,onClose}) {
  
  return (
    <Modal onClose={onClose} size="xl" isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add Staff Members</ModalHeader>
        <ModalCloseButton />
        <hr />
        <ModalBody>
          <VStack alignItems="flex-start">
            <Text fontSize="19px" mt="10px">
              Staff
            </Text>
            <Text fontSize="14px">
              Give staff access to your store by sending them an invitation.If
              you're working with designer,developer and anyone else.
            </Text>
          </VStack>

          <Text fontSize="17px" mt="20px">
            Staff Information
          </Text>

          <VStack alignItems="flex-start">
            <Text fontSize="14px" mt="20px">
              E-mail
            </Text>
            <InputField width="100%" type="text" />
          </VStack>

          <HStack mt="20px" spacing={5}>
            <VStack alignItems="flex-start" flex="1">
              <Text fontSize="14px">First Name</Text>
              <InputField width="100%" type="text" />
            </VStack>

            <VStack alignItems="flex-start" flex="1">
              <Text fontSize="14px">Last Name</Text>
              <InputField width="100%" type="text" />
            </VStack>
          </HStack>

          <VStack alignItems="flex-start" mt="30px">
            <Text fontSize="14px">
              This staff will have no permissions in this store.
            </Text>
          </VStack>

          <HStack spacing={20}>
            <VStack alignItems="flex-start" mt="20px" ml="30px">
              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Home</Text>
              </HStack>

              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Oders</Text>
              </HStack>

              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Product status change</Text>
              </HStack>

              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Gift card Option</Text>
              </HStack>

              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Reports and Analytics</Text>
              </HStack>

              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Deshboard</Text>
              </HStack>

              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Discount</Text>
              </HStack>
            </VStack>

            <VStack alignItems="flex-start">
              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Payments</Text>
              </HStack>

              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Quality control dashboard</Text>
              </HStack>

              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Edit profile</Text>
              </HStack>

              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Inventory management</Text>
              </HStack>

              <HStack>
                <Checkbox borderColor={colors.infoGray}></Checkbox>
                <Text fontSize="14px">Product upload window</Text>
              </HStack>
            </VStack>
          </HStack>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose} name="CANCEL"></Button>
          &nbsp;&nbsp;
          <Button name="SEND INVITE"></Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default AddStaffMemberModal;
