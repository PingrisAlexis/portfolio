import React from 'react'
import styles  from './Projects.module.scss'
import { useTranslation } from 'react-i18next'
import { PROJECTS_DATA } from '../../portfolio.js'
import netlify from '../../assets/netlify.svg'
import github from '../../assets/github.svg'

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
                        <img src={project.src} alt={project.alt}/>
                    </div>
                    <div className={styles.project_description}>
                        <p>
                            {t(`projects.${project.name}`)}
                        </p>
                        <ul className={styles.icon_container}>
                            {project.stacks.map((stack, index) => (
                            <li key={index} className={styles.icon_skill}>
                                <img key={index} src={stack.src} className={styles.icon_image} alt={stack.name} title={stack.name}/>
                            </li>
                            ))}
                        </ul>
                        <ul className={`${styles.icon_container} ${styles.link_container}`}>
                            {project.isHost ? 
                            <li className={styles.hithere}>
                                <a href={project.url} target="_blank">
                                    <img src={netlify} alt={project.name} title={project.url} className={styles.icon_image}/>
                                </a>
                            </li> : ''} 
                            <li className={styles.hithere}>
                                <a href={project.github} target="_blank">
                                    <img src={github} className={styles.icon_image} title={project.github}/>
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