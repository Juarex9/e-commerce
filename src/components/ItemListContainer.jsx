import {
  Box,
  SimpleGrid,
  Heading,
  Image,
  Text,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ItemCard = ({ id, image, title, variant, price, index }) => {
  const navigate = useNavigate();

  const cardBg = useColorModeValue("white", "#1a1a1a");
  const borderColor = useColorModeValue("gray.100", "whiteAlpha.100");
  const imageBg = useColorModeValue("gray.50", "whiteAlpha.50");
  const mutedColor = useColorModeValue("gray.500", "gray.400");
  const textColor = useColorModeValue("gray.900", "gray.100");

  return (
    <Box
      role="group"
      cursor="pointer"
      bg={cardBg}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="2xl"
      overflow="hidden"
      transition="all 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
      animation={`${fadeInUp} 0.5s ease-out`}
      animationDelay={`${index * 0.08}s`}
      animationFillMode="backwards"
      _hover={{
        transform: "translateY(-6px)",
        boxShadow: useColorModeValue(
          "0 16px 48px rgba(0,0,0,0.1)",
          "0 16px 48px rgba(0,0,0,0.5)"
        ),
      }}
      onClick={() => navigate(`/item/${id}`)}
    >
      <Box 
        bg={imageBg} 
        p={6}
        transition="all 0.3s ease"
        _groupHover={{
          bg: useColorModeValue("gray.100", "whiteAlpha.100"),
        }}
      >
        <Image
          src={image}
          alt={title}
          w="100%"
          h={{ base: "200px", md: "260px" }}
          objectFit="contain"
          transition="transform 0.4s ease"
          _groupHover={{ 
            transform: "scale(1.05)" 
          }}
          loading="lazy"
        />
      </Box>

      <Box px={5} py={5}>
        <HStack align="start" justify="space-between" spacing={3}>
          <VStack align="start" spacing={1} minW={0} flex={1}>
            <Text 
              fontWeight="500" 
              noOfLines={1}
              fontSize="sm"
              color={textColor}
            >
              {title}
            </Text>
            {variant ? (
              <Text 
                fontSize="xs" 
                color={mutedColor} 
                noOfLines={1}
              >
                {variant}
              </Text>
            ) : (
              <Text fontSize="xs" opacity={0}>&nbsp;</Text>
            )}
          </VStack>

          <VStack align="end" spacing={1}>
            <Text 
              fontWeight="700" 
              fontSize="lg"
              color="accent.500"
            >
              ${price}
            </Text>
          </VStack>
        </HStack>
      </Box>
    </Box>
  );
};

const ItemListContainer = ({ products, title = "Productos" }) => {
  const headingColor = useColorModeValue("gray.900", "gray.100");

  return (
    <Box 
      maxW="7xl" 
      mx="auto" 
      px={{ base: 4, md: 8 }} 
      py={{ base: 10, md: 16 }}
    >
      <Heading
        fontSize={{ base: "2xl", md: "3xl" }}
        fontWeight="500"
        mb={8}
        fontFamily="heading"
        letterSpacing="-0.02em"
        color={headingColor}
        position="relative"
        display="inline-block"
        _after={{
          content: '""',
          position: "absolute",
          bottom: "-8px",
          left: "0",
          width: "48px",
          height: "3px",
          bg: "accent.500",
          borderRadius: "full",
        }}
      >
        {title}
      </Heading>

      <SimpleGrid
        columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
        spacing={{ base: 5, md: 6 }}
      >
        {products.map((p, index) => (
          <ItemCard
            key={p.id}
            id={p.id}
            image={p.thumbnail ?? p.image ?? "/placeholder.jpg"}
            title={p.title}
            variant={p.variant ?? p.category ?? ""}
            price={p.price}
            index={index}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ItemListContainer;
