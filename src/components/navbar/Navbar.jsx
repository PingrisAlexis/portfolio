import React from 'react'
import { useState } from "react";
import styles  from './Navbar.module.scss'
import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'
import { LanguageSwitcher, ThemeSwitcher } from '../index'
import coding from '../../assets/utils/coding.svg'
import hamburger from '../../assets/utils/hamburger.svg'
import close from '../../assets/utils/close.svg'
import { ReactSVG } from 'react-svg'

const Navbar = () => {

  const [showNavbar, setShowNavbar] = React.useState(false);

  const { t } = useTranslation();

  const handleShowNavbar = () => {
    if (showNavbar) {
      document.querySelector('ul').classList.add(`${styles.navbar_disappear}`);
      setTimeout(() => {  
        setShowNavbar(!showNavbar);
      }, 800);
    }
    else {
      setShowNavbar(!showNavbar);
    }
  };

  return (
    <header className={styles.header}>     
      <nav className={styles.banner}>
        <div className={styles.logo_container}>
         <ReactSVG src={coding} alt={t('header.alt.logo')}/>
         <p>PINGRIS Alexis</p>
       </div>
       <div className={styles.menu_icon}>  
          {showNavbar ? <ReactSVG src={close} className={`${styles.close_icon} ${global.square} ${global.hithere}`} onClick={handleShowNavbar} alt={t('header.alt.close_icon')}/>
           : <ReactSVG src={hamburger} className={`${styles.open_icon} ${global.square} ${global.hithere}`} onClick={handleShowNavbar} alt={t('header.alt.menu_icon')}/> 
           }
        </div>
        <ul className={showNavbar ? `${styles.navbar_appear} ${styles.navbar} ${global.square}`: `${styles.navbar_disappear} ${styles.navbar} ${global.square}`}
            style={{
              display:
              showNavbar ? 'flex' : 'none'
            }}
            >
          <li>
            <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
            <a href="#skills">
              {t('header.skills')}
            </a>
          </li>
          <li>
            <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
            <a href="#projects">
              {t('header.projects')} 
            </a>
          </li>
          <li>
          <div>
            <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
            </div>
            <a href="#contact">
              {t('header.contact')}
            </a>
          </li>
          <li>
            <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
            <a href="#cv">
              {t('header.cv')}
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