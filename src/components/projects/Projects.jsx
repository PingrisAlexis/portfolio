import React from 'react'
import styles  from './Projects.module.scss'
import { useTranslation } from 'react-i18next'
import { PROJECTS_DATA } from '../../portfolio.js'
import netlify from '../../assets/utils/netlify.svg'
import github from '../../assets/utils/github.svg'

const Projects = () => {

    const { t } = useTranslation();

    return  (
        <section id="projects" className={styles.projects}>
            <h2>
                {t('header.projects')}
            </h2>
            <ul className={styles.cards_container}>
                {PROJECTS_DATA.map((project, index) => (
                <li key={index} className={styles.card}>
                    <div className={styles.project_image}>
                        <img src={project.src} alt={t('projects.alt.logo') + project.alt}/>
                    </div>
                    <div className={styles.project_description}>
                        <h3>
                            {t(`projects.${project.name}`)}
                        </h3>
                        <ul className={styles.icon_container}>
                            {project.stacks.map((stack, index) => (
                            <li key={index} className={styles.icon_skill}>
                                <img key={index} src={stack.src} className={styles.icon_image} alt={t('projects.alt.stack') + stack.name} title={stack.name}/>
                            </li>
                            ))}
                        </ul>
                        <ul className={`${styles.icon_container} ${styles.link_container}`}>
                            {project.isHost ? 
                            <li className={styles.hithere}>
                                <a href={project.url} target="_blank" rel="noreferrer">
                                    <img src={netlify} className={styles.icon_image} alt={t('projects.alt.host') + project.name} title={t('projects.title.netlify')} />
                                </a>
                            </li> : ''} 
                            <li className={styles.hithere}>
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <img src={github} className={styles.icon_image} alt={t('projects.alt.github') + project.name} title={t('projects.title.github')}/>
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