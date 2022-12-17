import { Link } from 'react-router-dom';
import { Title } from '../Title';
import styles from '../../style/components/pages/About.module.css';

export const About = () => (
  <main className={styles.pageContainer}>
    <Title text="Sobre" />
    <p>
      Para uma descrição breve do projeto, visite a
      {' '}
      <Link to="/">página inicial</Link>
      .
    </p>
    <Title text="História" Heading="h3" />
    <p>Conforme as comunidades trans do reddit e discord foram formando projetos de guias e traduções, surgiu a necessidade de ter um espaço acessível para agregar esses conteúdos. No entanto, isso acabou não acontecendo. Foi tomada então a oportunidade do projeto final do reprograma para colocar essa ideia em andamento.</p>
    <Title text="Autores" Heading="h3" />
    <p>Por hora, o guia trans br consta apenas com uma autora (Lisa). No entanto, outras pessoas demonstraram interesse em participar após a finalização do curso do reprograma, seja com traduções, conteúdos ou tecnologias.</p>
    <Title text="Lisa" Heading="h4" />
    <p>
      {' '}
      Entidade transfeminina não-binária nascida em 1996 com estudo acadêmico na área de composição e realizando transição de carreira pra área de programação front-end. Lisa (também conhecida como Mazrine / Lyhr22) é Moderadora de algumas comunidades do reddit (
      <a href="https://www.reddit.com/r/transbr" target="_blank" rel="noreferrer">r/transbr</a>
      ,
      {' '}
      <a href="https://www.reddit.com/r/transth" target="_blank" rel="noreferrer">r/transth</a>
      ,
      {' '}
      <a href="https://www.reddit.com/r/arco_iris/" target="_blank" rel="noreferrer">r/arco_iris</a>
      ,
      {' '}
      <a href="https://www.reddit.com/r/transfemBR/" target="_blank" rel="noreferrer">r/transfemBR</a>
      ,
      {' '}
      <a href="https://www.reddit.com/r/naobinarie/" target="_blank" rel="noreferrer">r/naobinarie</a>
      ) e do servidor do
      {' '}
      <a href="https://discord.com/invite/AUTVEn6A2r" target="_blank" rel="noreferrer">discord r/transbr</a>
      . Somando quase 20 mil pessoas em todas as comunidades.
    </p>
    <Title text="Contato" Heading="h3" id="contato" />
    <p>
      Lisa pode ser contatada através do email
      {' '}
      <a href="mailto:lyhr.musi@gmail.com">lyhr.musi@gmail.com</a>
      , através do Reddit
      {' '}
      <a href="https://reddit.com/u/Lyhr22" target="_blank" rel="noreferrer">Lyhr22</a>
      {' '}
      ou através do discord Mazrine#6178.
    </p>
  </main>
);
