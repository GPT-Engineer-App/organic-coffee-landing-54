import { Box, Divider, Flex, Text, VStack } from "@chakra-ui/react";

const HealthBenefits = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
      <Box flex="1" bgImage="url('https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjB0cmVlc3xlbnwwfHx8fDE2Nzg3MDA4OTg&ixlib=rb-1.2.1&q=80&w=1080')" bgSize="cover" bgPos="center" height={{ base: "200px", md: "300px" }}></Box>
      <VStack flex="1" bg="#4E342E" color="#D2B48C" p={10} spacing={4}>
        <Text fontSize="xl" fontWeight="bold">
          Top 3 Health Benefits of Coffee
        </Text>
        <Divider borderColor="#D2B48C" />
        <Text>Improves energy levels and cognitive function.</Text>
        <Divider borderColor="#D2B48C" />
        <Text>Can help burn fat by boosting metabolic rate.</Text>
        <Divider borderColor="#D2B48C" />
        <Text>Contains essential nutrients like B vitamins, potassium, and manganese.</Text>
      </VStack>
    </Flex>
  );
};

export default HealthBenefits;
