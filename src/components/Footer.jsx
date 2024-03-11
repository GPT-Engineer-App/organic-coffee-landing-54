import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" paddingY="4" backgroundColor="gray.200" textAlign="center">
      <Text fontSize="sm">© {new Date().getFullYear()} Organic Coffee Shop. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
