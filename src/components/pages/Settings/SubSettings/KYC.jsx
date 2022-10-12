import React, { useState } from 'react';
import {
  HStack,
  VStack,
  Box,
  Text,
  Button as ChakraButton,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@chakra-ui/react';

import Button from '../../../Button';
import { colors } from '../../../../resources/colors';

function KYC({ showLabel }) {
  const inputFieldRef = React.useRef(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showAadharCardDialogueBox, setShowAadharCardDialogueBox] =
    useState(true);

  const [, setFile] = useState();

  const openModal = () => {
    onOpen();
    setShowAadharCardDialogueBox(true);
  };

  //File uploader
  const fileUpload = () => {
    inputFieldRef.current.click();
  };

  const handleSelectedFile = e => {
    //  console.log(e.target.files[0])
    setFile(e.target.files[0]);
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
                <HStack>
                  <Text fontSize="20px" mt="6px" value="general">
                    KYC-Know your Customer
                  </Text>
                </HStack>
                <Text alignItems="flex-start" fontSize="12px">
                  Upload your document to complete the kyc
                </Text>
              </VStack>

              <Box mt="20px">
                <ChakraButton
                  fontSize="12px"
                  width="100%"
                  border="1px dashed gray"
                  onClick={openModal}
                >
                  <Text alignItems="flex-start" fontSize="12px">
                    + Add File (Aadhar Card Details)
                  </Text>
                </ChakraButton>
                <Input
                  type="file"
                  style={{ display: 'none' }}
                  ref={inputFieldRef}
                  onChange={handleSelectedFile}
                  accept="image/*"
                />
              </Box>

              <Box mt="20px">
                <ChakraButton
                  fontSize="12px"
                  width="100%"
                  border="1px dashed gray"
                  onClick={fileUpload}
                >
                  <Text alignItems="flex-start" fontSize="12px">
                    + Add File (PAN Card Details)
                  </Text>
                </ChakraButton>
                <Input
                  type="file"
                  style={{ display: 'none' }}
                  ref={inputFieldRef}
                  onChange={handleSelectedFile}
                  accept="image/*"
                />
              </Box>

              <Box mt="20px">
                <ChakraButton
                  fontSize="12px"
                  width="100%"
                  border="1px dashed gray"
                  onClick={fileUpload}
                >
                  <Text alignItems="flex-start" fontSize="12px">
                    + Add File (GSTIN Number)
                  </Text>
                </ChakraButton>
                <Input
                  type="file"
                  style={{ display: 'none' }}
                  ref={inputFieldRef}
                  onChange={handleSelectedFile}
                  accept="image/*"
                />
              </Box>

              <Box mt="20px">
                <ChakraButton
                  fontSize="12px"
                  width="100%"
                  border="1px dashed gray"
                  onClick={fileUpload}
                >
                  <Text alignItems="flex-start" fontSize="12px">
                    + Add File (Gumasta Certificate)
                  </Text>
                </ChakraButton>
                <Input
                  type="file"
                  style={{ display: 'none' }}
                  ref={inputFieldRef}
                  onChange={handleSelectedFile}
                  accept="image/*"
                />
              </Box>

              <Text alignItems="flex-start" fontSize="12px" mt="20px">
                Accept Format of images are JPG,PNG,JPEG.Please upload the
                pictures in mentioned formate.
              </Text>
            </Box>

            {/* modal dialogie box for Aadhar Card*/}
            {showAadharCardDialogueBox && (
              <Modal onClose={onClose} size="xl" isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Upload Status</ModalHeader>
                  <ModalCloseButton />
                  <hr />
                  <ModalBody>
                    <Box mt="20px">
                      <ChakraButton
                        fontSize="12px"
                        width="100%"
                        border="1px dashed gray"
                        onClick={fileUpload}
                      >
                        <Text alignItems="flex-start" fontSize="12px">
                          + Add File ( Front side of Aadhar Card Details)
                        </Text>
                      </ChakraButton>
                      <Input
                        type="file"
                        style={{ display: 'none' }}
                        ref={inputFieldRef}
                        onChange={handleSelectedFile}
                        accept="image/*"
                      />
                    </Box>

                    <Box mt="20px">
                      <ChakraButton
                        fontSize="12px"
                        width="100%"
                        border="1px dashed gray"
                        onClick={fileUpload}
                      >
                        <Text alignItems="flex-start" fontSize="12px">
                          + Add File (Back side of Aadhar Card Details)
                        </Text>
                      </ChakraButton>
                      <Input
                        type="file"
                        style={{ display: 'none' }}
                        ref={inputFieldRef}
                        onChange={handleSelectedFile}
                        accept="image/*"
                      />
                    </Box>
                  </ModalBody>
                  <ModalFooter>
                    <Button onClick={onClose} name="CANCEL"></Button>
                    &nbsp;&nbsp;
                    <Button name="UPLOAD"></Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            )}
          </Box>
        </VStack>
      </HStack>
    </div>
  );
}

export default KYC;
