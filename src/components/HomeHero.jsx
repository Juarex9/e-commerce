import {
    Box,
    Button,
    Container,
    Heading,
    Stack,
    Text,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";


const HomeHero = () => {
    return (
        <Box
            minH="100vh"
            bgImage="url('/fondo-hero.png')"
            bgSize="cover"
            bgPosition="center"
            position="relative"
        >
            {/* Overlay oscuro */}
            <Box
                position="absolute"
                inset={0}
                bg="blackAlpha.600"
            />

            <Container
                maxW="6xl"
                h="100vh"
                position="relative"
                zIndex={1}
                display="flex"
                alignItems="center"
            >
                <Stack
                    spacing={6}
                    maxW="xl"
                    color="white"
                >
                    <Heading
                        fontSize={{ base: "3xl", md: "5xl" }}
                        fontWeight="bold"
                        lineHeight="short"
                    >
                        Llegaron los nuevos productos            </Heading>

                    <Text
                        fontSize={{ base: "md", md: "lg" }}
                        opacity={0.9}
                    >
                        Los nuevos ingresos ya están acá. Descubrí las últimas novedades de nuestra colección de temporada, disponibles por tiempo limitado.
                    </Text>

                    <Button
                        as={RouterLink}
                        to="/category/fragrances"   // o /category/novedades si usás esa categoría
                        size="lg"
                        bg="white"
                        color="black"
                        w="fit-content"
                        px={8}
                        _hover={{
                            bg: "gray.100",
                        }}
                    >
                        Ver novedades
                    </Button>
                </Stack>
            </Container>
        </Box>
    );
};

export default HomeHero;
