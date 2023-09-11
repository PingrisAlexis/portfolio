import React from 'react'
import styles  from './LanguageSwitch.module.scss'
import { useTranslation } from 'react-i18next'
import france from '../../assets/flags/france.svg'
import usa from '../../assets/flags/usa.svg'

const LanguageSwitch = () => {

    const [isFrench, setFrench] = React.useState(false);
    const handleLanguage = () => {
        setFrench(!isFrench);
    };
    
    const { i18n } = useTranslation(); 
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
 
    return  isFrench ? <img className={styles.language_switch_icon} alt='FRANCE' src={france} onClick={() => {changeLanguage('fr'); handleLanguage()}}/> 
    : <img className={styles.language_switch_icon} src={usa} alt='USA' onClick={() => {changeLanguage('en'); handleLanguage()}}/>
}

export default LanguageSwitch