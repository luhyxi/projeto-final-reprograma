import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { Header } from './Header';
import { Footer } from './Footer';
import styles from '../style/components/App.module.css';
import { ThemeProvider } from '../context/ThemeContext';

export const App = () => (
  <div className={styles.appContainer}>
    <ThemeProvider>
      <BrowserRouter>
        <Header />
        <Router />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  </div>
);
