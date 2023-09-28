import React from 'react'
import styles  from './About.module.scss'
import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'

const About = () => {
    
    const { t } = useTranslation();
    
    return  (
        <section id="about" className={`${styles.about} ${global.square}`}>
            <h1>
                {t('home.presentation')}
            </h1>
            <div className={styles.description}>
                <p className={styles.important_text}>
                    {t('home.job')}&nbsp;
                </p>    
                <p>
                    {t('home.description')}
                </p>  
            </div>
        </section>
    )
}

export default About