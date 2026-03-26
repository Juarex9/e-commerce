import { useParams } from "react-router";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useProduct } from "../hooks/useProducts";
import { Center, Spinner, Text } from "@chakra-ui/react";

const Item = () => {
    const { ProductId } = useParams();
    const { product, loading, error } = useProduct(ProductId);

    if (loading) {
        return (
            <Center minH="50vh">
                <Spinner size="xl" />
            </Center>
        );
    }

    if (error || !product) {
        return (
            <Center minH="50vh">
                <Text color="red.400">Producto no encontrado</Text>
            </Center>
        );
    }

    return <ItemDetailContainer product={product} />;
};

export default Item;
