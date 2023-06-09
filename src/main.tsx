import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import { Home, Root, StartQuiz } from './routes';
import { ChakraProvider } from '@chakra-ui/react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <Home /> },
      { path: 'start-quiz', element: <StartQuiz /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
