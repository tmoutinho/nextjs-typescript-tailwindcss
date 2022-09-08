import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';

const ChakraModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen} textColor="black">
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton textColor="black" />
          <ModalBody textColor="black">My body text</ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="gray" textColor="black">
              Secondary Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ChakraModal;
