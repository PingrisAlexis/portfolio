import React from 'react'
import styles  from './Navbar.module.scss'
import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'
import { LanguageSwitch } from '../index'
import coding from '../../assets/utils/coding.svg'
import hamburger from '../../assets/utils/hamburger.svg'
import close from '../../assets/utils/close.svg'

const Navbar = () => {

  const [showNavbar, setShowNavbar] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 750;

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
            {showNavbar ? <img src={close} className={`${styles.close_icon} ${global.square} ${global.hithere}`} onClick={handleShowNavbar} alt={t('header.alt.close_icon')}/> 
            : <img src={hamburger} className={`${styles.open_icon} ${global.square} ${global.hithere}`} onClick={handleShowNavbar} alt={t('header.alt.menu_icon')}/>}
          </div>
          <ul
            className={styles.navbar}
            style={{
              display:
                showNavbar || (!showNavbar && width > breakpoint) ? 'flex' : 'none'
            }}>
          <li>
            <a href="#skills" className={`${styles.nav_link} ${styles.tag_effect}`}>
              {t('header.skills')}&nbsp;
            </a>                    
          </li>
          <li>
            <a href="#projects" className={`${styles.nav_link} ${styles.tag_effect}`}>
              {t('header.projects')}&nbsp;
            </a>
          </li>
          <li>
            <a href="#contact" className={`${styles.nav_link} ${styles.tag_effect}`}>
              {t('header.contact')}&nbsp;
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

export default Navbar