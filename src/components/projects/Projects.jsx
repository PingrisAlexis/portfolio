import React from 'react';
import { PROJECTS_DATA } from '../../portfolio.js'
import { ProjectSection } from '../index.jsx'
import global from '../../index.module.scss'

const Projects = () => {

  const personalProjects = PROJECTS_DATA.filter(project => project.isPersonnalProject)
  const studyProjects = PROJECTS_DATA.filter(project => !project.isPersonnalProject)

  return (
      <>
          <ProjectSection
              titleKey="projects.section.personnals"
              projects={personalProjects}
              id="personnals-projects"
              className={global.anchor}
          />
          <ProjectSection
              titleKey="projects.section.studies"
              projects={studyProjects}
              id="studies-projects"
              className={global.anchor}
          />
      </>
  )
}

export default Projects