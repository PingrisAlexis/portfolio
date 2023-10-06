import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ReactSVG } from 'react-svg'
import styles  from './ScrollToTop.module.scss'
import global from '../../index.module.scss'
import top from '../../assets/utils/top.svg'

const ScrollToTop = () => {
  
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY  > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    isVisible && (
      <ReactSVG  aria-label={t('scroll_to_the_top.alt')} className={`${styles.scroll_to_top_button} ${global.square} ${global.hithere}`}  src={top}onClick={scrollToTop} alt={t('scroll_to_the_top.alt.icon')} title={t('scroll_to_the_top.title')}/>
    )
  );
};

export default ScrollToTop