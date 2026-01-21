import ItemListContainer from "../components/ItemListContainer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/config/firebase";
import { Box, Heading, Text, Center, Spinner } from "@chakra-ui/react";

const Category = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { categoryId } = useParams();

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const productsQuery = query(
          collection(db, "products"),
          where("category", "==", categoryId)
        );

        const snapshot = await getDocs(productsQuery);

        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        if (alive) setProducts(data);
      } catch (e) {
        console.error("Category load error:", e);
        if (alive) setError(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [categoryId]);

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
        <Text color="red.400">{String(error?.message ?? error)}</Text>
      </Center>
    );
  }

  return (
    <Box>
      <Box maxW="6xl" mx="auto" px={{ base: 4, md: 6 }} pt={8} pb={2}>
        <Text opacity={0.7} mt={1}>
          {products.length} producto{products.length === 1 ? "" : "s"}
        </Text>
      </Box>

      {products.length === 0 ? (
        <Box maxW="6xl" mx="auto" px={{ base: 4, md: 6 }} py={10}>
          <Text>No hay productos en esta categoría.</Text>
        </Box>
      ) : (
        <ItemListContainer products={products} title="Productos" />
      )}
    </Box>
  );
};

export default Category;
