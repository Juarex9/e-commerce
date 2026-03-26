import ItemListContainer from "../components/ItemListContainer";
import { useProducts } from "../hooks/useProducts";
import { Box, Text, Center, Spinner, Heading } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const categoryNames = {
  fragrances: "Perfumes",
  tees: "Remeras",
  shoes: "Zapatillas",
};

const Category = () => {
  const { categoryId } = useParams();
  const { products, loading, error } = useProducts(categoryId);

  const categoryTitle = categoryNames[categoryId] || categoryId;

  if (loading) {
    return (
      <Center minH="50vh">
        <Spinner size="xl" />
      </Center>
    );
  }

  if (error) {
    return (
      <Center minH="50vh">
        <Text color="red.400">{error.message}</Text>
      </Center>
    );
  }

  return (
    <Box>
      <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} pt={8} pb={2}>
        <Heading
          size="lg"
          fontFamily="heading"
          letterSpacing="-0.02em"
          mb={2}
        >
          {categoryTitle}
        </Heading>
        <Text opacity={0.6}>
          {products.length} producto{products.length === 1 ? "" : "s"}
        </Text>
      </Box>

      {products.length === 0 ? (
        <Box maxW="7xl" mx="auto" px={{ base: 4, md: 8 }} py={10}>
          <Text>No hay productos en esta categoría.</Text>
        </Box>
      ) : (
        <ItemListContainer products={products} title="" />
      )}
    </Box>
  );
};

export default Category;
