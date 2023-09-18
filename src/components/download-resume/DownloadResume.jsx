import React from 'react'
import styles  from './DownloadResume.module.scss'
import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'
import download from '../../assets/utils/download.svg'

const DownloadResume = () => {

    const { t } = useTranslation();

    const resumePath = process.env.PUBLIC_URL + t('resume.download'); 
    
  return (
    <div className={styles.download_resume}>
      <h3>
          {t('resume.title')}
      </h3>
      <a  href={resumePath} download={t('resume.download')}>
        <img className={`${global.square} ${global.hithere}`} src={download} title={t('resume.title')} alt={t('resume.alt')}/>
      </a>
    </div>  
  );
};

export default DownloadResume