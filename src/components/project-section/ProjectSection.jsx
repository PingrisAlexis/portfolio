import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import styles  from './ProjectSection.module.scss'
import global from '../../index.module.scss'
import website from '../../assets/utils/website.svg'
import github from '../../assets/utils/github.svg'
import coding from '../../assets/utils/coding.svg'

const ProjectSection =  ({ titleKey, projects, id }) => {
    const { t } = useTranslation();

   const renderProjectCard = (project, index) => (
    <li key={index} className={`${styles.card} ${global.square}`}>
            <h3>{t(`projects.${project.name}.type`)}</h3>
        <div className={styles.project_image}>
            <img src={project.src} alt={t('projects.alt.logo') + project.alt}/>
        </div>
        <span className={styles.project_presentation}>{t(`projects.${project.name}.description`)}</span>
        <hr></hr>
        <div className={styles.project_description}>
            <div className={styles.icon_container}>
                <ul className={styles.skill_container}>
                    {project.stacks.map((stack, index) => (
                        <li key={index} className={styles.icon_skill}>
                            <img key={index} src={stack.src} className={`${styles.icon_image} ${global.square}`} alt={t('projects.alt.stack') + stack.name} title={stack.name}/>
                            <span>{stack.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
        <hr className="bot-bar"></hr>

            <ul className={`${styles.link_container}`}>
                {project.isHost && 
                    <li>
                        <a href={project.url} target="_blank" rel="noreferrer" aria-label={t('projects.alt.host')}>
                            <ReactSVG src={website} className={`${styles.icon_image} ${global.square} ${global.hithere} ${styles.website}`} alt={t('projects.alt.host')}/>
                        </a>
                        <span>{t(`projects.title.website`)}</span>
                    </li>
                }
                <li>
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={t('projects.alt.github')}>
                        <img src={github} className={`${styles.icon_image} ${global.square} ${global.hithere}`} alt={t('projects.alt.github')}/>
                    </a>
                    <span>{t(`projects.title.github`)}</span>
                </li>
            </ul>
        </div>
    </li>
);

return (

   <section id={id} className={`${styles.projects} ${global.anchor}`}>
        <h2>
            <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
                {t(titleKey)}
        </h2>
        <ul className={styles.cards_container}>
            {projects.map((project, index) => renderProjectCard(project, index))}
        </ul>
    </section>
);
}
export default ProjectSection