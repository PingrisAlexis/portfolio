import React from 'react'
import styles  from './Footer.module.scss'
// import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'

const Footer = () => {

    const { t } = useTranslation();
    
  return (
    <footer className={styles.footer_container}>
        <p>
        &copy;{t('footer.copyright')}
        </p>
    </footer> 
  );
};

export default Footer