import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, GridItem } from "@chakra-ui/react";
import Footer from "../components/Footer";
import { FaCoffee, FaLeaf, FaMugHot, FaShoppingBasket } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDB8fHx8MTcxMDE0MjcyOHww&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover" bgRepeat="no-repeat" height="90vh" display="flex" alignItems="center" justifyContent="center" color="white">
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="2xl" fontWeight="bold" textShadow="2px 2px 8px rgba(0, 0, 0, 0.6)">
            Organic Delight For Every Coffee Lover
          </Heading>
          <Text fontSize="xl" textShadow="2px 2px 8px rgba(0, 0, 0, 0.6)">
            Experience the finest blend of organic coffee beans
          </Text>
          <Button backgroundColor="#795548" color="white" leftIcon={<FaMugHot />} textShadow="2px 2px 8px rgba(0, 0, 0, 0.6)">
            Discover More
          </Button>
        </VStack>
      </Box>

      {/* Services Section */}
      <Box py={16}>
        <VStack spacing={8}>
          <Heading as="h2" size="xl">
            Our Services & Products
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
            <GridItem>
              <ServiceCard icon={FaCoffee} title="Fresh Coffee" description="Expertly roasted beans, ready to brew a perfect cup." />
            </GridItem>
            <GridItem>
              <ServiceCard icon={FaLeaf} title="Organic Teas" description="A selection of premium organic teas for every mood." />
            </GridItem>
            <GridItem>
              <ServiceCard icon={FaMugHot} title="Coffee Equipment" description="High-quality equipment for the perfect coffee experience." />
            </GridItem>
            <GridItem>
              <ServiceCard icon={FaShoppingBasket} title="Shop" description="Browse our shop for coffee, tea, and accessories." />
            </GridItem>
          </SimpleGrid>
        </VStack>
      </Box>
      <Footer />
    </Container>
  );
};

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <VStack bg="gray.100" p={6} borderRadius="md" boxShadow="md" spacing={4} align="center" textAlign="center">
      <Box fontSize="3xl" color="green.500">
        <Icon />
      </Box>
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text fontSize="md">{description}</Text>
    </VStack>
  );
};

export default Index;
