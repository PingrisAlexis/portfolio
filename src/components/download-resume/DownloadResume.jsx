import React from 'react'
import styles  from './DownloadResume.module.scss'
import { useTranslation } from 'react-i18next'
import download from '../../assets/utils/download.svg'

const DownloadResume = ({ className}) => {

    const { t } = useTranslation();

    const resumePath = process.env.PUBLIC_URL + t('resume.download'); 
    
  return (
    <a  href={resumePath} download={t('resume.download')} className={styles.download_resume_button}>
      <img className={className} src={download} title={t('resume.title')} alt={t('resume.alt')}/>
    </a>
  );
};

export default DownloadResume