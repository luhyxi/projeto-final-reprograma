import {
  createContext, useLayoutEffect, useMemo, useState, useEffect,
} from 'react';

const THEME_STORAGE_KEY = 'transbr-theme';

export const themes = {
  Dark: 'dark',
  Light: 'light',
};

const themeVariables = {
  [themes.Dark]: {
    'background-color': '#333333',
    color: '#ffffff',
    'link-color': '#88A9FF',
    'link-hover-color': '#e58adb',
  },
  [themes.Light]: {
    'background-color': '#ffffff',
    color: '#333333',
    'link-color': '#88A9FF',
    'link-hover-color': '#e58adb',
  },
};

export const ThemeContext = createContext(null);

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState(themes.Dark);

  // Pega preferencia de tema de sistema operacional ou de local storage se tema já foi selecionado
  useEffect(() => {
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const prefersDarkTheme = matchMedia && matchMedia('(prefers-color-scheme: dark)').matches;
    const prefersLightTheme = matchMedia && matchMedia('(prefers-color-scheme: light)').matches;

    if (storedTheme) {
      setCurrentTheme(storedTheme);
    } else if (prefersLightTheme) {
      setCurrentTheme(themes.Light);
    } else if (prefersDarkTheme) {
      setCurrentTheme(themes.Dark);
    }
  }, []);

  // Adiciona variáveis de tema como css custom properties
  useLayoutEffect(() => {
    const root = document.documentElement;

    Object.entries(themeVariables[currentTheme]).forEach(([property, value]) => {
      root.style.setProperty(`--theme-${property}`, value);
    });
  }, [currentTheme]);

  const setTheme = (newTheme) => {
    let themeName = newTheme;
    if (typeof newTheme === 'function') {
      themeName = newTheme(currentTheme);
    }

    if (!Object.hasOwn(themeVariables, themeName)) {
      console.error(`Invalid theme - '${themeName}'!`);
      return;
    }

    localStorage.setItem(THEME_STORAGE_KEY, themeName);
    setCurrentTheme(newTheme);
  };

  const themeContextValue = useMemo(() => ({
    theme: currentTheme,
    setTheme,
  }));

  return (
    <ThemeContext.Provider value={themeContextValue}>
      {children}
    </ThemeContext.Provider>
  );
};
