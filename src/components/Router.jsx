import { Routes, Route } from 'react-router-dom';
import { About } from './pages/About';
import { Articles } from './pages/Articles';
import { Communities } from './pages/Communities';
import { Guides } from './pages/Guides';
import { Home } from './pages/Home';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/artigos" element={<Articles />} />
    <Route path="/guias" element={<Guides />} />
    <Route path="/comunidades" element={<Communities />} />
    <Route path="/sobre" element={<About />} />
  </Routes>
);
