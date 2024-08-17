import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Users } from './Users';

const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Users />
    </QueryClientProvider>
  );
}

export default App;
