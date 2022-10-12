import React, { useState } from 'react';
import {
  HStack,
  Image,
  VStack,
  Box,
  Text,
  useDisclosure,
  Link,
} from '@chakra-ui/react';
import { colors } from '../../../../resources/colors';
import TransferOwnershipModal from './TransferOwnershipModal';
import AddStaffMemberModal from './AddStaffMemberModal';

function RolesPermission({ showLabel }) {
  const [
    showTransferOwnerShipDialogueBox,
    setShowTransferOwnerShipDialogueBox,
  ] = useState(false);
  const [showAddStaffMembersDialogueBox, ShowAddStaffMembersDialogueBox] =
    useState(false);
  const {
    isOpen: isTransferOwnerShipOpen,
    onOpen: onTransferOwnerShipOpen,
    onClose: onTransferOwnerShipClose,
  } = useDisclosure();
  const {
    isOpen: isAddStaffMembersOpen,
    onOpen: onAddStaffMembersOpen,
    onClose: onAddStaffMembersClose,
  } = useDisclosure();

  const openTransferOwnershipModal = () => {
    onTransferOwnerShipOpen();
    setShowTransferOwnerShipDialogueBox(true);
  };

  const openAddStaffMembersModal = () => {
    onAddStaffMembersOpen();
    ShowAddStaffMembersDialogueBox(true);
  };

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
                  Roles And Permission
                </Text>
              </VStack>
              <Box
                bg={colors.white}
                border="1px solid gray"
                borderRadius="lg"
                height="auto"
                padding="20px"
                fontFamily="Poppins, sans-serif"
                w="100%"
                mt="20px"
              >
                <HStack
                  bg={colors.backgroundGray}
                  alignItems="flex-start"
                  spacing={80}
                >
                  <Text fontSize="17px" mt="6px">
                    Owner Info
                  </Text>
                  <Link
                    style={{
                      color: '#0061ff',
                      fontSize: '14px',
                      marginTop: '8px',
                    }}
                    onClick={openTransferOwnershipModal}
                  >
                    Transfer Ownership
                  </Link>
                </HStack>
                <VStack alignItems="flex-start" mt="20px">
                  <HStack>
                    <Box>
                      <Image
                        src={require('../../../img/user_img.png')}
                        style={{ height: '50px', width: '50px' }}
                      />
                    </Box>
                    <VStack alignItems="flex-start" fontSize="14px">
                      <Text>Suraj Mahajan</Text>
                      <Text>Last Login was Monday,2 May,2022 10:49 am IST</Text>
                    </VStack>
                  </HStack>
                </VStack>

                <hr style={{ border: '1px solid gray', marginTop: '20px' }} />

                <Text fontSize="12px" mt="15px">
                  Store owners have some permissions that can't be assigned to
                  staff. learn more about store owner permissions.
                </Text>
              </Box>
              <Box
                bg={colors.white}
                border="1px solid gray"
                borderRadius="lg"
                height="auto"
                padding="20px"
                fontFamily="Poppins, sans-serif"
                w="100%"
                mt="20px"
                mb="20px"
              >
                <HStack bg={colors.backgroundGray} alignItems="flex-start">
                  <Text fontSize="20px" mt="6px" value="general">
                    All staff members (1 to 3)
                  </Text>
                  <Link
                    style={{
                      color: '#0061ff',
                      fontSize: '14px',
                      marginTop: '10px',
                      marginLeft: '250px',
                    }}
                    onClick={openAddStaffMembersModal}
                  >
                    Add Staff
                  </Link>
                </HStack>
                <VStack alignItems="flex-start" mt="20px">
                  <HStack>
                    <Box>
                      <Image
                        src={require('../../../img/user_img.png')}
                        style={{ height: '50px', width: '50px' }}
                      />
                    </Box>
                    <VStack alignItems="flex-start" fontSize="14px">
                      <Text>Suraj Mahajan</Text>
                      <HStack spacing={20}>
                        <Text>
                          Last Login was Monday,2 May,2022 10:49 am IST
                        </Text>
                        <Text>View Permissions</Text>
                      </HStack>
                    </VStack>
                  </HStack>
                </VStack>
              </Box>
            </Box>

            {/*modal dialogie box for Transfer Ownership*/}
            {showTransferOwnerShipDialogueBox && (
              <TransferOwnershipModal
                isOpen={isTransferOwnerShipOpen}
                onClose={onTransferOwnerShipClose}
                onOpen={onTransferOwnerShipOpen}
              />
            )}

            {/* modal dialogie box for Add staff members*/}
            {showAddStaffMembersDialogueBox && (
              <AddStaffMemberModal
                isOpen={isAddStaffMembersOpen}
                onClose={onAddStaffMembersClose}
                onOpen={onAddStaffMembersOpen}
              />
            )}
          </Box>
        </VStack>
      </HStack>
    </div>
  );
}

export default RolesPermission;
