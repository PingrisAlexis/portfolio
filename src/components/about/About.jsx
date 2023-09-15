import React from 'react'
import { useTranslation } from 'react-i18next'
import styles  from './About.module.scss'
import { DownloadResume } from '../index'

const About = () => {
    
    const { t } = useTranslation();
    const hoverEffect = styles.hithere_hover;
    
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
            <div className={styles.description}>
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
             <DownloadResume className={hoverEffect}/>
        </section>
    )
}

export default About