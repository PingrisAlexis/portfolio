import React, { createContext, useContext, useState, useEffect } from 'react';
import styles from './Theme.module.scss'

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); 

  useEffect(() => {
    theme === 'light' ?  document.body.className = styles.light : document.body.className = styles.dark
  },[theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider