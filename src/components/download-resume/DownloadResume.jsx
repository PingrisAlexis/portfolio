import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import styles  from './DownloadResume.module.scss'
import global from '../../index.module.scss'
import download from '../../assets/utils/download.svg'

const DownloadResume = () => {

    const { t } = useTranslation();

    const resumePath = process.env.PUBLIC_URL + t('resume.download'); 
    
  return (
    <section className={styles.download_resume}>
       <h2> 
          {t('resume.title')}
      </h2>
      <div className={`${styles.container} ${global.square}`}>
        <h3>
        {t('resume.alt')}
        </h3>
        <a className={`${global.square} ${global.hithere}`} href={resumePath} download={t('resume.download')}>
          <ReactSVG className={`${global.square} ${global.hithere}`}  src={download} title={t('resume.title')} alt={t('resume.alt')}/>
        </a>
      </div>
    </section>  
  );
};

export default DownloadResume