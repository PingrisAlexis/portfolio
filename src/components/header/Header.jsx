import React from 'react'
import styles  from './Header.module.scss'
import { useTranslation } from 'react-i18next'
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'
import {LanguageSwitch} from '../index'
import coding from '../../assets/coding.svg';
const Header = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 600;

  const { t } = useTranslation();

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.banner}>
          <a href='#about'>
            <img src={coding} className={styles.logo}/>
          </a>                    
          <div>  
            {showNavbar ? <img src={close} className={styles.close_icon} onClick={handleShowNavbar}/> 
            : <img src={hamburger}  className={styles.menu_icon} onClick={handleShowNavbar}/>}
          </div>
          <ul
            className={styles.navbar}
            style={{
              display:
                showNavbar || (!showNavbar && width > breakpoint) ? 'flex' : 'none'
            }}>
          <li>
            <a href='#skills' aria-current='skills' exact className={styles.nav_link} activeClassName={styles.active_nav_link}>
            {t('header.skills')}
            </a>                    
          </li>
          <li>
            <a href="#projects" aria-current="projects" className={styles.nav_link} activeClassName={styles.active_nav_link}>
            {t('header.projects')}
            </a>
          </li>
          <li>
            <a href="#contact" aria-current="contact" className={styles.nav_link} activeClassName={styles.active_nav_link}>
            {t('header.contact')}
            </a>
          </li>
          <li >
            <LanguageSwitch/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;

