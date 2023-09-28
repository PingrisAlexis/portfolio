import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import { PROJECTS_DATA } from '../../portfolio.js'
import styles  from './Projects.module.scss'
import global from '../../index.module.scss'
import website from '../../assets/utils/website.svg'
import github from '../../assets/utils/github.svg'
import download from '../../assets/utils/download.svg'
const Projects = () => {

    const { t } = useTranslation();

    return  (
        <section id="projects" className={styles.projects}>
            <h2 className={global.square}>
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
                        <ul className={styles.icon_container}>
                            {project.stacks.map((stack, index) => (
                            <li key={index} className={styles.icon_skill}>
                                <img key={index} src={stack.src} className={`${styles.icon_image} ${global.square}`} alt={t('projects.alt.stack') + stack.name} title={stack.name}/>
                            </li>
                            ))}
                        </ul>
                        <ul className={`${styles.icon_container} ${styles.link_container}`}>
                            {project.isHost ? 
                            <li>
                                <a href={project.url} target="_blank" rel="noreferrer">
                                    <ReactSVG src={website} className={`${styles.icon_image} ${global.square} ${styles.hithere}  ${styles.website}`} alt={t('projects.alt.host') + project.name} title={t('projects.title.website')} />
                                </a>
                            </li> : ''} 
                            <li>
                                <a href={project.github} target="_blank" rel="noreferrer">
                                    <img src={github} className={`${styles.icon_image} ${global.square} ${styles.hithere}`} alt={t('projects.alt.github') + project.name} title={t('projects.title.github')}/>
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