import { useState, useContext } from "react";
import {
  Box,
  Button,
  Container,
  Input,
  VStack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  useToast,
  Stack,
  Divider,
  HStack,
  Image,
  Center,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { CartContext } from "../context/CartContext";
import { ordersApi } from "../services/api";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [formState, setFormState] = useState({
    buyerName: "",
    buyerEmail: "",
    buyerPhone: "",
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const toast = useToast();
  const navigate = useNavigate();

  const total = getTotalPrice();
  const buttonBg = useColorModeValue("gray.900", "green.400");
  const buttonHover = useColorModeValue("gray.800", "green.300");
  const buttonText = useColorModeValue("white", "gray.900");
  const priceColor = useColorModeValue("gray.900", "green.400");
  const cardBg = useColorModeValue("white", "#1a1a1a");

  const validateForm = () => {
    const newErrors = {};
    
    if (!formState.buyerName.trim()) {
      newErrors.buyerName = "El nombre es requerido";
    }
    
    if (!formState.buyerEmail.trim()) {
      newErrors.buyerEmail = "El email es requerido";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.buyerEmail)) {
      newErrors.buyerEmail = "Email inválido";
    }
    
    if (!formState.buyerPhone.trim()) {
      newErrors.buyerPhone = "El teléfono es requerido";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    if (cart.length === 0) {
      toast({
        title: "Carrito vacío",
        description: "Agrega productos antes de comprar",
        status: "warning",
        duration: 3000,
      });
      return;
    }

    setLoading(true);

    try {
      const items = cart.map((item) => ({
        productId: item.id,
        quantity: item.cantidad,
        price: Number(item.price),
      }));

      const response = await ordersApi.create({
        buyerName: formState.buyerName,
        buyerEmail: formState.buyerEmail,
        buyerPhone: formState.buyerPhone,
        items,
      });

      clearCart();

      toast({
        title: "Compra finalizada",
        description: `Orden ID: ${response.data.id}`,
        status: "success",
        duration: 5000,
        isClosable: true,
      });

      navigate("/");
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "No se pudo completar la compra",
        status: "error",
        duration: 3000,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (field) => (e) => {
    setFormState({ ...formState, [field]: e.target.value });
    if (errors[field]) {
      setErrors({ ...errors, [field]: null });
    }
  };

  if (cart.length === 0) {
    return (
      <Container maxW="lg" py={16}>
        <Center>
          <VStack spacing={4}>
            <Heading size="lg">Tu carrito está vacío</Heading>
            <Text>Agrega productos para continuar</Text>
            <Button 
              onClick={() => navigate("/")} 
              bg={buttonBg} 
              color={buttonText}
              _hover={{ bg: buttonHover }}
            >
              Ver productos
            </Button>
          </VStack>
        </Center>
      </Container>
    );
  }

  return (
    <Container maxW="lg" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading size="lg">Finalizar Compra</Heading>

        <Stack direction={{ base: "column", md: "row" }} spacing={8}>
          <Box flex={1}>
            <form onSubmit={handleSubmit}>
              <VStack spacing={4}>
                <FormControl isInvalid={!!errors.buyerName}>
                  <FormLabel>Nombre completo</FormLabel>
                  <Input
                    value={formState.buyerName}
                    onChange={handleChange("buyerName")}
                    placeholder="Juan Pérez"
                  />
                  {errors.buyerName && (
                    <Text color="red.500" fontSize="sm">{errors.buyerName}</Text>
                  )}
                </FormControl>

                <FormControl isInvalid={!!errors.buyerEmail}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    value={formState.buyerEmail}
                    onChange={handleChange("buyerEmail")}
                    placeholder="juan@email.com"
                  />
                  {errors.buyerEmail && (
                    <Text color="red.500" fontSize="sm">{errors.buyerEmail}</Text>
                  )}
                </FormControl>

                <FormControl isInvalid={!!errors.buyerPhone}>
                  <FormLabel>Teléfono</FormLabel>
                  <Input
                    type="tel"
                    value={formState.buyerPhone}
                    onChange={handleChange("buyerPhone")}
                    placeholder="+54 11 1234 5678"
                  />
                  {errors.buyerPhone && (
                    <Text color="red.500" fontSize="sm">{errors.buyerPhone}</Text>
                  )}
                </FormControl>

                <Button
                  type="submit"
                  bg={buttonBg}
                  color={buttonText}
                  size="lg"
                  w="full"
                  isLoading={loading}
                  loadingText="Procesando..."
                  _hover={{ bg: buttonHover }}
                >
                  Completar Compra
                </Button>
              </VStack>
            </form>
          </Box>

          <Box w={{ base: "full", md: "350px" }}>
            <Box
              p={6}
              borderWidth="1px"
              borderRadius="xl"
              bg={cardBg}
            >
              <Heading size="md" mb={4}>Resumen del pedido</Heading>
              
              <VStack spacing={3} align="stretch" mb={4}>
                {cart.map((item) => (
                  <HStack key={item.id} justify="space-between">
                    <HStack>
                      <Image
                        src={item.thumbnail || item.image}
                        boxSize="40px"
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Box>
                        <Text fontSize="sm" noOfLines={1}>{item.title}</Text>
                        <Text fontSize="xs" color="gray.500">x{item.cantidad}</Text>
                      </Box>
                    </HStack>
                    <Text fontWeight="medium">${(item.price * item.cantidad).toFixed(2)}</Text>
                  </HStack>
                ))}
              </VStack>

              <Divider mb={4} />

              <HStack justify="space-between">
                <Text fontWeight="bold" fontSize="lg">Total</Text>
                <Text fontWeight="bold" fontSize="lg" color={priceColor}>
                  ${total.toFixed(2)}
                </Text>
              </HStack>
            </Box>
          </Box>
        </Stack>
      </VStack>
    </Container>
  );
};

export default Checkout;
