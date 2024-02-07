import { HashRouter, Routes, Route} from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import Home from './components/Home';
import Starred from './components/Starred';
import Show from './pages/Show';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HashRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/starred" element={<Starred />} />
          </Route>
          <Route path="/show/:showId" element={<Show />}></Route>
        </Routes>
      </HashRouter>
    </QueryClientProvider>
  );
}

export default App;
