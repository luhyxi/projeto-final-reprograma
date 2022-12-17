import { Title } from '../Title';
import styles from '../../style/components/pages/Communities.module.css';

export const Communities = () => (
  <main className={styles.pageContainer}>
    <Title text="Comunidades trans e espaços seguros" />
    <p> </p>
    <Title text="Servidores do discord" Heading="h3" id="transbr-discord" />
    <ul>
      <li><a href="https://discord.com/invite/AUTVEn6A2r" target="_blank" rel="noreferrer">Discord oficial do subreddit /r/transbr</a></li>
    </ul>
    <Title text="Subreddits" Heading="h3" />
    <ul>
      <li><a href="https://www.reddit.com/r/transbr" target="_blank" rel="noreferrer">Subreddit para a comunidade trans brasileira</a></li>
      <li><a href="https://www.reddit.com/r/transth" target="_blank" rel="noreferrer">Subreddit brasileiro para discussão de terapia hormonal de pessoas trans</a></li>
      <li><a href="https://www.reddit.com/r/arco_iris" target="_blank" rel="noreferrer">Subreddit para comunidade LGBTQ+ em português</a></li>
      <li><a href="https://www.reddit.com/r/transmascbr" target="_blank" rel="noreferrer">Subreddit brasileiro para tudo relacionado as vivências transmasculinas</a></li>
      <li><a href="https://www.reddit.com/r/transfembr" target="_blank" rel="noreferrer">Subreddit brasileiro para tudo relacionado as vivências transfemininas</a></li>
      <li><a href="https://www.reddit.com/r/naobinarie" target="_blank" rel="noreferrer">Subreddit brasileiro para tudo relacionado a não-binariedade</a></li>
    </ul>
    <Title text="Associações/ONGs" Heading="h3" />
    <ul>
      <li><a href="https://antrabrasil.org" target="_blank" rel="noreferrer">ANTRA - Associação Nacional de Travestis e Transexuais</a></li>
    </ul>
  </main>
);
