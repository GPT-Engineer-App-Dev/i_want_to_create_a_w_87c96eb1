import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Radio, RadioGroup, Stack, Text, Image, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { FaMapMarkedAlt, FaUserPlus, FaSignInAlt } from "react-icons/fa";

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box p={8}>
      <Flex justifyContent="space-between" alignItems="center" mb={8}>
        <Heading as="h1" size="xl">
          Eventinder
        </Heading>
        <Stack direction="row" spacing={4}>
          <Button leftIcon={<FaSignInAlt />} colorScheme="teal">
            Login
          </Button>
          <Button variant="outline" onClick={onOpen}>
            Browse
          </Button>
        </Stack>
      </Flex>

      {/* Map placeholder */}
      <Box bg="gray.200" h="300px" borderRadius="md" mb={6} p={4} position="relative">
        <Text>Map of Events (placeholder)</Text>
        <Image src="https://images.unsplash.com/photo-1596025015373-fc39b4d4de2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYXAlMjBwbGFjZWhvbGRlcnxlbnwwfHx8fDE3MTIzOTE3ODh8MA&ixlib=rb-4.0.3&q=80&w=1080" objectFit="cover" borderRadius="md" />
        <Button colorScheme="blue" position="absolute" bottom={4} right={4}>
          Join Event
        </Button>
      </Box>

      {/* Membership options */}
      <Heading as="h2" size="lg" mb={4}>
        Membership Options
      </Heading>
      <Stack spacing={4}>
        <Button leftIcon={<FaMapMarkedAlt />} colorScheme="pink">
          Join an Event
        </Button>
        <Button leftIcon={<FaUserPlus />} colorScheme="green" onClick={onOpen}>
          Create an Event
        </Button>
      </Stack>

      {/* Modal for creating a new event */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Your Event</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Type of Event</FormLabel>
              <RadioGroup defaultValue="1">
                <Stack spacing={5} direction="row">
                  <Radio value="1">Existing Event</Radio>
                  <Radio value="2">New Event</Radio>
                </Stack>
              </RadioGroup>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Number of Participants</FormLabel>
              <Input placeholder="Alone or with 1-2 friends" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default Index;
