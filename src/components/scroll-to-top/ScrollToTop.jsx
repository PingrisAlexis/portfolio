import React, { useState, useEffect } from 'react'
import styles  from './ScrollToTop.module.scss'
import global from '../../index.module.scss'
import { useTranslation } from 'react-i18next'
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
      <div>
        <img src={top} className={`${styles.scroll_to_top_button} ${global.square} ${global.hithere}`} onClick={scrollToTop} alt={t('scroll_to_the_top.alt.icon')} title={t('scroll_to_the_top.title')}/>
      </div>
    )
  );
};

export default ScrollToTop