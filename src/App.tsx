import { BrowserRouter } from 'react-router-dom';
import Layout from '@components/Layout';
import Navbar from '@components/Navbar';
import theme from '@styles/theme';
import { ThemeProvider } from 'styled-components';
import RoutesConfig from './routes';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Navbar />
          <div className="main">
            <RoutesConfig />
          </div>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
