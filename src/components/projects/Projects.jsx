import React from 'react';
import { useTranslation } from 'react-i18next';
// import styles  from './Skills.module.scss';
import { PROJECTS_DATA } from '../../portfolio.js';
const Projects = () => {

    return  (
        <section id="projects">
        <h2>Projects</h2>
        {PROJECTS_DATA.map((project, index) => (
                <section>
                <h2>{project.name}</h2>
            </section>
            ))}
        </section>

    )
}

export default Projects;