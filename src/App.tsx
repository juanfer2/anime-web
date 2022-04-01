import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Layout from '@/components/Layout';
import Navbar from '@/components/Navbar';
import theme from '@/styles/theme';
import RoutesConfig from './routes';
import './App.css';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <AnimatePresence>
        <ThemeProvider theme={theme}>
          <Layout>
            <Navbar />
            <div className="main">
              <RoutesConfig />
            </div>
          </Layout>
        </ThemeProvider>
      </AnimatePresence>
    </BrowserRouter>
  );
}

export default App;
