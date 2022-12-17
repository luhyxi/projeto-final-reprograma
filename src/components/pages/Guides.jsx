import { Title } from '../Title';
import styles from '../../style/components/pages/Guides.module.css';

export const Guides = () => (
  <main className={styles.pageContainer}>
    <Title text="Guias" />
    <p>Aqui você pode encontrar guias relacionados a experiência trans. Guias próprios estão em construção.</p>
    <Title text="Outros guias" Heading="h3" />
    <ul>
      <li><a href="https://disforiadegenero.com.br" target="_blank" rel="noreferrer">o guia da disforia de gênero</a></li>
      <li><a href="https://antrabrasil.org/cartilhas/" target="_blank" rel="noreferrer">Cartilhas e manuais da ANTRA</a></li>
    </ul>
  </main>
);
