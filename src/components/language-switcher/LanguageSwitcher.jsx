import React from 'react'
import styles  from './LanguageSwitcher.module.scss'
import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'
import france from '../../assets/flags/france.png'
import usa from '../../assets/flags/usa.jpg'

const LanguageSwitcher = () => {

    const [isFrench, setFrench] = React.useState(false);
    const handleLanguage = () => {
        setFrench(!isFrench);
    };
    
    const { t } = useTranslation();

    const { i18n } = useTranslation(); 
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    
    return isFrench ? 
    <div className={`${styles.language_switcher_icon} ${global.square} ${global.hithere}`}>
      <img  src={france} alt={t('language_switcher.alt.french_flag')} title={t('language_switcher.title.french_flag')} onClick={() => {changeLanguage('fr'); handleLanguage()}}/> 
    </div>
    : 
    <div  className={`${styles.language_switcher_icon} ${global.square} ${global.hithere}`}>
      <img src={usa} alt={t('language_switcher.alt.usa_flag')} title={t('language_switcher.title.usa_flag')} onClick={() => {changeLanguage('en'); handleLanguage()}}/>
    </div>
    
    
}

export default LanguageSwitcher