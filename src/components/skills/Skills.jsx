import React from 'react'
import styles  from './Skills.module.scss'
import global  from '../../index.module.scss'
import { SKILLS_DATA } from '../../portfolio.js'
import { useTranslation } from 'react-i18next'

const Skills = () => {

    const { t } = useTranslation();

    return  (
        <section id="skills" className={styles.skills}>
            <h2>
                {t('header.skills')}
            </h2>
            <ul className={global.square}>
                {SKILLS_DATA.map((skill, index) => (
                <li key={index} className={global.square}>
                    <img src={skill.src} alt={t('skills.alt.icon') + skill.name} title={skill.name}/>
                </li>
            ))}
            </ul>
        </section>
    )
}

export default Skills