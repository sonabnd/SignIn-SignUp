import './App.scss';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import router from './router/router.tsx';
import { RouterProvider } from 'react-router-dom';
import useGlobalStyles from './assets/styles/style.ts';

const queryClient = new QueryClient();

function App() {
  useGlobalStyles();
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <RouterProvider router={router} />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

export default App;
