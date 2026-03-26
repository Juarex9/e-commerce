import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  Badge,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
  useDisclosure,
  Container,
  Divider,
  Link as ChakraLink,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link as RouterLink, NavLink as RouterNavLink } from "react-router-dom";
import { FiMenu, FiSearch, FiShoppingCart, FiMoon, FiSun } from "react-icons/fi";

const NavItem = ({ to, children, onClick }) => {
  const hoverColor = useColorModeValue("accent.500", "accent.300");
  
  return (
    <ChakraLink
      as={RouterNavLink}
      to={to}
      onClick={onClick}
      fontWeight="500"
      fontSize="sm"
      letterSpacing="0.05em"
      textTransform="uppercase"
      color={useColorModeValue("gray.600", "gray.400")}
      _hover={{ 
        textDecoration: "none",
        color: hoverColor,
      }}
      _activeLink={{ 
        fontWeight: "700",
        color: hoverColor,
      }}
    >
      {children}
    </ChakraLink>
  );
};

export default function Navbar({
  categories = [
    { id: "all", name: "Todo", path: "/" },
    { id: "fragrances", name: "Perfumes", path: "/category/fragances" },
    { id: "tees", name: "Remeras", path: "/category/tees" },
    { id: "shoes", name: "Zapatillas", path: "/category/shoes" },
  ],
  cartCount = 0,
  onSearch,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = useColorModeValue(
    "rgba(255,255,255,0.9)", 
    "rgba(15,15,15,0.9)"
  );
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const mutedColor = useColorModeValue("gray.600", "gray.400");
  const inputBg = useColorModeValue("gray.50", "whiteAlpha.50");

  return (
    <Box
      position="sticky"
      top="0"
      zIndex="1000"
      bg={bg}
      backdropFilter="blur(24px)"
      borderBottomWidth="1px"
      borderColor={borderColor}
      transition="all 0.3s ease"
    >
      <Container maxW="7xl">
        <Flex h="72px" align="center" justify="space-between" gap={6}>
          {/* Logo - Izquierda */}
          <HStack spacing={3} minW="fit-content">
            <IconButton
              display={{ base: "inline-flex", lg: "none" }}
              aria-label="Open menu"
              icon={<FiMenu />}
              variant="ghost"
              onClick={onOpen}
            />
            <Text
              as={RouterLink}
              to="/"
              fontWeight="bold"
              fontSize="xl"
              letterSpacing="-0.02em"
              color={textColor}
              fontFamily="heading"
              transition="all 0.2s ease"
              _hover={{ 
                transform: "scale(1.02)",
                color: "accent.500",
              }}
            >
              TIENDA
            </Text>
          </HStack>

          {/* Centro: Navegación + Búsqueda */}
          <HStack 
            spacing={8} 
            flex={1} 
            justify="center"
            display={{ base: "none", lg: "flex" }}
          >
            {categories.map((c) => (
              <NavItem key={c.id} to={c.path}>
                {c.name}
              </NavItem>
            ))}
          </HStack>

          {/* Busqueda - Centro en desktop */}
          <InputGroup
            maxW="320px"
            display={{ base: "none", md: "flex" }}
            size="md"
          >
            <InputLeftElement pointerEvents="none" opacity={0.6} h="full">
              <FiSearch />
            </InputLeftElement>
            <Input
              placeholder="Buscar productos..."
              bg={inputBg}
              borderRadius="xl"
              borderWidth="1px"
              borderColor={borderColor}
              h="42px"
              _focus={{ 
                borderColor: "accent.500",
                boxShadow: "0 0 0 1px var(--chakra-colors-accent-500)",
              }}
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </InputGroup>

          {/* Derecha: Theme + Cart */}
          <HStack spacing={2} justify="flex-end" minW="fit-content">
            <IconButton
              aria-label="Toggle color mode"
              icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
              variant="ghost"
              onClick={toggleColorMode}
              borderRadius="xl"
              size="md"
            />

            <Button
              as={RouterLink}
              to="/cart"
              variant="ghost"
              position="relative"
              color={textColor}
              borderRadius="xl"
              px={4}
              _hover={{ 
                bg: useColorModeValue("gray.100", "whiteAlpha.100"),
              }}
            >
              <FiShoppingCart />
              {cartCount > 0 && (
                <Badge
                  position="absolute"
                  top="-2px"
                  right="-2px"
                  bg="brand.500"
                  color="white"
                  borderRadius="full"
                  minW="20px"
                  h="20px"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="0.7rem"
                  fontWeight="bold"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>
          </HStack>
        </Flex>

        {/* Busqueda mobile - debajo del navbar */}
        <Box pb={3} display={{ base: "block", md: "none" }}>
          <InputGroup size="md">
            <InputLeftElement pointerEvents="none" opacity={0.6} h="full">
              <FiSearch />
            </InputLeftElement>
            <Input
              placeholder="Buscar productos..."
              bg={inputBg}
              borderRadius="xl"
              borderWidth="1px"
              borderColor={borderColor}
              _focus={{ 
                borderColor: "accent.500",
              }}
              onChange={(e) => onSearch?.(e.target.value)}
            />
          </InputGroup>
        </Box>
      </Container>

      {/* Drawer Mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Flex align="center" justify="space-between">
              <Text fontWeight="bold" fontFamily="heading">Menú</Text>
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
                variant="ghost"
                onClick={toggleColorMode}
              />
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <VStack align="stretch" spacing={4} pt={4}>
              <InputGroup size="sm">
                <InputLeftElement pointerEvents="none">
                  <FiSearch />
                </InputLeftElement>
                <Input
                  placeholder="Buscar..."
                  borderRadius="xl"
                  onChange={(e) => onSearch?.(e.target.value)}
                />
              </InputGroup>

              <Divider />

              <VStack align="stretch" spacing={2} color={mutedColor}>
                {categories.map((c) => (
                  <NavItem key={c.id} to={c.path} onClick={onClose}>
                    {c.name}
                  </NavItem>
                ))}
              </VStack>

              <Divider />

              <Button
                as={RouterLink}
                to="/cart"
                leftIcon={<FiShoppingCart />}
                onClick={onClose}
                justifyContent="space-between"
                variant="ghost"
              >
                Carrito
                {cartCount > 0 && <Badge borderRadius="full" ml={2}>{cartCount}</Badge>}
              </Button>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
