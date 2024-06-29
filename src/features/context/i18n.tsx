import { ReactNode, createContext, useEffect, useState } from 'react';
import { useLocalStorage } from 'hooks/useLocalStorage';
import { LANGUAGES } from 'shared/types/i18n';

// export type ThemeContextParams = {
//   language: THEMES;
//   lacales: (typeof i18nKeys)[keyof typeof i18nKeys];
//   setLanguage: (val: LANGUAGES) => void;
// };

const isDarkTheme = window?.matchMedia('(prefers-color-scheme: dark)').matches;
const defaultTheme = isDarkTheme ? 'dark' : 'light';
console.log('defaultTheme', defaultTheme);

export type ThemeName = 'light' | 'dark';

export const ThemeContext = createContext<{
  theme: ThemeName;
  setTheme: (val: ThemeName) => void;
} | null>(null);

// правильное было
// export const ThemeContext = createContext<any>({ theme: 'light' });

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  // const [theme, setTheme] = useState('light');
  // const [theme, setTheme] = useLocalStorage('theme','light');
  const [theme, setTheme] = useLocalStorage('theme', defaultTheme);

  // useEffect(() => {document.documentElement.setAttribute('data-theme', theme)}, [theme]);
  // На учебе было так:
  // useEffect(() => {document.body.dataset.theme = theme}, [theme]);

  useEffect(() => {
    if (theme === 'dark') document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [theme]);

  return <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>;
};
