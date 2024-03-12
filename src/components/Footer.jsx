import { Box, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" width="full" paddingY="4" backgroundColor="green.900" textAlign="center" borderTopRightRadius="md" borderTopLeftRadius="md">
      <Text fontSize="sm" color="green.200">
        © {new Date().getFullYear()} Organic Coffee Shop. All rights reserved.
      </Text>
    </Box>
  );
};

export default Footer;
