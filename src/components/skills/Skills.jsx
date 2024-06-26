import React from 'react'
import styles  from './Skills.module.scss'
import global  from '../../index.module.scss'
import coding from '../../assets/utils/coding.svg'
import { SKILLS_DATA } from '../../portfolio.js'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'

const Skills = () => {

    const { t } = useTranslation();

    return  (
        <section id="skills" className={`${styles.skills} ${global.anchor}`}>
            <h2 className={global.anchor}>
                <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
                {t('skills.section')}
            </h2>
            <ul className={global.square}>
                {SKILLS_DATA.map((skill, index) => (
                <li key={index} className={global.square}>
                    <img src={skill.src} alt={t('skills.alt.icon') + skill.name} title={skill.name}/>
                    <span>{skill.name}</span>
                </li>
            ))}
            </ul>
        </section>
    )
}

export default Skills