import {
    Box,
    SimpleGrid,
    Heading,
    Image,
    Text,
    HStack,
    VStack,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { useNavigate } from "react-router-dom";
  
  const ItemCard = ({ id, image, title, variant, price }) => {
    const navigate = useNavigate();
  
    const cardBg = useColorModeValue("white", "whiteAlpha.50");
    const border = useColorModeValue("gray.200", "whiteAlpha.200");
    const muted = useColorModeValue("gray.600", "whiteAlpha.700");
  
    return (
      <Box
        role="group"
        cursor="pointer"
        bg={cardBg}
        borderWidth="1px"
        borderColor={border}
        borderRadius="2xl"
        overflow="hidden"
        transition="all 0.2s ease"
        _hover={{ transform: "translateY(-4px)", boxShadow: "xl" }}
        onClick={() => navigate(`/item/${id}`)}
      >
        {/* Imagen */}
        <Box bg={useColorModeValue("gray.50", "blackAlpha.300")} p={6}>
          <Image
            src={image}
            alt={title}
            w="100%"
            h={{ base: "200px", md: "240px" }}
            objectFit="contain"
            transition="transform 0.25s ease"
            _groupHover={{ transform: "scale(1.03)" }}
            loading="lazy"
          />
        </Box>
  
        {/* Info */}
        <Box px={5} py={4}>
          <HStack align="start" justify="space-between" spacing={4}>
            <VStack align="start" spacing={1} minW={0}>
              <Text fontWeight="semibold" noOfLines={1}>
                {title}
              </Text>
              {variant ? (
                <Text fontSize="sm" color={muted} noOfLines={1}>
                  {variant}
                </Text>
              ) : (
                <Text fontSize="sm" color={muted} noOfLines={1}>
                  &nbsp;
                </Text>
              )}
            </VStack>
  
            <Text fontWeight="semibold" whiteSpace="nowrap">
              ${price}
            </Text>
          </HStack>
        </Box>
      </Box>
    );
  };
  
  const ItemListContainer = ({ products, title = "Productos" }) => {
    const headingColor = useColorModeValue("gray.900", "whiteAlpha.900");
  
    return (
      <Box maxW="6xl" mx="auto" px={{ base: 4, md: 6 }} py={{ base: 8, md: 12 }}>
        <Heading
          size="lg"
          mb={6}
          color={headingColor}
          letterSpacing="-0.5px"
        >
          {title}
        </Heading>
  
        <SimpleGrid
          columns={{ base: 1, sm: 2, md: 3, lg: 4 }}
          spacing={{ base: 5, md: 7 }}
        >
          {products.map((p) => (
            <ItemCard
              key={p.id}
              id={p.id}
              image={p.thumbnail ?? p.image ?? "/placeholder.jpg"}
              title={p.title}
              // “variant” es el subtítulo como en la captura: color/modelo/etc.
              variant={p.variant ?? p.category ?? ""}
              price={p.price}
            />
          ))}
        </SimpleGrid>
      </Box>
    );
  };
  
  export default ItemListContainer;
  