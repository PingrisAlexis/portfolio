import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { PROJECTS_DATA } from '../../portfolio.js'
import styles  from './Projects.module.scss'
import global from '../../index.module.scss'
import website from '../../assets/utils/website.svg'
import github from '../../assets/utils/github.svg'

const Projects = () => {

    const { t } = useTranslation();

    return  (
        <section id="projects" className={styles.projects}>
            <h2>
                {t('projects.section')}
            </h2>
            <ul className={styles.cards_container}>
                {PROJECTS_DATA.map((project, index) => (
                <li key={index} className={`${styles.card} ${global.square}`}>
                    <div className={styles.project_image}>
                        <img src={project.src} alt={t('projects.alt.logo') + project.alt}/>
                    </div>
                    <div className={styles.project_description}>
                        <h3>
                            {t(`projects.${project.name}`)}
                        </h3>
                        <div className={styles.icon_container}>
                            <p>{t(`projects.title.technologies`)}</p>
                            <ul className={styles.skill_container}>
                                {project.stacks.map((stack, index) => (
                                <li key={index} className={styles.icon_skill}>
                                    <img key={index} src={stack.src} className={`${styles.icon_image} ${global.square}`} alt={t('projects.alt.stack') + stack.name} title={stack.name}/>
                                </li>
                                ))}
                            </ul>
                        </div>
                        <ul className={`${styles.link_container}`}>
                            {project.isHost ? 
                            <li>
                                <p>{t(`projects.title.website`)}</p>
                                <a href={project.url} target="_blank" rel="noreferrer" aria-label={t('projects.alt.host')}>
                                    <ReactSVG src={website} className={`${styles.icon_image} ${global.square} ${global.hithere} ${styles.website}`} alt={t('projects.alt.host')}/>
                                </a>
                            </li> : ''} 
                            <li>
                                <p>{t(`projects.title.github`)}</p>
                                <a href={project.github} target="_blank" rel="noreferrer" aria-label={t('projects.alt.github')}>
                                    <img src={github} className={`${styles.icon_image} ${global.square} ${global.hithere}`} alt={t('projects.alt.github')}/>
                                </a>        
                            </li>
                        </ul>
                    </div>
                </li>
            ))} 
        </ul>
    </section>
    )
}

export default Projects