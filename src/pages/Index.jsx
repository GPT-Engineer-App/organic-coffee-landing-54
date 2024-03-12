import { Box, Button, Container, Heading, SimpleGrid, Text, VStack, GridItem } from "@chakra-ui/react";
import TestimonialCarousel from "../components/TestimonialCarousel";
import Footer from "../components/Footer";
import { Divider, Flex, Image } from "@chakra-ui/react";
import { FaCoffee, FaLeaf, FaMugHot, FaShoppingBasket } from "react-icons/fa";

const HealthBenefits = () => {
  const benefits = ["Improves energy levels and cognitive function", "Can help to burn fat and improve physical performance", "Contains essential nutrients and antioxidants"];

  return (
    <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" py={16}>
      <Box flex="1" maxW={{ md: "50%" }} borderRadius="0px 8px 8px 0px" overflow="hidden">
        <Image src="https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt="Coffee trees" />
      </Box>
      <Flex flex="1" direction="column" bg="#5D4037" color="#D7CCC8" p={8} borderRadius="0px 0px 8px 8px" boxShadow="lg" marginLeft={0}>
        {benefits.map((benefit, index) => (
          <Box key={index} py={2}>
            <Text fontSize="lg" fontWeight="bold">
              {benefit}
            </Text>
            {index < benefits.length - 1 && <Divider borderColor="#BCAAA4" my={4} />}
          </Box>
        ))}
      </Flex>
    </Flex>
  );
};

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Hero Section */}
      <Box bgImage="https://images.unsplash.com/photo-1453614512568-c4024d13c247?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBzaG9wfGVufDB8fHx8MTcxMDE0MjcyOHww&ixlib=rb-4.0.3&q=80&w=1080" bgPos="center" bgSize="cover" bgRepeat="no-repeat" height="54vh" display="flex" alignItems="center" justifyContent="center" color="white">
        <VStack spacing={4} textAlign="center">
          <Heading as="h1" size="3xl" fontWeight="bold" textShadow="2px 2px 8px rgba(0, 0, 0, 0.75)">
            Organic Delight For Every Coffee Lover
          </Heading>
          <Text fontSize="2xl" fontFamily="Playfair Display, sans-serif" textShadow="2px 2px 8px rgba(0, 0, 0, 0.6)">
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
      {}

      {}
      <Box py={16}>
        <VStack spacing={8}>
          <Heading as="h2" size="xl" textAlign="center" pb={8}>
            What Our Customers Say
          </Heading>
          <SimpleGrid columns={{ base: 1, sm: 1, md: 3 }} spacing={10}>
            <Testimonial name="Leon Che" content="The quality of the coffee and its freshness are unparalleled. I've become a regular because I can't get enough of this amazing coffee!" gender="male" />
            <Testimonial name="Anna Johansson" content="The service here is exceptional. The staff are always friendly and go above and beyond to ensure a great experience." gender="female" />
            <Testimonial name="Maya Damiani" content="I love that this shop focuses on ethical sourcing. It's important to support businesses that care for the environment and the farmers." gender="female" />
          </SimpleGrid>
        </VStack>
      </Box>

      {}
      <HealthBenefits />

      <Footer />
    </Container>
  );
};

import { Avatar } from "@chakra-ui/react";

const Testimonial = ({ name, content, gender }) => {
  const avatarUrl = name === "Leon Che" ? "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80" : name === "Anna Johansson" ? "https://i.pravatar.cc/150?img=44" : "https://i.pravatar.cc/150?img=47";
  return (
    <VStack bg="gray.100" pt={20} pb={6} px={6} borderRadius="md" boxShadow="md" spacing={4} align="center" textAlign="center" borderBottom="5px solid" borderColor={name === "Leon Che" ? "green.600" : name === "Anna Johansson" ? "#A0522D" : "green.600"} position="relative">
      <Avatar size="xl" name={name} src={avatarUrl} position="absolute" top="-40px" left="50%" transform="translateX(-50%)" shadow="2xl" />
      <Text fontWeight="bold">{name}</Text>
      <Text>{content}</Text>
    </VStack>
  );
};

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description }) => {
  return (
    <VStack bg="gray.100" p={6} borderRadius="md" boxShadow="md" spacing={4} align="center" textAlign="center" border="2px solid" borderColor={title === "Fresh Coffee" ? "#A0522D" : title === "Organic Teas" ? "green.600" : title === "Coffee Equipment" ? "#8B4513" : title === "Shop" ? "green.600" : "green.200"}>
      <Box fontSize="3xl" color={title === "Fresh Coffee" ? "#A0522D" : title === "Organic Teas" ? "green.600" : title === "Coffee Equipment" ? "#8B4513" : title === "Shop" ? "green.600" : "green.500"}>
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
