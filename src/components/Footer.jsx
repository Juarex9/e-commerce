import {
    Box,
    Container,
    SimpleGrid,
    Stack,
    Text,
    Link,
    Heading,
    Input,
    Button,
    HStack,
    Divider,
    useColorModeValue,
} from "@chakra-ui/react";

const FooterColumn = ({ title, links = [] }) => {
    const linkColor = useColorModeValue("gray.600", "whiteAlpha.700");
    const hoverColor = useColorModeValue("gray.900", "white");

    return (
        <Stack spacing={3}>
            <Heading fontSize="sm" color="white" fontWeight="semibold">
                {title}
            </Heading>

            <Stack spacing={2}>
                {links.map((l) => (
                    <Link
                        key={l.label}
                        href={l.href ?? "#"}
                        color={linkColor}
                        _hover={{ color: hoverColor, textDecoration: "none" }}
                        w="fit-content"
                    >
                        {l.label}
                    </Link>
                ))}
            </Stack>
        </Stack>
    );
};

export default function Footer() {
    const bg = useColorModeValue("gray.900", "gray.950");
    const muted = useColorModeValue("whiteAlpha.700", "whiteAlpha.700");
    const border = useColorModeValue("whiteAlpha.200", "whiteAlpha.200");

    return (
        <Box as="footer" bg={bg} color="white" mt={16}>
            <Container maxW="6xl" py={{ base: 10, md: 14 }}>
                {/* Top links grid */}
                <SimpleGrid
                    columns={{ base: 2, md: 4 }}
                    spacing={{ base: 10, md: 12 }}
                >
                    <FooterColumn
                        title="Shop"
                        links={[
                            { label: "Zapatillas", href: "#" },
                            { label: "Remeras", href: "#" },
                            { label: "Perfumes", href: "#" },
                        ]}
                    />

                    <FooterColumn
                        title="Company"
                        links={[
                            { label: "Quienes somos", href: "#" },
                            { label: "Terminos y condiciones", href: "#" },
                            { label: "Privacidad", href: "#" },
                        ]}
                    />

                    <FooterColumn
                        title="Account"
                        links={[
                            { label: "Cuenta", href: "#" },
                            { label: "Reclamos y devoluciones", href: "#" },
                            { label: "Canjear una tarjeta de regalo", href: "#" },
                        ]}
                    />

                    <FooterColumn
                        title="Connect"
                        links={[
                            { label: "Contactanos", href: "#" },
                            { label: "Facebook", href: "#" },
                            { label: "Instagram", href: "#" },
                            { label: "Whatsapp", href: "#" },
                        ]}
                    />
                </SimpleGrid>

                {/* Newsletter */}
                <Box mt={{ base: 12, md: 14 }} maxW="lg">
                    <Heading fontSize="md" fontWeight="semibold">
                        Suscribete a nuestro Newsletter
                    </Heading>
                    <Text mt={2} color={muted}>
                        Enterate de todas nuestras novedades en tu correo electrónico
                    </Text>

                    <HStack mt={4} spacing={3} align="stretch">
                        <Input
                            placeholder="Enter your email"
                            bg="white"
                            color="gray.900"
                            _placeholder={{ color: "gray.500" }}
                            border="0"
                            focusBorderColor="purple.400"
                        />
                        <Button
                            colorScheme="purple"
                            px={8}
                            flexShrink={0}
                        >
                            Suscribirse
                        </Button>
                    </HStack>
                </Box>

                {/* Bottom */}
                <Divider my={{ base: 10, md: 12 }} borderColor={border} />

                <Text color={muted} fontSize="sm">
                    Copyright © {new Date().getFullYear()} Your Company, Inc.
                </Text>
            </Container>
        </Box>
    );
}
