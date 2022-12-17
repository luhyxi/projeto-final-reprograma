import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ImBrightnessContrast as ThemeIcon } from 'react-icons/im';
import { IoMdTransgender as LogoIcon } from 'react-icons/io';
import styles from '../style/components/Header.module.css';

import { themes, ThemeContext } from '../context/ThemeContext';

export const Header = () => {
  const { setTheme } = useContext(ThemeContext);

  const [menuOpen, setMenuOpen] = useState(false);

  const hamburgerButtonClasses = `${styles.hamburgerButton} ${menuOpen ? styles.hamburgerButtonOpen : ''}`;

  const menuContainerClasses = `${styles.menuContainer} ${menuOpen ? styles.menuContainerOpen : ''}`;

  const handleHamburgerButtonClick = () => {
    setMenuOpen((isOpen) => !isOpen);
  };

  const handleThemeToggle = () => {
    setTheme((currentTheme) => ((currentTheme === themes.Dark) ? themes.Light : themes.Dark));
  };

  return (
    <header>
      <div className={styles.headerTopContainer}>
        <Link to="/" className={styles.link}>
          <LogoIcon className={styles.logo} />
          <h1 className={styles.title}>
            Guia
            <br />
            trans br
          </h1>
        </Link>
        <div className={styles.menuDesktopContainer}>
          <Menu />
        </div>
        <button type="button" className={styles.toggleThemeButton} onClick={handleThemeToggle}>
          <ThemeIcon className={styles.themeIcon} />
        </button>
        <button type="button" className={hamburgerButtonClasses} onClick={handleHamburgerButtonClick}>
          <span />
        </button>
      </div>
      <div className={menuContainerClasses}>
        <Menu />
      </div>
    </header>
  );
};

const menuItems = [
  {
    name: 'Artigos',
    path: '/artigos',
  },
  {
    name: 'Guias',
    path: '/guias',
  },
  {
    name: 'Comunidades',
    path: '/comunidades',
  },
  {
    name: 'Sobre',
    path: '/sobre',
  },
];

const Menu = () => (
  <nav className={styles.menu}>
    {menuItems.map(({ name, path }) => (
      <Link to={path} key={name} className={styles.menuLink}>{name}</Link>
    ))}
  </nav>
);
