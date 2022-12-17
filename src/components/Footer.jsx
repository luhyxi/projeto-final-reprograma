import {
  FaRedditAlien as RedditIcon,
  FaDiscord as DiscordIcon,
  FaTwitter as TwitterIcon,
} from 'react-icons/fa';
import styles from '../style/components/Footer.module.css';

export const Footer = () => (
  <footer className={styles.footerContainer}>
    <span className={styles.copyrightText}>© Guia trans br</span>
    <div className={styles.icons}>
      <a href="https://www.reddit.com/r/transbr" target="_blank" rel="noreferrer" aria-label="Transbr Reddit"><RedditIcon className={styles.icon} /></a>
      <a href="https://discord.com/invite/AUTVEn6A2r" target="_blank" rel="noreferrer" aria-label="Transbr Discord"><DiscordIcon className={styles.icon} /></a>
      <a href="https://twitter.com/Guia_trans_br" target="_blank" rel="noreferrer" aria-label="Transbr Twitter"><TwitterIcon className={styles.icon} /></a>
    </div>
  </footer>
);
