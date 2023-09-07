import React from 'react'
import { useTranslation } from 'react-i18next'
import styles  from './About.module.scss'

const About = () => {
    const { t } = useTranslation();
    return  (
        <section id="about" className={styles.about}>
            <h1>
                {t('home.presentation')}
            </h1>
            <div>
                <p>
                    {t('home.iam')}&nbsp;
                </p>
                <p className={styles.important_text}>
                    {t('home.name')}
                </p>
                <p>
                {t('home.,')}&nbsp;

            </p>  
            </div>  
            <div  className={styles.description}>
            <p>
                {t('home.a')}&nbsp;

            </p>    
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

export default About;