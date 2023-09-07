import React from 'react';
import { useTranslation } from 'react-i18next';

import france from '../../assets/france.svg';
import usa from '../../assets/usa.svg';

import styles  from './LanguageSwitch.module.scss';
const LanguageSwitch = () => {
    const [isFrench, setFrench] = React.useState(false);
    const handleLanguage = () => {
        setFrench(!isFrench);
    };
    
    const { i18n } = useTranslation(); 
    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };
 

    return  isFrench ? <img className={styles.language_switch_icon} src={france} onClick={() => {changeLanguage('fr'); handleLanguage()}}/> 
    : <img className={styles.language_switch_icon} src={usa}  onClick={() => {changeLanguage('en'); handleLanguage()}}/>
}

export default LanguageSwitch;