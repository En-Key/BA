import { ThemeContext } from 'features/context/i18n';
import { useContext, useState } from 'react';
import { GoSun } from 'react-icons/go';
import { IoMoonSharp } from 'react-icons/io5';

import s from './darkModeButton.module.css'; // Путь к вашему файлу стилей

export const DarkModeButton = () => {
  const [checked, setChecked] = useState<boolean | undefined>();

  const Data = useContext(ThemeContext);
  if (!Data) return null;
  const { theme, setTheme } = Data;

  // if (theme === 'light') {setChecked(true)}
  // else {setChecked(false)}

  const handleLightThemeClick = () => {
    if (theme === 'light') {
      setTheme('dark');
      setChecked(true);
    } else {
      setTheme('light');
      setChecked(false);
    }
    // setTheme(theme === 'light' ? 'dark' : 'light')
  };

  return <div>
    <label className={s.darkModeButton}>
            <input className={s.input} type="checkbox" checked={checked} />
              <GoSun className={s.sun} onClick={handleLightThemeClick}/>
              <IoMoonSharp className={s.moon} onClick={handleLightThemeClick}/>
            <span className={s.toggle}></span>
          </label>
  </div>;
};
