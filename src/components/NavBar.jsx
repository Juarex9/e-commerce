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
  
  const NavItem = ({ to, children, onClick }) => (
    <ChakraLink
      as={RouterNavLink}
      to={to}
      onClick={onClick}
      fontWeight="medium"
      _hover={{ textDecoration: "none", opacity: 0.85 }}
      _activeLink={{ fontWeight: "semibold" }}
    >
      {children}
    </ChakraLink>
  );
  
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
  
    const bg = useColorModeValue("whiteAlpha.800", "blackAlpha.500");
    const border = useColorModeValue("gray.200", "whiteAlpha.200");
    const text = useColorModeValue("gray.800", "whiteAlpha.900");
    const muted = useColorModeValue("gray.600", "whiteAlpha.700");
    const inputBg = useColorModeValue("white", "blackAlpha.300");
  
    return (
      <Box
        position="sticky"
        top="0"
        zIndex="1000"
        bg={bg}
        backdropFilter="blur(10px)"
        borderBottomWidth="1px"
        borderColor={border}
      >
        <Container maxW="6xl">
          <Flex h="64px" align="center" justify="space-between" gap={3}>
            {/* Left: Brand + Mobile menu */}
            <HStack spacing={3} minW="fit-content">
              <IconButton
                display={{ base: "inline-flex", md: "none" }}
                aria-label="Open menu"
                icon={<FiMenu />}
                variant="ghost"
                onClick={onOpen}
              />
              <Text
                as={RouterLink}
                to="/"
                fontWeight="bold"
                letterSpacing="-0.5px"
                fontSize="lg"
                color={text}
              >
                Tienda de Agustín
              </Text>
            </HStack>
  
            {/* Center: Links (desktop) */}
            <HStack
              display={{ base: "none", md: "flex" }}
              spacing={6}
              color={muted}
            >
              {categories.map((c) => (
                <NavItem key={c.id} to={c.path}>
                  {c.name}
                </NavItem>
              ))}
            </HStack>
  
            {/* Right: Search + Theme + Cart */}
            <HStack spacing={2} justify="flex-end" flex="1">
              <InputGroup
                display={{ base: "none", md: "block" }}
                maxW="320px"
              >
                <InputLeftElement pointerEvents="none" opacity={0.8}>
                  <FiSearch />
                </InputLeftElement>
                <Input
                  placeholder="Buscar productos..."
                  bg={inputBg}
                  onChange={(e) => onSearch?.(e.target.value)}
                />
              </InputGroup>
  
              <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
                variant="ghost"
                onClick={toggleColorMode}
              />
  
              <Button
                as={RouterLink}
                to="/cart"
                variant="ghost"
                leftIcon={<FiShoppingCart />}
                position="relative"
                color={text}
              >
                Carrito
                {cartCount > 0 && (
                  <Badge
                    position="absolute"
                    top="6px"
                    right="6px"
                    borderRadius="full"
                    px="2"
                    fontSize="0.75rem"
                  >
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </HStack>
          </Flex>
        </Container>
  
        {/* Mobile drawer */}
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader>
              <Flex align="center" justify="space-between">
                <Text fontWeight="bold">Menú</Text>
                <IconButton
                  aria-label="Toggle color mode"
                  icon={colorMode === "light" ? <FiMoon /> : <FiSun />}
                  variant="ghost"
                  onClick={toggleColorMode}
                />
              </Flex>
            </DrawerHeader>
  
            <DrawerBody>
              <VStack align="stretch" spacing={4}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FiSearch />
                  </InputLeftElement>
                  <Input
                    placeholder="Buscar..."
                    onChange={(e) => onSearch?.(e.target.value)}
                  />
                </InputGroup>
  
                <Divider />
  
                <VStack align="stretch" spacing={3} color={muted}>
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
                >
                  Carrito
                  {cartCount > 0 && <Badge borderRadius="full">{cartCount}</Badge>}
                </Button>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    );
  }
  