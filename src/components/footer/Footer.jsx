import React from 'react'
import styles  from './Footer.module.scss'
import { useTranslation } from 'react-i18next'
import { Contact } from '../index.jsx'
const Footer = () => {

    const { t } = useTranslation()
    const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer_container}>
        <Contact />
        <div>
          <p>
            {t('footer.copyright')}
            {currentYear}
            {t('footer.name')}
          </p>
        </div>

    </footer> 
  );
};

export default Footer