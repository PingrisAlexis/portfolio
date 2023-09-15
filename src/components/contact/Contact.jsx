import React from 'react'
import styles  from './Contact.module.scss'
import { useTranslation } from 'react-i18next'
import gmail from '../../assets/utils/gmail.svg'
import linkedin from '../../assets/utils/linkedin.svg'
import github from '../../assets/utils/github.svg'

const Contact = () => {

  const { t } = useTranslation();

  return (
    <footer className={styles.footer}>
        <h4> FOOTER</h4>
        <ul>
          <li>
            <img src={gmail}/>
          </li>
          <li>
            <img src={linkedin}/>
          </li>
          <li>
            <img src={github}/>
          </li>
        </ul>
    </footer>
  )
}

export default Contact