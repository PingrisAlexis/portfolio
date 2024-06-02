import React from 'react'
import styles  from './Footer.module.scss'
import { useTranslation } from 'react-i18next'
import { Contact } from '../index.jsx'
const Footer = () => {

    const { t } = useTranslation();
    
  return (
    <footer className={styles.footer_container}>
        <Contact />
        <div>
          <p>
            &copy;{t('footer.copyright')}
          </p>
        </div>

    </footer> 
  );
};

export default Footer