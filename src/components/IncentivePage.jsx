import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Heading,
    Text,
    Image,
    Icon,
    useColorModeValue,
  } from "@chakra-ui/react";
  import { FiTruck, FiShield, FiRefreshCcw } from "react-icons/fi";
  
  const Feature = ({ icon, title, text }) => {
    const titleColor = useColorModeValue("gray.900", "whiteAlpha.900");
    const textColor = useColorModeValue("gray.600", "whiteAlpha.700");
  
    return (
      <Stack spacing={3}>
        <Icon as={icon} boxSize={9} color={useColorModeValue("gray.900", "white")} />
        <Text fontWeight="semibold" color={titleColor}>
          {title}
        </Text>
        <Text color={textColor} fontSize="sm" lineHeight="tall" maxW="38ch">
          {text}
        </Text>
      </Stack>
    );
  };
  
  export default function IncentivePage() {
    const titleColor = useColorModeValue("gray.900", "whiteAlpha.900");
    const bodyColor = useColorModeValue("gray.600", "whiteAlpha.700");
    const cardBg = useColorModeValue("white", "whiteAlpha.50");
    const border = useColorModeValue("gray.200", "whiteAlpha.200");
  
    return (
      <Box py={{ base: 14, md: 20 }}>
        <Container maxW="6xl">
          {/* Top: texto + imagen */}
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 10, lg: 16 }} alignItems="center">
            <Stack spacing={5}>
              <Heading
                color={titleColor}
                fontSize={{ base: "3xl", md: "4xl" }}
                letterSpacing="-1px"
                lineHeight="short"
              >
                Construimos nuestra tienda en base a una gran atención al cliente
              </Heading>
  
              <Text color={bodyColor} fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Nuestra idea es simple: que comprar sea fácil, rápido y sin vueltas. Seleccionamos productos que
                realmente valen la pena y cuidamos cada detalle para que la experiencia sea clara, segura y
                confiable.
              </Text>
  
              <Text color={bodyColor} fontSize={{ base: "md", md: "lg" }} lineHeight="tall">
                Si necesitás ayuda para elegir talle, entender un envío o cambiar un producto, te respondemos
                como corresponde. Sin “letra chica” y sin complicaciones.
              </Text>
            </Stack>
  
            <Box
              bg={cardBg}
              borderWidth="1px"
              borderColor={border}
              borderRadius="2xl"
              overflow="hidden"
              boxShadow={useColorModeValue("sm", "none")}
            >
              <Image
                src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=1400&q=80"
                alt="Atención al cliente"
                w="100%"
                h={{ base: "260px", md: "360px" }}
                objectFit="cover"
              />
            </Box>
          </SimpleGrid>
  
          {/* Bottom: features */}
          <Box mt={{ base: 14, md: 16 }}>
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 10, md: 12 }}>
              <Feature
                icon={FiTruck}
                title="Envíos rápidos"
                text="Despachamos lo antes posible y te avisamos el estado del envío. Sin sorpresas."
              />
              <Feature
                icon={FiShield}
                title="Compra segura"
                text="Tus datos protegidos y un proceso de compra simple. Transparencia total."
              />
              <Feature
                icon={FiRefreshCcw}
                title="Cambios simples"
                text="Si no era lo que esperabas, lo cambiamos. Queremos que quedes conforme."
              />
            </SimpleGrid>
          </Box>
        </Container>
      </Box>
    );
  }
  