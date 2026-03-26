import {
  Box,
  Heading,
  VStack,
  Flex,
  Text,
  HStack,
  IconButton,
  Divider,
  Image,
  Button,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { keyframes } from "@emotion/react";
import { MinusIcon, AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { FiShoppingBag, FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const float = keyframes`
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
`;

const CartItem = ({ item, index, onRemove, onAdd, onDelete }) => {
  const cardBg = useColorModeValue("white", "#1a1a1a");
  const borderColor = useColorModeValue("gray.100", "whiteAlpha.100");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const mutedColor = useColorModeValue("gray.500", "gray.400");

  return (
    <Flex
      p={5}
      bg={cardBg}
      borderRadius="2xl"
      borderWidth="1px"
      borderColor={borderColor}
      direction={{ base: "column", sm: "row" }}
      align={{ base: "stretch", sm: "center" }}
      gap={4}
      animation={`${fadeIn} 0.4s ease-out`}
      animationDelay={`${index * 0.1}s`}
      animationFillMode="backwards"
      transition="all 0.2s ease"
      _hover={{
        boxShadow: useColorModeValue(
          "0 8px 30px rgba(0,0,0,0.08)",
          "0 8px 30px rgba(0,0,0,0.4)"
        ),
        borderColor: "brand.400",
      }}
    >
      <Image
        src={item.thumbnail || item.image}
        alt={item.title}
        boxSize={{ base: "100%", sm: "120px" }}
        h="120px"
        objectFit="cover"
        borderRadius="xl"
        bg={useColorModeValue("gray.50", "whiteAlpha.50")}
      />

      <Flex flex={1} direction="column" gap={2}>
        <Text
          fontWeight="600"
          fontSize="lg"
          color={textColor}
          noOfLines={1}
        >
          {item.title}
        </Text>
        <Text fontSize="sm" color={mutedColor} noOfLines={1}>
          {item.category}
        </Text>
        <Text fontWeight="700" color="brand.500" fontSize="xl">
          ${Number(item.price).toFixed(2)}
        </Text>
      </Flex>

      <VStack align="stretch" justify="space-between" minW="140px">
        <HStack justify="center" spacing={0} bg={useColorModeValue("gray.50", "whiteAlpha.50")} borderRadius="xl" p={1}>
          <IconButton
            aria-label="Decrease"
            icon={<MinusIcon />}
            size="sm"
            variant="ghost"
            borderRadius="lg"
            onClick={() => onRemove(item)}
            isDisabled={item.cantidad <= 1}
            _hover={{ bg: useColorModeValue("gray.200", "whiteAlpha.200") }}
          />
          <Text fontWeight="600" minW="40px" textAlign="center">
            {item.cantidad}
          </Text>
          <IconButton
            aria-label="Increase"
            icon={<AddIcon />}
            size="sm"
            variant="ghost"
            borderRadius="lg"
            onClick={() => onAdd(item)}
            isDisabled={item.cantidad >= (item.stock || 99)}
            _hover={{ bg: useColorModeValue("gray.200", "whiteAlpha.200") }}
          />
        </HStack>

        <Button
          size="sm"
          variant="ghost"
          colorScheme="red"
          leftIcon={<DeleteIcon />}
          onClick={() => onDelete(item.id)}
          borderRadius="lg"
        >
          Eliminar
        </Button>
      </VStack>

      <Box textAlign="right" minW="100px">
        <Text fontSize="xs" color={mutedColor} mb={1}>
          Subtotal
        </Text>
        <Text fontWeight="700" fontSize="lg" color={textColor}>
          ${(Number(item.price) * item.cantidad).toFixed(2)}
        </Text>
      </Box>
    </Flex>
  );
};

const EmptyCart = () => {
  const mutedColor = useColorModeValue("gray.400", "gray.500");
  const buttonBg = useColorModeValue("gray.900", "green.400");
  const buttonHover = useColorModeValue("gray.800", "green.300");
  const buttonText = useColorModeValue("white", "gray.900");

  return (
    <VStack
      spacing={6}
      py={16}
      animation={`${fadeIn} 0.5s ease-out`}
    >
      <Box
        p={8}
        borderRadius="full"
        bg={useColorModeValue("gray.50", "whiteAlpha.50")}
        animation={`${float} 3s ease-in-out infinite`}
      >
        <FiShoppingBag size={64} color={mutedColor} />
      </Box>
      <VStack spacing={2}>
        <Heading size="lg" color={useColorModeValue("gray.700", "gray.200")}>
          Tu carrito está vacío
        </Heading>
        <Text color={mutedColor} textAlign="center" maxW="300px">
          Descubrí nuestros productos y agregalos al carrito para comenzar tu compra
        </Text>
      </VStack>
      <Button
        as="a"
        href="/"
        size="lg"
        bg={buttonBg}
        color={buttonText}
        rightIcon={<FiArrowRight />}
        _hover={{
          bg: buttonHover,
          transform: "translateY(-2px)",
          boxShadow: "0 8px 24px rgba(0,0,0,0.3)",
        }}
        transition="all 0.2s ease"
      >
        Ver Productos
      </Button>
    </VStack>
  );
};

const Cart = () => {
  const navigate = useNavigate();
  const {
    cart: cartState,
    deleteProductFromCart,
    addToCart,
    removeFromCart,
    getTotalPrice,
  } = useContext(CartContext);

  const total = getTotalPrice();
  const cardBg = useColorModeValue("white", "#1a1a1a");
  const borderColor = useColorModeValue("gray.100", "whiteAlpha.100");
  const textColor = useColorModeValue("gray.800", "gray.100");
  const mutedColor = useColorModeValue("gray.500", "gray.400");
  const buttonBg = useColorModeValue("gray.900", "green.400");
  const buttonHover = useColorModeValue("gray.800", "green.300");
  const buttonText = useColorModeValue("white", "gray.900");
  const priceColor = useColorModeValue("gray.900", "green.400");

  return (
    <Container maxW="4xl" py={8}>
      <VStack spacing={8} align="stretch">
        {/* Header */}
        <Flex
          justify="space-between"
          align="center"
          animation={`${fadeIn} 0.4s ease-out`}
        >
          <Box>
            <Heading
              size="xl"
              fontFamily="heading"
              letterSpacing="-0.02em"
              color={textColor}
            >
              Carrito
            </Heading>
            <Text color={mutedColor} mt={1}>
              {cartState.length} producto{cartState.length !== 1 ? "s" : ""} en tu carrito
            </Text>
          </Box>
        </Flex>

        {cartState.length === 0 ? (
          <EmptyCart />
        ) : (
          <>
            {/* Lista de productos */}
            <VStack spacing={4} align="stretch">
              {cartState.map((item, index) => (
                <CartItem
                  key={item.id}
                  item={item}
                  index={index}
                  onRemove={removeFromCart}
                  onAdd={addToCart}
                  onDelete={deleteProductFromCart}
                />
              ))}
            </VStack>

            {/* Resumen y Checkout */}
            <Box
              p={6}
              bg={cardBg}
              borderRadius="2xl"
              borderWidth="1px"
              borderColor={borderColor}
              animation={`${fadeIn} 0.5s ease-out`}
              animationDelay={`${cartState.length * 0.1}s`}
              animationFillMode="backwards"
            >
              <Flex justify="space-between" align="center" mb={4}>
                <Text fontSize="lg" color={mutedColor}>
                  Total del pedido
                </Text>
                <HStack spacing={2}>
                  <Text fontSize="xs" color={mutedColor}>
                    Impuestos incluidos
                  </Text>
                </HStack>
              </Flex>

              <Text
                fontSize="4xl"
                fontWeight="700"
                fontFamily="heading"
                color={priceColor}
                mb={6}
              >
                ${total.toFixed(2)}
              </Text>

              <Button
                w="full"
                size="lg"
                bg={buttonBg}
                color={buttonText}
                borderRadius="xl"
                rightIcon={<FiArrowRight />}
                onClick={() => navigate("/checkout")}
                _hover={{
                  bg: buttonHover,
                  transform: "translateY(-2px)",
                  boxShadow: "0 12px 32px rgba(0,0,0,0.3)",
                }}
                transition="all 0.25s ease"
                _active={{
                  transform: "translateY(0)",
                }}
              >
                Proceder al Checkout
              </Button>

              <Button
                w="full"
                variant="ghost"
                mt={3}
                onClick={() => navigate("/")}
                _hover={{
                  bg: useColorModeValue("gray.50", "whiteAlpha.50"),
                }}
              >
                Continuar Comprando
              </Button>
            </Box>
          </>
        )}
      </VStack>
    </Container>
  );
};

export default Cart;
