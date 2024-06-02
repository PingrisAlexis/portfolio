import React from 'react'
import styles  from './Contact.module.scss'
import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'
import light_gmail from '../../assets/utils/light_gmail.svg'
import linkedin from '../../assets/utils/linkedin.svg'
import github from '../../assets/utils/github.svg'
import coding from '../../assets/utils/coding.svg'
import { ReactSVG } from 'react-svg'
const Contact = () => {

  const { t } = useTranslation();

  return (
    <div id="contact" className={`${styles.contact} ${global.anchor}`}>
      <div className={`${styles.container} ${global.square}`}>
      <h2>
        <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
        {t('contact.section')}
      </h2>
        <ul className={styles.items}>
          <li>
          <a href={`mailto:${t('contact.email')}`}>
              <img className={`${styles.icon_image} ${styles.mail} ${global.square} ${global.hithere}`} src={light_gmail} alt={t('contact.alt.gmail')} title={t('contact.alt.gmail')}/>
            </a>
          </li>
          <li>
            <a href={t('contact.url.linkedin')} target="_blank" rel="noreferrer">
              <img className={`${styles.icon_image} ${global.square} ${global.hithere}`} src={linkedin} alt={t('contact.alt.linkedin')} title={t('contact.alt.linkedin')}/>
            </a>
          </li>
          <li>
            <a href={t('contact.url.github')} target="_blank" rel="noreferrer">
              <img className={`${styles.icon_image} ${global.square} ${global.hithere}`} src={github} alt={t('contact.alt.github')} title={t('contact.alt.github')}/>
            </a>         
          </li>
        </ul>  
      </div>  
    </div>
  )
}

export default Contact