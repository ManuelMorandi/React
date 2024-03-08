import './App.css';
import ProductList from './components/ProductList';

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ProductList />
    </QueryClientProvider>
  );
}

export default App;
