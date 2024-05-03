import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import styles  from './Resume.module.scss'
import global from '../../index.module.scss'
import download from '../../assets/utils/download.svg'
import coding from '../../assets/utils/coding.svg'

const Resume = () => {

  const { t } = useTranslation();
  const [width, setWidth] = React.useState(window.innerWidth);
  const breakpoint = 600;
  const resumePath = process.env.PUBLIC_URL + t('resume.download'); 

  React.useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="cv" className={styles.download_resume}>
      <h2>
        <ReactSVG src={coding} className={global.coding_caret} alt={t('header.alt.logo')}/>
        {t('resume.title')}
      </h2>
      <div className={`${styles.container} ${global.square}`}>
        { width > breakpoint ? <iframe src={t('resume.download')} title={t('resume.alt')} width="100%" height="600"></iframe> 
          : <a className={`${global.square} ${global.hithere}`} href={resumePath} download={t('resume.download')} aria-label={t('resume.alt')}>
              <ReactSVG className={`${global.square} ${global.hithere}`}  src={download} title={t('resume.title')}/>
            </a>
        }
      </div>
    </section>  
  );
};

export default Resume