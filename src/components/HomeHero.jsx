import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { Link as RouterLink } from "react-router-dom";
import { useColorModeValue } from "@chakra-ui/react";

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HomeHero = () => {
  const bgImage = useColorModeValue(
    "url('/fondo-hero.png')",
    "url('/fondo-hero.png')"
  );
  const overlayBg = useColorModeValue(
    "blackAlpha.500",
    "blackAlpha.700"
  );
  const textColor = "white";
  const buttonBg = useColorModeValue("white", "whiteAlpha.200");
  const buttonColor = useColorModeValue("gray.900", "white");

  return (
    <Box
      minH="100vh"
      bgImage={bgImage}
      bgSize="cover"
      bgPosition="center"
      position="relative"
    >
      <Box
        position="absolute"
        inset={0}
        bg={overlayBg}
      />

      <Container
        maxW="7xl"
        h="100vh"
        position="relative"
        zIndex={1}
        display="flex"
        alignItems="center"
      >
        <Stack
          spacing={6}
          maxW="xl"
          color={textColor}
        >
          <Heading
            fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
            fontWeight="500"
            lineHeight="1.1"
            fontFamily="heading"
            letterSpacing="-0.02em"
            animation={`${fadeInUp} 0.8s ease-out`}
          >
            Nuevos ingresos
          </Heading>

          <Text
            fontSize={{ base: "md", md: "lg", lg: "xl" }}
            opacity={0.9}
            maxW="lg"
            fontFamily="body"
            fontWeight="400"
            animation={`${fadeInUp} 0.8s ease-out`}
            style={{ animationDelay: "0.15s", opacity: 0 }}
            lineHeight="1.8"
          >
            Descubrí las últimas novedades de nuestra colección de temporada. 
            Productos seleccionados con los mejores precios del mercado.
          </Text>

          <Box
            animation={`${fadeInUp} 0.8s ease-out`}
            style={{ animationDelay: "0.3s", opacity: 0 }}
            pt={2}
          >
            <Button
              as={RouterLink}
              to="/category/fragances"
              size="lg"
              px={10}
              py={7}
              bg={buttonBg}
              color={buttonColor}
              fontWeight="600"
              fontSize="sm"
              letterSpacing="0.05em"
              _hover={{
                bg: useColorModeValue("gray.100", "whiteAlpha.300"),
                transform: "translateY(-3px)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.25)",
              }}
              transition="all 0.25s ease"
            >
              Ver novedades
            </Button>
          </Box>
        </Stack>
      </Container>

      <Box
        position="absolute"
        bottom={8}
        left="50%"
        transform="translateX(-50%)"
        opacity={0.6}
        animation={`${fadeInUp} 1s ease-out`}
        style={{ animationDelay: "0.6s", opacity: 0 }}
      >
        <Text 
          fontSize="xs" 
          color="white" 
          letterSpacing="0.2em" 
          fontFamily="body"
        >
          SCROLL
        </Text>
      </Box>
    </Box>
  );
};

export default HomeHero;
