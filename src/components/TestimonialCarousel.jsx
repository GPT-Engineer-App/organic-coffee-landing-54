import { Box, VStack, Text, Avatar, HStack } from "@chakra-ui/react";

const testimonials = [
  {
    name: "Jay Pavich",
    position: "Quality of coffee and its freshness",
    content: "The coffee is always fresh and full of flavor. It's truly a premium experience every time.",
    avatar: "https://eu.ui-avatars.com/api/?name=Jay+Pavich&background=8D6E63&color=fff&rounded=true",
  },
  {
    name: "Anna Johansson",
    position: "Quality of service",
    content: "The service here is outstanding. Friendly staff and quick service make it a pleasure to come back.",
    avatar: "https://eu.ui-avatars.com/api/?name=Anna+Johansson&background=6D4C41&color=fff&rounded=true",
  },
  {
    name: "Maya Damiani",
    position: "Ethical sourcing",
    content: "I love that this shop prioritizes ethical sourcing. It feels good to support a business that cares.",
    avatar: "https://eu.ui-avatars.com/api/?name=Maya+Damiani&background=4E342E&color=fff&rounded=true",
  },
];

const TestimonialCarousel = () => {
  return (
    <Box py={16} bgImage="url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBiZWFuc3xlbnwwfHx8fDE2Nzg2NjAwMDA&ixlib=rb-1.2.1&q=80&w=1080')" bgPosition="center" bgRepeat="no-repeat" bgSize="cover">
      <VStack spacing={8} align="stretch">
        <Text fontSize="2xl" textAlign="center" fontWeight="bold">
          What Our Customers Say
        </Text>
        {testimonials.map((testimonial, index) => (
          <Box key={index} p={6} boxShadow="lg" borderRadius="md" bg="gray.100">
            <HStack spacing={4} align="center">
              <Avatar name={testimonial.name} src={testimonial.avatar} size="lg" />
              <VStack align="start">
                <Text fontWeight="bold">{testimonial.name}</Text>
                <Text fontSize="sm" color="gray.500">
                  {testimonial.position}
                </Text>
                <Text>{testimonial.content}</Text>
              </VStack>
            </HStack>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default TestimonialCarousel;
