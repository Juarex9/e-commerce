import { useState, useEffect } from "react";
import { productsApi } from "../services/api";

export const useProducts = (category = null) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const response = category && category !== 'all'
          ? await productsApi.getByCategory(category)
          : await productsApi.getAll();

        if (alive) {
          setProducts(response.data);
        }
      } catch (e) {
        console.error("Error loading products:", e);
        if (alive) setError(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [category]);

  return { products, loading, error };
};

export const useProduct = (id) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!id) return;

    let alive = true;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await productsApi.getById(id);
        
        if (alive) {
          setProduct(response.data);
        }
      } catch (e) {
        console.error("Error loading product:", e);
        if (alive) setError(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();

    return () => {
      alive = false;
    };
  }, [id]);

  return { product, loading, error };
};
