import React from 'react'
import styles  from './Navbar.module.scss'
import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher, ThemeSwitcher } from '../index'
import coding from '../../assets/utils/coding.svg'
import hamburger from '../../assets/utils/hamburger.svg'
import close from '../../assets/utils/close.svg'
import {ReactSVG} from 'react-svg'

const Navbar = () => {

  const [showNavbar, setShowNavbar] = React.useState(false);
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 900;

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
          <ReactSVG src={coding} className={styles.logo} alt={t('header.alt.logo')}/>
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
          <li className={`${global.hithere}`}>
            <a href="#skills" className={`${global.square}`} onClick={
                showNavbar ? handleShowNavbar : undefined
            }>
              {t('header.skills')}
            </a>                    
          </li>
          <li  className={`${global.hithere}`}>
            <a href="#projects" className={`${global.square}`} onClick={
                showNavbar ? handleShowNavbar : undefined
            }>
              {t('header.projects')}
            </a>
          </li>
          <li  className={`${global.hithere}`}>
            <a href="#contact" className={`${global.square}`} onClick={
                showNavbar ? handleShowNavbar : undefined
            }>
              {t('header.contact')}
            </a>
          </li>
          <li>
            <LanguageSwitcher/>
          </li>
          <li>
            <ThemeSwitcher />
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar