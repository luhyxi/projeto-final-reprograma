import { HashLink } from 'react-router-hash-link';
import { Title } from '../Title';
import styles from '../../style/components/pages/Articles.module.css';

export const Articles = () => (
  <main className={styles.pageContainer}>
    <Title text="Artigos" />
    <p>
      Espaço dedicado para artigos traduzidos sobre experiência trans e artigos produzidos por pessoas trans. Tradução de artigos sobre terapia hormonal para pessoas trans está em andamento e serão publicadas aqui. O andamento das traduções pode ser acompanhado
      {' '}
      <a href="https://docs.google.com/spreadsheets/d/1B_ZB3k83lhg1IFJIiohchkwog7I_N9EZ_dDHVKmI-TE/edit?usp=sharing" rel="noreferrer" target="_blank">aqui</a>
      . Para mais informações entre no
      {' '}
      <HashLink to="/comunidades#transbr-discord">discord do transbr</HashLink>
      {' '}
      ou entre em
      {' '}
      <HashLink to="/sobre#contato">contato</HashLink>
      .
    </p>
  </main>
);
