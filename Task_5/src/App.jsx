// src/App.jsx
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Layout';
import Home from './Routes/Home';
import Products from './Routes/Products';
import Cart from './Routes/Cart';
import ProductDetails from './Routes/ProductDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, 
    children: [
      {
        index: true,
        element: <Home />, 
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'products/:id',
        element: <ProductDetails />,
      },
      {
        path: 'cart',
        element: <Cart />, 
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
