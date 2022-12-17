import { Title } from '../Title';
import styles from '../../style/components/pages/Home.module.css';

export const Home = () => (
  <main className={styles.pageContainer}>
    <Title text="O projeto" />
    <p>O Guia trans br é um agregador de conteúdos originais e externos com o intuito de facilitar o acesso de informações para a comunidade trans, além de servir como um hub para projetos de tradução e conteúdos produzidos pelas comunidades do reddit e discord. </p>
    <Title text="Projetos do transbr" Heading="h3" />
    <p>A moderação e comunidade dos subreddit e discord do transbr está trabalhando em projetos de tradução de artigos com informações úteis para pessoas trans, além de dispor de aulas de treino de voz gratuitas toda semana feitas pela comunidade para a comunidade.</p>
  </main>
);
