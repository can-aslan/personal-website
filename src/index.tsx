import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider } from '@mantine/core';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './pages/Main';
import '@mantine/core/styles.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
