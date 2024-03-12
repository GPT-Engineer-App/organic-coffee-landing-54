import { Box, Button, FormControl, FormLabel, Input, Textarea, VStack } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <Box as="section" id="contact" py={16} bg="gray.100" borderTop="5px solid" borderColor="green.600">
      <VStack spacing={4} align="stretch" maxW="container.md" mx="auto" px={8}>
        <FormControl id="name" isRequired>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your Name" />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input type="email" placeholder="Your Email" />
        </FormControl>
        <FormControl id="message" isRequired>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Your Message" />
        </FormControl>
        <Button colorScheme="green" type="submit">
          Submit
        </Button>
      </VStack>
    </Box>
  );
};

export default ContactForm;
