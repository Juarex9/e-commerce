import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from './layouts/MainLayout';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/index.jsx';
import { CartProvider } from './context/CartContext.jsx';

const App = () => {
    return (
        <ChakraProvider>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </ChakraProvider>
    );
};

export default App;
