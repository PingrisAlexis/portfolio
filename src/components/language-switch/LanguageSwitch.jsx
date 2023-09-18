import React from 'react'
import styles  from './LanguageSwitch.module.scss'
import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'
import france from '../../assets/flags/france.png'
import usa from '../../assets/flags/usa.jpg'

const LanguageSwitch = () => {

    const [isFrench, setFrench] = React.useState(false);
    const handleLanguage = () => {
        setFrench(!isFrench);
    };
    
    const { t } = useTranslation();

    const { i18n } = useTranslation(); 
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
    
    return isFrench ? <img className={`${styles.language_switch_icon} ${global.square} ${global.hithere}`} src={france} alt={t('language_switch.alt.french_flag')} title={t('language_switch.title.french_flag')} onClick={() => {changeLanguage('fr'); handleLanguage()}}/> 
    : <img className={`${styles.language_switch_icon} ${global.square} ${global.hithere}`} src={usa} alt={t('language_switch.alt.usa_flag')} title={t('language_switch.title.usa_flag')} onClick={() => {changeLanguage('en'); handleLanguage()}}/>
}

export default LanguageSwitch