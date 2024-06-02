import React, { useEffect } from 'react';
import styles  from './Navbar.module.scss'
import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher, ThemeSwitcher } from '../index'
import coding from '../../assets/utils/coding.svg'
import hamburger from '../../assets/utils/hamburger.svg'
import close from '../../assets/utils/close.svg'
import { ReactSVG } from 'react-svg'

const Navbar = () => {

  const breakpoint = 1100;
  const isDesktop = window.innerWidth > breakpoint;
  const [showNavbar, setShowNavbar] = React.useState(isDesktop);
  const [width, setWidth] = React.useState(window.innerWidth);
  
  const { t } = useTranslation();


  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setWidth(windowWidth);
      setShowNavbar(!showNavbar)
      if (windowWidth > breakpoint) {
        setShowNavbar(true)
      }
      else if (windowWidth <= breakpoint) {
        setShowNavbar(false)
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showNavbar]);

  const handleShowNavbar = () => {
    if (showNavbar) {
      document.querySelector('ul').classList.add(`${styles.navbar_disappear}`);
      setTimeout(() => {  
        setShowNavbar(false);
      }, 800);
      } else {
        setShowNavbar(!showNavbar);

      }
  };

  const handleLinkClick = () => {
    if (width <= breakpoint) {
      document.querySelector('ul').classList.add(`${styles.navbar_disappear}`);
        setTimeout(() => {  
          setShowNavbar(false);
        }, 800);
    }
  };
  return (
    <header className={styles.header}>  
      <a href="#about">
        <div className={`${styles.logo_container}`}>
          <ReactSVG src={coding} alt={t('header.alt.logo')}/>
       </div>   
      </a>
      <nav className={styles.banner}>
        
       <div className={styles.menu_icon}>  
          {showNavbar ? <ReactSVG src={close} className={`${styles.close_icon} ${global.square} ${global.hithere}`} onClick={() => handleShowNavbar()} alt={t('header.alt.close_icon')}/>
           : <ReactSVG src={hamburger} className={`${styles.open_icon} ${global.square} ${global.hithere}`} onClick={() => handleShowNavbar()} alt={t('header.alt.menu_icon')}/> 
           }
        </div>
        <ul className={showNavbar ? `${styles.navbar_appear} ${styles.navbar} ${global.square}`: `${styles.navbar_disappear} ${styles.navbar} ${global.square}`}
            style={{
              display:
              showNavbar ? 'flex' : 'none'
            }}
            >
          <li onClick={() => handleLinkClick()}>
            <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
            <a href="#skills">
              {t('header.skills')}
            </a>
          </li>
          <li onClick={() => handleLinkClick()}>
            <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
            <a href="#personnals-projects">
              {t('header.personnals-projects')} 
            </a>
          </li>
          <li onClick={() => handleLinkClick()}>
            <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
            <a href="#studies-projects">
              {t('header.studies-projects')} 
            </a>
          </li>
          <li  onClick={() => handleLinkClick()}>
            <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')} />
            <a href="#resume">
              {t('header.resume')}
            </a>
          </li>
          <li onClick={() => handleLinkClick()}> 
          <div>
            <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
            </div>
            <a href="#contact">
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