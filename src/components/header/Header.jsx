import React from 'react'
import styles  from './Header.module.scss'
import { useTranslation } from 'react-i18next'
import {LanguageSwitch} from '../index'
import coding from '../../assets/coding.svg'
import hamburger from '../../assets/hamburger.svg'
import close from '../../assets/close.svg'

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
            <img src={coding} className={styles.logo} alt={t('header.alt.logo')}/>
          <div className={styles.menu_icon}>  
            {showNavbar ? <img src={close} className={styles.close_icon} onClick={handleShowNavbar} alt={t('header.alt.close_icon')}/> 
            : <img src={hamburger}  className={styles.open_icon} onClick={handleShowNavbar} alt={t('header.alt.menu_icon')}/>}
          </div>
          <ul
            className={styles.navbar}
            style={{
              display:
                showNavbar || (!showNavbar && width > breakpoint) ? 'flex' : 'none'
            }}>
          <li>
            <a href="#skills" className={styles.nav_link}>
              {t('header.skills')}
            </a>                    
          </li>
          <li>
            <a href="#projects" className={styles.nav_link}>
              {t('header.projects')}
            </a>
          </li>
          <li>
            <a href="#contact" className={styles.nav_link}>
              {t('header.contact')}
            </a>
          </li>
          <li>
            <LanguageSwitch/>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header