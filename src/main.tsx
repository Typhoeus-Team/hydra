import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom';
import './index.css';
import { Home, Quiz, Root, StartQuiz } from './routes';
import { ChakraProvider } from '@chakra-ui/react';
import { QuizResults } from './routes/QuizResults';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { path: '', element: <Home /> },
      { path: 'start-quiz', element: <StartQuiz /> },
      {
        path: 'quiz',
        element: <Quiz />,
        loader: () => {
          const { quiz } = store.getState();
          if (quiz.status === 'idle') {
            return redirect('/start-quiz');
          } else if (quiz.status === 'finished') {
            return redirect('/quiz-results');
          }

          return null;
        },
      },
      {
        path: 'quiz-results',
        element: <QuizResults />,
        loader: () => {
          const { quiz } = store.getState();
          if (quiz.status === 'idle') {
            return redirect('/start-quiz');
          } else if (quiz.status === 'running') {
            return redirect('/quiz');
          }

          return null;
        },
      },
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
